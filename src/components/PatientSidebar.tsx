import React, { useState } from 'react';
import { ApiPatient } from '../types';
import { PatientListItem } from './PatientListItem';
import { Search, X } from 'lucide-react';

interface PatientSidebarProps {
  patients: ApiPatient[];
  targetPatientName: string;
  onSelectPatient: (patient: ApiPatient) => void;
}

export const PatientSidebar: React.FC<PatientSidebarProps> = ({
  patients,
  targetPatientName,
  onSelectPatient,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.gender.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="w-full bg-white rounded-[16px] p-5 shadow-xs flex flex-col flex-shrink-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[24px] font-extrabold text-[#072635] tracking-tight">
          Patients
        </h2>
        <button
          type="button"
          aria-label="Toggle Search Patients"
          onClick={() => {
            setIsSearchOpen((prev) => !prev);
            if (isSearchOpen) setSearchQuery('');
          }}
          className={`p-2 rounded-full transition cursor-pointer ${
            isSearchOpen
              ? 'bg-[#01F0D0] text-[#072635]'
              : 'text-[#072635] hover:bg-[#F6F7F8]'
          }`}
        >
          <Search className="w-5 h-5" strokeWidth={2.2} />
        </button>
      </div>

      {/* Expandable Search Input */}
      {isSearchOpen && (
        <div className="mb-4 relative animate-in fade-in slide-in-from-top-2 duration-200">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search patient name..."
            autoFocus
            className="w-full px-3.5 py-2 pr-8 text-[13px] bg-[#F6F7F8] rounded-lg border border-[#E6E9EC] text-[#072635] placeholder:text-[#707070] focus:outline-none focus:ring-2 focus:ring-[#00D9C6]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#707070] hover:text-[#072635]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}

      {/* Patient List */}
      <div className="flex-1 overflow-y-auto max-h-[920px] pr-1 space-y-1 custom-scrollbar">
        {filteredPatients.length === 0 ? (
          <div className="py-8 text-center text-[13px] text-[#707070]">
            No patients match &quot;{searchQuery}&quot;
          </div>
        ) : (
          filteredPatients.map((patient) => {
            const isSelected =
              patient.name.toLowerCase() === targetPatientName.toLowerCase();
            return (
              <PatientListItem
                key={patient.name}
                patient={patient}
                isSelected={isSelected}
                onSelect={() => onSelectPatient(patient)}
              />
            );
          })
        )}
      </div>
    </aside>
  );
};
