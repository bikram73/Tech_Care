import React, { useState } from 'react';
import { ApiPatient } from '../types';
import { MoreHorizontal, Phone, FileText, Check } from 'lucide-react';

interface PatientListItemProps {
  patient: ApiPatient;
  isSelected: boolean;
  onSelect: () => void;
}

export const PatientListItem: React.FC<PatientListItemProps> = ({
  patient,
  isSelected,
  onSelect,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (patient.phone_number) {
      navigator.clipboard?.writeText(patient.phone_number);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setMenuOpen(false);
      }, 1500);
    }
  };

  return (
    <div className="relative">
      <div
        role="button"
        tabIndex={0}
        onClick={onSelect}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect();
          }
        }}
        className={`flex items-center justify-between p-3 rounded-[12px] transition-all select-none cursor-pointer ${
          isSelected
            ? 'bg-[#D8FCF7] ring-1 ring-[#00D9C6]/50'
            : 'hover:bg-[#F6F7F8] active:bg-[#ECEFF1]'
        }`}
      >
        {/* Left: Avatar + Details */}
        <div className="flex items-center gap-3.5 min-w-0 pointer-events-none">
          <img
            src={patient.profile_picture}
            alt={patient.name}
            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col text-left truncate">
            <span className="text-[14px] font-bold text-[#072635] leading-snug truncate">
              {patient.name}
            </span>
            <span className="text-[14px] text-[#707070] font-medium leading-snug">
              {patient.gender}, {patient.age}
            </span>
          </div>
        </div>

        {/* Right: Triple dots button */}
        <button
          type="button"
          aria-label={`Options for ${patient.name}`}
          onClick={handleMoreClick}
          className="p-1.5 text-[#072635] hover:bg-black/5 rounded-full transition flex-shrink-0 ml-2 cursor-pointer"
        >
          <MoreHorizontal className="w-5 h-5 text-[#072635]" />
        </button>
      </div>

      {/* Quick Action Popover Menu */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-20"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
          />
          <div className="absolute right-2 top-14 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-30 text-left animate-in fade-in zoom-in-95">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
                setMenuOpen(false);
              }}
              className="w-full px-3.5 py-2 text-[13px] font-medium text-[#072635] hover:bg-[#F6F7F8] flex items-center gap-2.5 transition text-left cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#00D9C6]" />
              <span>View Clinical Chart</span>
            </button>
            <button
              type="button"
              onClick={handleCopyPhone}
              className="w-full px-3.5 py-2 text-[13px] font-medium text-[#072635] hover:bg-[#F6F7F8] flex items-center gap-2.5 transition text-left cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600">Copied Number!</span>
                </>
              ) : (
                <>
                  <Phone className="w-4 h-4 text-[#707070]" />
                  <span>Call {patient.phone_number || 'Patient'}</span>
                </>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
