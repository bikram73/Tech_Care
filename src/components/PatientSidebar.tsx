import React from 'react';
import { ApiPatient } from '../types';
import { PatientListItem } from './PatientListItem';
import { Search } from 'lucide-react';

interface PatientSidebarProps {
  patients: ApiPatient[];
  targetPatientName: string;
}

export const PatientSidebar: React.FC<PatientSidebarProps> = ({
  patients,
  targetPatientName,
}) => {
  return (
    <aside className="w-full bg-white rounded-[16px] p-5 shadow-xs flex flex-col flex-shrink-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[24px] font-extrabold text-[#072635] tracking-tight">
          Patients
        </h2>
        <button
          type="button"
          aria-label="Search Patients"
          className="p-2 text-[#072635] hover:bg-[#F6F7F8] rounded-full transition cursor-pointer"
        >
          <Search className="w-5 h-5" strokeWidth={2.2} />
        </button>
      </div>

      {/* Patient List */}
      <div className="flex-1 overflow-y-auto max-h-[920px] pr-1 space-y-1 custom-scrollbar">
        {patients.map((patient) => {
          const isSelected = patient.name.toLowerCase() === targetPatientName.toLowerCase();
          return (
            <PatientListItem
              key={patient.name}
              patient={patient}
              isSelected={isSelected}
            />
          );
        })}
      </div>
    </aside>
  );
};
