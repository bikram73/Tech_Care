import React, { useState } from 'react';
import { Patient } from '../types';
import { Search, MoreHorizontal, X } from 'lucide-react';

interface PatientsSidebarProps {
  patients: Patient[];
  selectedPatientId: string;
  onSelectPatient: (patient: Patient) => void;
}

export const PatientsSidebar: React.FC<PatientsSidebarProps> = ({
  patients,
  selectedPatientId,
  onSelectPatient,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.gender.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="w-full lg:w-[367px] bg-white rounded-[16px] p-5 shadow-xs flex flex-col flex-shrink-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[24px] font-extrabold text-[#072635] tracking-tight">
          Patients
        </h2>
        <div className="flex items-center gap-1">
          {showSearchInput ? (
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search patient..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="pl-3 pr-7 py-1 text-xs border border-gray-200 rounded-full focus:outline-none focus:border-[#01F0D0] w-36"
              />
              <button
                onClick={() => {
                  setSearchQuery('');
                  setShowSearchInput(false);
                }}
                className="absolute right-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowSearchInput(true)}
              title="Search patients"
              className="p-2 text-[#072635] hover:bg-[#F6F7F8] rounded-full transition cursor-pointer"
            >
              <Search className="w-5 h-5" strokeWidth={2.2} />
            </button>
          )}
        </div>
      </div>

      {/* Patient List */}
      <div className="flex-1 overflow-y-auto max-h-[920px] pr-1 space-y-1 custom-scrollbar">
        {filteredPatients.length === 0 ? (
          <div className="py-8 text-center text-sm text-[#707070]">
            No patients found matching "{searchQuery}"
          </div>
        ) : (
          filteredPatients.map((patient) => {
            const isSelected = patient.id === selectedPatientId;
            return (
              <div
                key={patient.id}
                onClick={() => onSelectPatient(patient)}
                className={`flex items-center justify-between p-3 rounded-[12px] cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#D8FCF7]'
                    : 'hover:bg-[#F6F7F8]'
                }`}
              >
                {/* Left: Avatar + Details */}
                <div className="flex items-center gap-3.5 min-w-0">
                  <img
                    src={patient.avatar}
                    alt={patient.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0 shadow-2xs"
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
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPatient(patient);
                  }}
                  className="p-1.5 text-[#072635] hover:opacity-75 transition rounded-full flex-shrink-0 ml-2"
                >
                  <MoreHorizontal className="w-5 h-5 text-[#072635]" />
                </button>
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
};
