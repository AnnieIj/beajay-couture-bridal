/**
 * BEAJAY COUTURE BRIDAL — Optimized Media Delivery Helper
 * Provides deterministic mapping from original high-resolution photography paths
 * to responsive WebP derivatives (480w, 800w, 1200w, 1600w).
 *
 * Fallbacks gracefully to original paths for external URLs, SVGs, or uncataloged items.
 */

import manifestData from '../config/optimizedMediaManifest.json';

export interface OptimizedMediaEntry {
  origPath: string;
  width: number;
  height: number;
  aspectRatio: number;
  sizes: Record<string, string>;
  srcSet: string;
  defaultSrc: string;
}

const manifest = manifestData as Record<string, OptimizedMediaEntry>;

/**
 * Normalizes input media URLs for deterministic lookup in the manifest.
 */
function normalizeKey(pathOrUrl?: string | null): string | null {
  if (!pathOrUrl) return null;
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://') || pathOrUrl.startsWith('data:')) {
    return null; // External asset
  }

  // Remove query params or hashes if present
  let clean = pathOrUrl.split('?')[0].split('#')[0];
  // Decode URL components (e.g. %20 -> ' ')
  try {
    clean = decodeURIComponent(clean);
  } catch {
    // Keep clean as is
  }

  // Ensure standard leading slash
  if (!clean.startsWith('/')) {
    clean = '/' + clean;
  }

  return clean;
}

/**
 * Retrieves the full responsive metadata for an asset.
 */
export function getOptimizedMedia(rawPath?: string | null): {
  src: string;
  srcSet?: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
  thumbnail?: string;
} {
  if (!rawPath) {
    return { src: '', thumbnail: '' };
  }

  const key = normalizeKey(rawPath);
  if (!key) {
    return { src: rawPath, thumbnail: rawPath };
  }

  const entry = manifest[key] || manifest[key.replace(/^\//, '')];
  if (!entry) {
    return { src: rawPath, thumbnail: rawPath };
  }

  const thumbSrc = entry.sizes?.['480'] || entry.sizes?.['800'] || entry.defaultSrc || rawPath;

  return {
    src: entry.defaultSrc || rawPath,
    srcSet: entry.srcSet || undefined,
    width: entry.width,
    height: entry.height,
    aspectRatio: entry.aspectRatio,
    thumbnail: thumbSrc
  };
}

/**
 * Returns a specific responsive derivative width for direct use in `src`
 * (e.g. cards, modals, or lightboxes where a fixed high-fidelity width is optimal).
 */
export function getOptimizedSrc(
  rawPath?: string | null,
  preferredWidth: 480 | 800 | 1200 | 1600 = 800
): string {
  if (!rawPath) return '';

  const key = normalizeKey(rawPath);
  if (!key) return rawPath;

  const entry = manifest[key] || manifest[key.replace(/^\//, '')];
  if (!entry || !entry.sizes) return rawPath;

  // Exact match
  if (entry.sizes[preferredWidth]) {
    return entry.sizes[preferredWidth];
  }

  // Closest available width fallback
  const availableWidths = Object.keys(entry.sizes)
    .map(Number)
    .sort((a, b) => a - b);

  if (availableWidths.length === 0) {
    return entry.defaultSrc || rawPath;
  }

  // Find smallest width >= preferredWidth, or largest available
  const match = availableWidths.find((w) => w >= preferredWidth) || availableWidths[availableWidths.length - 1];
  return entry.sizes[match] || entry.defaultSrc || rawPath;
}

/**
 * Card / grid thumbnail width (480w - 800w)
 */
export function getCardSrc(rawPath?: string | null): string {
  return getOptimizedSrc(rawPath, 800);
}

/**
 * Micro thumbnail width (480w)
 */
export function getThumbnailSrc(rawPath?: string | null): string {
  return getOptimizedSrc(rawPath, 480);
}

/**
 * Fullscreen / modal / lightbox high-res width (1200w - 1600w)
 */
export function getDetailSrc(rawPath?: string | null): string {
  return getOptimizedSrc(rawPath, 1200);
}

/**
 * Prepares standard responsive image attributes for high-performance lazy loading
 */
export function getResponsiveImageProps(
  rawPath?: string | null,
  options?: {
    sizes?: string;
    priority?: boolean;
    preferredWidth?: 480 | 800 | 1200 | 1600;
  }
) {
  const opt = getOptimizedMedia(rawPath);
  const preferredSrc = options?.preferredWidth 
    ? getOptimizedSrc(rawPath, options.preferredWidth) 
    : opt.src;

  return {
    src: preferredSrc,
    srcSet: opt.srcSet,
    sizes: options?.sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    loading: options?.priority ? ('eager' as const) : ('lazy' as const),
    decoding: 'async' as const
  };
}
