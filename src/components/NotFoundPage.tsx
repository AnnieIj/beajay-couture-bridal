import React from 'react';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateCollections: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onNavigateCollections
}) => {
  return (
    <main 
      id="not-found-page"
      role="main"
      className="min-h-[70vh] flex items-center justify-center bg-[#FCFAF7] dark:bg-[#121110] text-[#141312] dark:text-[#E8E3D8] px-4 sm:px-6 lg:px-8 py-20 sm:py-28 transition-colors duration-300"
    >
      <div className="w-full max-w-2xl mx-auto text-center space-y-8 sm:space-y-10">
        
        {/* Brand Eyebrow */}
        <div className="space-y-3">
          <span className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.28em] text-[#856122] dark:text-[#E6C875] uppercase block">
            BEAJAY COUTURE BRIDAL
          </span>
          <div className="w-10 h-px bg-[#C59B3F] mx-auto" aria-hidden="true" />
        </div>

        {/* 404 Headline & Copy */}
        <div className="space-y-4 sm:space-y-5">
          <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl text-[#141312] dark:text-[#F8F5EE] font-light tracking-tight leading-none select-none">
            404
          </h1>
          
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#141312] dark:text-[#F8F5EE] font-normal tracking-[0.16em] uppercase">
            PAGE NOT FOUND
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-[#A39D93] font-light max-w-md mx-auto leading-relaxed">
            The page you're looking for could not be found.
          </p>
        </div>

        {/* Minimal Divider */}
        <div className="w-16 h-px bg-[#EAE3D5] dark:bg-white/10 mx-auto" aria-hidden="true" />

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2">
          <button
            id="return-home-btn"
            onClick={onNavigateHome}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-[#141312] dark:bg-[#F8F5EE] text-[#F8F5EE] dark:text-[#141312] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#856122] dark:hover:bg-[#E6C875] dark:hover:text-[#141312] transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C59B3F] focus:ring-offset-2"
          >
            RETURN HOME
          </button>

          <button
            id="explore-collections-btn"
            onClick={onNavigateCollections}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 border border-[#141312] dark:border-[#F8F5EE] text-[#141312] dark:text-[#F8F5EE] text-xs font-semibold tracking-[0.2em] uppercase hover:border-[#856122] hover:text-[#856122] dark:hover:border-[#E6C875] dark:hover:text-[#E6C875] hover:bg-[#F2EDE2]/40 dark:hover:bg-[#22201E]/40 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C59B3F] focus:ring-offset-2"
          >
            EXPLORE COLLECTIONS
          </button>
        </div>

      </div>
    </main>
  );
};
