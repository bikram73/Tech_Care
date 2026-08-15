import React, { useState } from 'react';
import { TechCareLogo } from './Icons';
import {
  House,
  Users,
  Check,
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onGoToHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onGoToHome }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: House },
    { id: 'patients', label: 'Patients', icon: Users },
  ];

  return (
    <header className="relative w-full bg-white rounded-[70px] px-6 lg:px-8 py-3.5 flex items-center justify-between shadow-xs mb-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-[#072635] text-white px-4 py-2 rounded-full text-[13px] font-medium flex items-center gap-2 shadow-xl z-50 animate-in fade-in slide-in-from-top-2">
          <Check className="w-4 h-4 text-[#00D9C6]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Brand Logo */}
      <div className="flex items-center">
        <div className="flex items-center cursor-pointer" onClick={onGoToHome || (() => setActiveTab('patients'))}>
          <TechCareLogo />
        </div>
      </div>

      {/* Center Nav Links */}
      <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                if (item.id === 'overview' && onGoToHome) {
                  onGoToHome();
                  return;
                }
                setActiveTab(item.id);
                if (item.id !== 'patients') {
                  showToast(`Navigated to ${item.label}`);
                }
              }}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-[14px] font-bold transition-all cursor-pointer select-none ${
                isActive
                  ? 'bg-[#01F0D0] text-[#072635]'
                  : 'text-[#072635] hover:bg-[#F6F7F8]'
              }`}
            >
              <Icon className="w-[18px] h-[18px]" strokeWidth={isActive ? 2.5 : 2} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Right User Profile */}
      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-3 p-1 rounded-full"
        >
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=120&auto=format&fit=crop&q=80"
            alt="Dr. Jose Simmons"
            className="w-11 h-11 rounded-full object-cover border border-slate-100 shadow-xs"
            referrerPolicy="no-referrer"
          />
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[14px] font-bold text-[#072635] leading-tight">
              Dr. Jose Simmons
            </span>
            <span className="text-[12px] text-[#707070] font-medium leading-tight">
              General Practitioner
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
