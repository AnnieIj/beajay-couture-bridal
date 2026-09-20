import React from 'react';

/**
 * Official TikTok Icon SVG
 * Rendered using the standard TikTok music note glyph.
 */
export const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.068-.1a2.89 2.89 0 0 1 2.378-4.542c.32 0 .633.052.926.15V9.404a6.34 6.34 0 0 0-.926-.068C6.012 9.336 3.2 12.148 3.2 15.618c0 3.47 2.812 6.282 6.282 6.282 3.47 0 6.282-2.812 6.282-6.282V8.37a8.214 8.214 0 0 0 5.168 1.83V6.758a4.836 4.836 0 0 1-1.343-.072Z" />
  </svg>
);
