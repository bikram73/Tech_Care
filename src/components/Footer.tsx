import React from 'react';
import { TechCareLogo } from './Icons';
import { ArrowUp, Home, LayoutDashboard } from 'lucide-react';

interface FooterProps {
  onGoToHome?: () => void;
  onEnterDashboard?: () => void;
  isDashboard?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onGoToHome,
  onEnterDashboard,
  isDashboard = false,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="dashboard-footer"
      className={`w-full bg-[#072635] text-white py-8 px-4 sm:px-8 text-xs ${
        isDashboard ? 'rounded-[16px] mt-10 shadow-xs' : ''
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <TechCareLogo dark={true} />
        </div>

        <p className="text-slate-300 font-medium text-[13px] text-center">
          © 2026 Tech.Care Clinical Health Solutions. Front-End Developer Skill Assessment.
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          {isDashboard ? (
            <>
              {onGoToHome && (
                <button
                  type="button"
                  onClick={onGoToHome}
                  className="inline-flex items-center gap-1.5 text-[#01F0D0] hover:text-white font-bold text-[13px] transition cursor-pointer"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
              )}
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-semibold text-[13px] transition cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Top</span>
              </button>
            </>
          ) : (
            onEnterDashboard && (
              <button
                type="button"
                onClick={onEnterDashboard}
                className="inline-flex items-center gap-1.5 text-[#01F0D0] hover:text-white font-bold text-[13px] hover:underline cursor-pointer transition"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Open Dashboard</span>
              </button>
            )
          )}
        </div>
      </div>
    </footer>
  );
};
