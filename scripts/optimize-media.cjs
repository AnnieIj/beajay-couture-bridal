const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const MEDIA_ROOT = path.join(__dirname, '../public/media');
const OPTIMIZED_ROOT = path.join(__dirname, '../public/media/optimized');

const TARGET_WIDTHS = [480, 800, 1200, 1600];

// Collect all photographic files
function findPhotos(dir) {
  let photos = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'optimized') {
        photos = photos.concat(findPhotos(fullPath));
      }
    } else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) {
      photos.push(fullPath);
    }
  }
  return photos;
}

const allPhotos = findPhotos(MEDIA_ROOT);
console.log(`Found ${allPhotos.length} source photographic assets.`);

let manifest = {};
let totalOrigBytes = 0;
let totalOptBytes = 0;
let generatedCount = 0;

for (let i = 0; i < allPhotos.length; i++) {
  const origPath = allPhotos[i];
  const origRel = path.relative(MEDIA_ROOT, origPath); // e.g. "gallery/44.jpeg"
  const stat = fs.statSync(origPath);
  totalOrigBytes += stat.size;

  // Get dimensions using ImageMagick identify
  let width = 0, height = 0;
  try {
    const dim = execSync(`identify -format "%w %h" "${origPath}"`, { encoding: 'utf8' }).trim().split(' ');
    width = parseInt(dim[0], 10);
    height = parseInt(dim[1], 10);
  } catch (e) {
    console.error(`Error identifying ${origRel}:`, e.message);
    continue;
  }

  // Parse path components
  const parsed = path.parse(origRel);
  // Sanitize filename for web safe URLs (replace spaces with dashes or keep consistent)
  // Let us check: the original has spaces in some names, like "mermaid 005.jpeg".
  // If we slugify or keep clean basename: e.g. parsed.name: "mermaid 005" -> "mermaid-005"
  const cleanBase = parsed.name.replace(/\s+/g, '-').toLowerCase();
  const subDir = parsed.dir; // e.g. "collections/mermaid"

  const targetDir = path.join(OPTIMIZED_ROOT, subDir);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const fileManifest = {
    origPath: `/media/${origRel}`,
    width,
    height,
    aspectRatio: width && height ? parseFloat((width / height).toFixed(4)) : 1,
    sizes: {},
    srcSet: '',
    defaultSrc: ''
  };

  const generatedSizes = [];

  // Generate WebP derivatives at target widths (only if image is at least that wide, or if it's the smallest fallback)
  for (const tw of TARGET_WIDTHS) {
    // Only generate if source width >= target width * 0.85 (avoid upscaling)
    // or if it's the lowest target width (480)
    if (tw <= width || tw === 480) {
      const outFilename = `${cleanBase}-${tw}w.webp`;
      const outPath = path.join(targetDir, outFilename);
      const outWebPath = `/media/optimized/${subDir ? subDir + '/' : ''}${outFilename}`;

      // Run convert with resize 'twx>' (never upscale) and quality 82 (80 for 1600w)
      const q = tw >= 1200 ? 80 : 82;
      try {
        execSync(`convert "${origPath}" -auto-orient -resize "${tw}x>" -quality ${q} "${outPath}"`);
        const optStat = fs.statSync(outPath);
        totalOptBytes += optStat.size;
        generatedCount++;
        fileManifest.sizes[tw] = outWebPath;
        generatedSizes.push(`${outWebPath} ${tw}w`);
      } catch (err) {
        console.error(`Failed to convert ${origRel} to ${tw}w:`, err.message);
      }
    }
  }

  // Also create a canonical default WebP at 800w or 1200w
  const defaultTarget = width >= 1200 ? 1200 : (width >= 800 ? 800 : 480);
  fileManifest.defaultSrc = fileManifest.sizes[defaultTarget] || fileManifest.sizes[480] || `/media/${origRel}`;
  fileManifest.srcSet = generatedSizes.join(', ');

  // Key by both original relative path and normalized path
  const key1 = `/media/${origRel}`;
  const key2 = `/media/${origRel}`.replace(/\\/g, '/');
  const key3 = origRel.replace(/\\/g, '/');
  manifest[key1] = fileManifest;
  manifest[key2] = fileManifest;
  manifest[key3] = fileManifest;

  if ((i + 1) % 10 === 0 || i === allPhotos.length - 1) {
    console.log(`Processed ${i + 1}/${allPhotos.length} photos...`);
  }
}

// Write the manifest to src/config/optimizedMediaManifest.json
const manifestPath = path.join(__dirname, '../src/config/optimizedMediaManifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');

console.log('\n========================================');
console.log('OPTIMIZATION AUDIT RESULTS:');
console.log(`Audited assets: ${allPhotos.length}`);
console.log(`Original total size: ${(totalOrigBytes / (1024 * 1024)).toFixed(2)} MB`);
console.log(`Optimized derivatives total size: ${(totalOptBytes / (1024 * 1024)).toFixed(2)} MB`);
console.log(`Derivatives generated: ${generatedCount}`);
const reduction = ((1 - totalOptBytes / totalOrigBytes) * 100).toFixed(1);
console.log(`Total storage reduction: ${reduction}%`);
console.log('Manifest written to:', manifestPath);
console.log('========================================\n');
