import React from 'react';
import { TechCareLogo } from './Icons';
import {
  House,
  Users,
  Calendar,
  MessageSquare,
  CreditCard,
  Settings,
  MoreVertical,
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: House },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'message', label: 'Message', icon: MessageSquare },
    { id: 'transactions', label: 'Transactions', icon: CreditCard },
  ];

  return (
    <header className="w-full bg-white rounded-[70px] px-6 lg:px-8 py-3.5 flex items-center justify-between shadow-xs mb-8">
      {/* Brand Logo */}
      <div className="flex items-center">
        <TechCareLogo />
      </div>

      {/* Center Nav Links */}
      <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
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
        <div className="flex items-center gap-3">
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

        {/* Divider */}
        <div className="h-9 w-[1px] bg-[#EDEDED] mx-1"></div>

        {/* Action icons */}
        <div className="flex items-center gap-1">
          <button
            title="Settings"
            className="p-2 rounded-full text-[#072635] hover:bg-[#F6F7F8] transition cursor-pointer"
          >
            <Settings className="w-[19px] h-[19px]" strokeWidth={2} />
          </button>
          <button
            title="More Options"
            className="p-2 rounded-full text-[#072635] hover:bg-[#F6F7F8] transition cursor-pointer"
          >
            <MoreVertical className="w-[19px] h-[19px]" strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
};
