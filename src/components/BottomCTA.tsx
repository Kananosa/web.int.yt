import React from 'react';
import { ArrowRightIcon } from './icons/CardIcons';

interface BottomCTAProps {
  onDeployClick: () => void;
}

export const BottomCTA: React.FC<BottomCTAProps> = ({ onDeployClick }) => {
  return (
    <section className="mt-[160px] mb-[150px] w-full flex justify-center px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-[1200px]">
        {/* Headline */}
        <h2 className="text-[44px] sm:text-[54px] lg:text-[64px] font-bold text-white tracking-[-0.03em] leading-[1.12] mb-10">
          Your next site could be live
          <br />
          in a few minutes.
        </h2>

        {/* CTA Button */}
        <button
          onClick={onDeployClick}
          type="button"
          className="h-[57px] w-full sm:w-[334px] rounded-[12px] bg-[#2A64E7] hover:bg-[#3873f7] active:bg-[#2052c4] text-white text-[20px] font-medium flex items-center justify-center gap-3 transition-all duration-200 shadow-lg shadow-blue-900/30 group cursor-pointer"
        >
          <span>Deploy your first site</span>
          <ArrowRightIcon size={22} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
