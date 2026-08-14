import React from 'react';
import { ApiPatient } from '../types';
import { MoreHorizontal } from 'lucide-react';

interface PatientListItemProps {
  patient: ApiPatient;
  isSelected: boolean;
}

export const PatientListItem: React.FC<PatientListItemProps> = ({
  patient,
  isSelected,
}) => {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-[12px] transition-all select-none ${
        isSelected
          ? 'bg-[#D8FCF7]'
          : 'hover:bg-[#F6F7F8]'
      }`}
    >
      {/* Left: Avatar + Details */}
      <div className="flex items-center gap-3.5 min-w-0">
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

      {/* Right: Triple dots */}
      <div className="p-1.5 text-[#072635] flex-shrink-0 ml-2">
        <MoreHorizontal className="w-5 h-5 text-[#072635]" />
      </div>
    </div>
  );
};
