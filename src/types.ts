export interface BloodPressurePoint {
  month: string;
  year: number;
  systolic: number;
  diastolic: number;
}

export interface VitalMetric {
  value: string;
  unit?: string;
  status: string;
  trend?: 'higher' | 'lower' | 'normal';
}

export interface DiagnosisItem {
  id: string;
  name: string;
  description: string;
  status: 'Under Observation' | 'Cured' | 'Inactive' | 'Untreated';
}

export interface LabResultItem {
  id: string;
  name: string;
  date?: string;
  fileSize?: string;
}

export interface Patient {
  id: string;
  name: string;
  gender: 'Female' | 'Male' | 'Other';
  age: number;
  avatar: string;
  dateOfBirth: string;
  phoneNumber: string;
  emergencyContact: string;
  insuranceProvider: string;
  bloodPressureHistory: BloodPressurePoint[];
  systolicStat: {
    value: number;
    status: string;
    trend: 'higher' | 'lower' | 'normal';
  };
  diastolicStat: {
    value: number;
    status: string;
    trend: 'higher' | 'lower' | 'normal';
  };
  respiratoryRate: VitalMetric;
  temperature: VitalMetric;
  heartRate: VitalMetric;
  diagnosticList: DiagnosisItem[];
  labResults: LabResultItem[];
}
