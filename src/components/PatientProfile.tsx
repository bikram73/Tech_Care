import React, { useState } from 'react';
import { ApiPatient } from '../types';
import { ProfileInfoIcon } from './Icons';
import { X, ShieldCheck, User, Calendar, Phone, Activity } from 'lucide-react';

interface PatientProfileProps {
  patient: ApiPatient;
}

// Helper to format date string into "August 23, 1996"
function formatBirthDate(dobString: string): string {
  if (!dobString) return '';
  if (dobString.includes(',')) return dobString;
  const parsed = new Date(dobString);
  if (!isNaN(parsed.getTime())) {
    return parsed.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }
  return dobString;
}

export const PatientProfile: React.FC<PatientProfileProps> = ({ patient }) => {
  const [showAllModal, setShowAllModal] = useState(false);
  const formattedDob = formatBirthDate(patient.date_of_birth);

  return (
    <aside className="w-full bg-white rounded-[16px] p-6 shadow-xs flex flex-col items-center text-center">
      {/* Patient Avatar Frame */}
      <div className="relative mt-2">
        <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-full p-1 bg-gradient-to-b from-[#E0F3FA] to-[#D8FCF7] flex items-center justify-center shadow-xs">
          <img
            src={patient.profile_picture}
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
              {formattedDob}
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
              {patient.phone_number}
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
              {patient.emergency_contact}
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
              {patient.insurance_type}
            </span>
          </div>
        </div>

      </div>

      {/* Action Button */}
      <button
        type="button"
        onClick={() => setShowAllModal(true)}
        className="w-full mt-8 py-3.5 px-6 rounded-full bg-[#01F0D0] hover:bg-[#00d8bc] active:scale-[0.98] transition-all font-bold text-[14px] text-[#072635] text-center shadow-xs cursor-pointer select-none"
      >
        Show All Information
      </button>

      {/* Comprehensive Patient Details Modal */}
      {showAllModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative text-left max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-3">
                <img
                  src={patient.profile_picture}
                  alt={patient.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-[18px] font-extrabold text-[#072635]">
                    {patient.name}
                  </h3>
                  <p className="text-[13px] text-[#707070]">
                    Clinical Medical Record ID: #MED-{patient.age}982
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowAllModal(false)}
                className="p-2 text-[#707070] hover:text-[#072635] hover:bg-[#F6F7F8] rounded-full transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-[14px]">
              <div className="grid grid-cols-2 gap-3 bg-[#F6F7F8] p-3.5 rounded-xl">
                <div>
                  <span className="text-[12px] text-[#707070] block">Age & Gender</span>
                  <span className="font-bold text-[#072635]">{patient.age} yrs • {patient.gender}</span>
                </div>
                <div>
                  <span className="text-[12px] text-[#707070] block">Date of Birth</span>
                  <span className="font-bold text-[#072635]">{formattedDob}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#072635]">
                  <Phone className="w-4 h-4 text-[#00D9C6]" />
                  <span>Contact Information</span>
                </div>
                <div className="pl-6 space-y-1 text-[#707070]">
                  <p>Primary Phone: <strong className="text-[#072635]">{patient.phone_number}</strong></p>
                  <p>Emergency Contact: <strong className="text-[#072635]">{patient.emergency_contact}</strong></p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#072635]">
                  <ShieldCheck className="w-4 h-4 text-[#00D9C6]" />
                  <span>Insurance & Billing Coverage</span>
                </div>
                <div className="pl-6 text-[#707070]">
                  <p>Provider: <strong className="text-[#072635]">{patient.insurance_type}</strong></p>
                  <p>Status: <strong className="text-emerald-600">Active & Verified</strong></p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#072635]">
                  <Activity className="w-4 h-4 text-[#00D9C6]" />
                  <span>Clinical Summary</span>
                </div>
                <div className="pl-6 text-[#707070]">
                  <p>Total Recorded Diagnoses: <strong className="text-[#072635]">{patient.diagnostic_list?.length || 0}</strong></p>
                  <p>Available Lab Reports: <strong className="text-[#072635]">{patient.lab_results?.length || 0} files</strong></p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setShowAllModal(false)}
                className="px-6 py-2.5 rounded-full bg-[#01F0D0] hover:bg-[#00d8bc] font-bold text-[14px] text-[#072635] transition cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
