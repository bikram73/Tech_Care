import React, { useState, useEffect } from 'react';
import { ApiPatient } from './types';
import { fetchPatientsData } from './services/patientApi';
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
  const [targetPatient, setTargetPatient] = useState<ApiPatient | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setIsLoading(true);
      setErrorMessage(null);
      const data = await fetchPatientsData();
      setPatients(data);

      // Specifically find Jessica Taylor per PRD specification
      const jessica =
        data.find((p) => p.name.toLowerCase() === 'jessica taylor') ||
        data[0] ||
        null;
      setTargetPatient(jessica);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to fetch patient data from Coalition API');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F7F8] p-3 sm:p-5 lg:p-7 select-text">
      {/* Maximum width container matching 1600px standard XD dashboard layout */}
      <div className="max-w-[1600px] mx-auto flex flex-col">
        
        {/* Top Navigation Bar */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Dynamic Loading State */}
        {isLoading && <LoadingState />}

        {/* Dynamic Error State */}
        {!isLoading && errorMessage && (
          <ErrorState message={errorMessage} onRetry={loadData} />
        )}

        {/* Main Dashboard Grid */}
        {!isLoading && !errorMessage && targetPatient && (
          <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left Column: Patients Sidebar */}
            <div className="lg:col-span-3">
              <PatientSidebar
                patients={patients}
                targetPatientName={targetPatient.name}
              />
            </div>

            {/* Middle Column: Diagnosis History & Diagnostic List */}
            <div className="lg:col-span-6 flex flex-col">
              <DiagnosisHistory
                diagnosisHistory={targetPatient.diagnosis_history}
              />
              <DiagnosticList
                diagnosticList={targetPatient.diagnostic_list}
              />
            </div>

            {/* Right Column: Patient Profile & Lab Results */}
            <div className="lg:col-span-3 flex flex-col">
              <PatientProfile patient={targetPatient} />
              <LabResults labResults={targetPatient.lab_results} />
            </div>

          </main>
        )}

      </div>
    </div>
  );
}
