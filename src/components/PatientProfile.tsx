import React from 'react';
import { Patient } from '../types';
import { ProfileInfoIcon } from './Icons';

interface PatientProfileProps {
  patient: Patient;
  onShowAllInfo: () => void;
}

export const PatientProfile: React.FC<PatientProfileProps> = ({
  patient,
  onShowAllInfo,
}) => {
  return (
    <div className="w-full bg-white rounded-[16px] p-6 shadow-xs flex flex-col items-center text-center">
      {/* Patient Avatar Frame */}
      <div className="relative mt-2">
        <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-full p-1 bg-gradient-to-b from-[#E0F3FA] to-[#D8FCF7] flex items-center justify-center shadow-xs">
          <img
            src={patient.avatar}
            alt={patient.name}
            className="w-full h-full rounded-full object-cover shadow-inner"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Patient Full Name */}
      <h2 className="text-[24px] font-extrabold text-[#072635] mt-6 mb-7 tracking-tight">
        {patient.name}
      </h2>

      {/* Info List */}
      <div className="w-full space-y-6 text-left">
        
        {/* Date Of Birth */}
        <div className="flex items-center gap-4">
          <ProfileInfoIcon icon="birth" />
          <div className="flex flex-col">
            <span className="text-[12px] font-medium text-[#707070]">
              Date Of Birth
            </span>
            <span className="text-[14px] font-bold text-[#072635]">
              {patient.dateOfBirth}
            </span>
          </div>
        </div>

        {/* Gender */}
        <div className="flex items-center gap-4">
          <ProfileInfoIcon icon="gender" />
          <div className="flex flex-col">
            <span className="text-[12px] font-medium text-[#707070]">
              Gender
            </span>
            <span className="text-[14px] font-bold text-[#072635]">
              {patient.gender}
            </span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-4">
          <ProfileInfoIcon icon="phone" />
          <div className="flex flex-col">
            <span className="text-[12px] font-medium text-[#707070]">
              Contact Info.
            </span>
            <span className="text-[14px] font-bold text-[#072635]">
              {patient.phoneNumber}
            </span>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="flex items-center gap-4">
          <ProfileInfoIcon icon="emergency" />
          <div className="flex flex-col">
            <span className="text-[12px] font-medium text-[#707070]">
              Emergency Contacts
            </span>
            <span className="text-[14px] font-bold text-[#072635]">
              {patient.emergencyContact}
            </span>
          </div>
        </div>

        {/* Insurance Provider */}
        <div className="flex items-center gap-4">
          <ProfileInfoIcon icon="insurance" />
          <div className="flex flex-col">
            <span className="text-[12px] font-medium text-[#707070]">
              Insurance Provider
            </span>
            <span className="text-[14px] font-bold text-[#072635]">
              {patient.insuranceProvider}
            </span>
          </div>
        </div>

      </div>

      {/* Action Button */}
      <button
        type="button"
        onClick={onShowAllInfo}
        className="w-full mt-8 py-3.5 px-6 rounded-full bg-[#01F0D0] hover:bg-[#00d8bc] active:scale-[0.99] transition-all font-bold text-[14px] text-[#072635] text-center shadow-xs cursor-pointer select-none"
      >
        Show All Information
      </button>
    </div>
  );
};
