import React, { useState } from 'react';
import { PATIENTS } from './data/patientsData';
import { Patient } from './types';
import { Header } from './components/Header';
import { PatientsSidebar } from './components/PatientsSidebar';
import { DiagnosisHistory } from './components/DiagnosisHistory';
import { DiagnosticList } from './components/DiagnosticList';
import { PatientProfile } from './components/PatientProfile';
import { LabResults } from './components/LabResults';
import { PatientDetailModal } from './components/PatientDetailModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('patients');
  // Default selected patient is Jessica Taylor (matching mock screen)
  const defaultPatient = PATIENTS.find((p) => p.id === 'jessica-taylor') || PATIENTS[0];
  const [selectedPatient, setSelectedPatient] = useState<Patient>(defaultPatient);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F7F8] p-3 sm:p-5 lg:p-7 select-text">
      {/* Maximum width container matching the 1600px design */}
      <div className="max-w-[1600px] mx-auto flex flex-col">
        
        {/* Top Navbar */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main 3-Column Layout */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Patients Sidebar (approx 3 / 12) */}
          <div className="lg:col-span-3">
            <PatientsSidebar
              patients={PATIENTS}
              selectedPatientId={selectedPatient.id}
              onSelectPatient={(patient) => setSelectedPatient(patient)}
            />
          </div>

          {/* Middle Column: Diagnosis History & Diagnostic List (approx 6 / 12) */}
          <div className="lg:col-span-6 flex flex-col">
            <DiagnosisHistory patient={selectedPatient} />
            <DiagnosticList diagnosticList={selectedPatient.diagnosticList} />
          </div>

          {/* Right Column: Patient Profile & Lab Results (approx 3 / 12) */}
          <div className="lg:col-span-3 flex flex-col">
            <PatientProfile
              patient={selectedPatient}
              onShowAllInfo={() => setIsModalOpen(true)}
            />
            <LabResults labResults={selectedPatient.labResults} />
          </div>

        </main>

      </div>

      {/* Detail Modal */}
      <PatientDetailModal
        patient={selectedPatient}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
