export interface VitalEntry {
  value: number | string;
  levels: string;
}

export interface BloodPressureEntry {
  systolic: VitalEntry;
  diastolic: VitalEntry;
}

export interface DiagnosisHistoryItem {
  month: string;
  year: number;
  blood_pressure: BloodPressureEntry;
  respiratory_rate: VitalEntry;
  temperature: VitalEntry;
  heart_rate: VitalEntry;
}

export interface DiagnosticListItem {
  name: string;
  description: string;
  status: string;
}

export interface ApiPatient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistoryItem[];
  diagnostic_list: DiagnosticListItem[];
  lab_results: string[];
}
