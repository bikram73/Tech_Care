import { ApiPatient } from '../types';
import { FALLBACK_PATIENTS } from '../data/fallbackData';

const API_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';
const USERNAME = 'coalition';
const PASSWORD = 'skills-test';

/**
 * Generates dynamic Basic Auth header using btoa
 */
function getAuthHeader(): string {
  const credentials = btoa(`${USERNAME}:${PASSWORD}`);
  return `Basic ${credentials}`;
}

/**
 * Fetches all patient data from Coalition Technologies API
 * Endpoint: https://fedskillstest.coalitiontechnologies.workers.dev
 * Authentication: Basic Auth (coalition:skills-test)
 */
export async function fetchPatientsData(): Promise<ApiPatient[]> {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        Authorization: getAuthHeader(),
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data: ApiPatient[] = await response.json();
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Invalid or empty response format from Coalition API');
    }

    return data;
  } catch (error) {
    console.warn('Coalition API fetch fallback engaged:', error);
    return FALLBACK_PATIENTS;
  }
}

/**
 * Specifically fetches and returns Jessica Taylor's patient data record
 */
export async function getJessicaTaylor(): Promise<{
  patients: ApiPatient[];
  jessica: ApiPatient;
}> {
  const patients = await fetchPatientsData();
  const jessica = patients.find(
    (patient) => patient.name.toLowerCase() === 'jessica taylor'
  );

  if (!jessica) {
    throw new Error('Jessica Taylor not found in API response');
  }

  return { patients, jessica };
}
