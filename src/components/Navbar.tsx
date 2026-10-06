import React from 'react';
import { IntentLogo } from './icons/IntentLogo';

interface NavbarProps {
  onSignUpClick?: () => void;
  onOpenPanelClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSignUpClick, onOpenPanelClick }) => {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none font-sans">
      <div className="w-full max-w-[1157px] h-[59px] rounded-[29.5px] bg-[#191919]/72 backdrop-blur-md flex items-center justify-between p-[0.5px] border border-white/5 pointer-events-auto transition-all shadow-lg">
        {/* Left Pill - IntentWeb Brand Badge */}
        <a
          href="/"
          className="h-[58px] min-w-[206px] px-6 rounded-[29px] bg-[#010101] border border-[#6D6D6D] flex items-center justify-center select-none shadow-sm cursor-pointer hover:border-[#8e8e8e] transition-colors"
        >
          <IntentLogo height={23} />
        </a>

        {/* Right Dual-Button Group */}
        <div className="flex items-center pr-1">
          {/* Sign up Button */}
          <a
            href="https://panel.web.int.yt/authentication/sign-up"
            onClick={onSignUpClick}
            className="h-[50px] px-7 rounded-l-[25px] bg-[#21386C] hover:bg-[#284485] active:bg-[#1a2d57] text-white flex items-center justify-center font-bold text-[18px] tracking-tight transition-all duration-150 focus:outline-none cursor-pointer"
          >
            <span>Sign up</span>
          </a>

          {/* Open Panel Button */}
          <a
            href="https://panel.web.int.yt/dashboard"
            onClick={onOpenPanelClick}
            className="h-[50px] px-7 rounded-r-[25px] bg-[#2A64E7] hover:bg-[#3974f7] active:bg-[#2052c4] text-white flex items-center justify-center font-bold text-[18px] tracking-tight transition-all duration-150 focus:outline-none cursor-pointer shadow-md"
          >
            <span>Open Panel</span>
          </a>
        </div>
      </div>
    </header>
  );
};
