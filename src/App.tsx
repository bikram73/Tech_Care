import React, { useState, useEffect } from 'react';
import { ApiPatient } from './types';
import { getJessicaTaylor } from './services/patientApi';
import { Header } from './components/Header';
import { PatientSidebar } from './components/PatientSidebar';
import { DiagnosisHistory } from './components/DiagnosisHistory';
import { DiagnosticList } from './components/DiagnosticList';
import { PatientProfile } from './components/PatientProfile';
import { LabResults } from './components/LabResults';
import { LoadingState } from './components/LoadingState';
import { ErrorState } from './components/ErrorState';

export default function App() {
  const [activeTab, setActiveTab] = useState('patients');
  const [patients, setPatients] = useState<ApiPatient[]>([]);
  const [patient, setPatient] = useState<ApiPatient | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadPatientData = async () => {
    try {
      setLoading(true);
      setError(null);
      const { patients: allPatients, jessica } = await getJessicaTaylor();
      setPatients(allPatients);
      setPatient(jessica);
    } catch (err: any) {
      setError(err?.message || 'Unable to load patient data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPatientData();
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F7F8] p-3 sm:p-5 lg:p-7 select-text">
      {/* Maximum width container matching 1600px standard XD dashboard layout */}
      <div className="max-w-[1600px] mx-auto flex flex-col">
        
        {/* Top Navigation Bar */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Dynamic Loading State */}
        {loading && <LoadingState />}

        {/* Dynamic Error State */}
        {!loading && error && (
          <ErrorState message={error} onRetry={loadPatientData} />
        )}

        {/* Main Dashboard Grid: displaying selected patient data */}
        {!loading && !error && patient && (
          <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left Column: Patients Sidebar */}
            <div className="lg:col-span-3">
              <PatientSidebar
                patients={patients}
                targetPatientName={patient.name}
                onSelectPatient={(selected) => setPatient(selected)}
              />
            </div>

            {/* Middle Column: Diagnosis History & Diagnostic List */}
            <div className="lg:col-span-6 flex flex-col">
              <DiagnosisHistory
                diagnosisHistory={patient.diagnosis_history}
              />
              <DiagnosticList
                diagnosticList={patient.diagnostic_list}
              />
            </div>

            {/* Right Column: Patient Profile & Lab Results */}
            <div className="lg:col-span-3 flex flex-col">
              <PatientProfile patient={patient} />
              <LabResults labResults={patient.lab_results} />
            </div>

          </main>
        )}

      </div>
    </div>
  );
}
