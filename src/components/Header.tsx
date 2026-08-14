import React, { useState } from 'react';
import { TechCareLogo } from './Icons';
import {
  House,
  Users,
  Calendar,
  MessageSquare,
  CreditCard,
  Settings,
  MoreVertical,
  Bell,
  LogOut,
  UserCheck,
  Check,
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: House },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'message', label: 'Message', icon: MessageSquare },
    { id: 'transactions', label: 'Transactions', icon: CreditCard },
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
      <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('patients')}>
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
              type="button"
              onClick={() => {
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

      {/* Right User Profile & Controls */}
      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-3 cursor-pointer p-1 rounded-full hover:bg-[#F6F7F8] transition"
          onClick={() => showToast('Dr. Jose Simmons (General Practitioner)')}
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

        {/* Divider */}
        <div className="h-9 w-[1px] bg-[#EDEDED] mx-1"></div>

        {/* Action icons */}
        <div className="flex items-center gap-1 relative">
          {/* Settings Button */}
          <div className="relative">
            <button
              type="button"
              title="Settings"
              onClick={() => {
                setSettingsOpen((prev) => !prev);
                setMoreMenuOpen(false);
              }}
              className={`p-2 rounded-full transition cursor-pointer ${
                settingsOpen
                  ? 'bg-[#01F0D0] text-[#072635]'
                  : 'text-[#072635] hover:bg-[#F6F7F8]'
              }`}
            >
              <Settings className="w-[19px] h-[19px]" strokeWidth={2} />
            </button>

            {settingsOpen && (
              <>
                <div
                  className="fixed inset-0 z-20"
                  onClick={() => setSettingsOpen(false)}
                />
                <div className="absolute right-0 top-11 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-30 animate-in fade-in zoom-in-95 text-left">
                  <div className="px-3.5 py-2 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-[#707070] uppercase tracking-wider">
                      Preferences
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      showToast('Notification settings updated');
                      setSettingsOpen(false);
                    }}
                    className="w-full px-3.5 py-2 text-[13px] font-medium text-[#072635] hover:bg-[#F6F7F8] flex items-center gap-2.5 transition cursor-pointer"
                  >
                    <Bell className="w-4 h-4 text-[#707070]" />
                    <span>Clinic Alerts & Vitals</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      showToast('User preferences synced');
                      setSettingsOpen(false);
                    }}
                    className="w-full px-3.5 py-2 text-[13px] font-medium text-[#072635] hover:bg-[#F6F7F8] flex items-center gap-2.5 transition cursor-pointer"
                  >
                    <UserCheck className="w-4 h-4 text-[#707070]" />
                    <span>Doctor Profile</span>
                  </button>
                </div>
              </>
            )}
          </div>

          {/* More Options Button */}
          <div className="relative">
            <button
              type="button"
              title="More Options"
              onClick={() => {
                setMoreMenuOpen((prev) => !prev);
                setSettingsOpen(false);
              }}
              className={`p-2 rounded-full transition cursor-pointer ${
                moreMenuOpen
                  ? 'bg-[#01F0D0] text-[#072635]'
                  : 'text-[#072635] hover:bg-[#F6F7F8]'
              }`}
            >
              <MoreVertical className="w-[19px] h-[19px]" strokeWidth={2} />
            </button>

            {moreMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-20"
                  onClick={() => setMoreMenuOpen(false)}
                />
                <div className="absolute right-0 top-11 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-30 animate-in fade-in zoom-in-95 text-left">
                  <button
                    type="button"
                    onClick={() => {
                      window.print();
                      setMoreMenuOpen(false);
                    }}
                    className="w-full px-3.5 py-2 text-[13px] font-medium text-[#072635] hover:bg-[#F6F7F8] transition cursor-pointer"
                  >
                    Print Patient Chart
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      showToast('Logged out of clinician session');
                      setMoreMenuOpen(false);
                    }}
                    className="w-full px-3.5 py-2 text-[13px] font-medium text-rose-600 hover:bg-rose-50 flex items-center gap-2 transition cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
