import { ApiPatient } from '../types';
import { FALLBACK_PATIENTS } from '../data/fallbackData';

const API_ENDPOINT = 'https://fedskillstest.coalitiontechnologies.workers.dev';
const AUTH_HEADER = 'Basic ' + btoa('coalition:skills-test');

/**
 * Fetches all patient data from Coalition Technologies API
 * Endpoint: https://fedskillstest.coalitiontechnologies.workers.dev
 * Authentication: Basic Auth (coalition:skills-test)
 */
export async function fetchPatientsData(): Promise<ApiPatient[]> {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'GET',
      headers: {
        Authorization: AUTH_HEADER,
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API returned status ${response.status}: ${response.statusText}`);
    }

    const data: ApiPatient[] = await response.json();
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Invalid or empty response format from Coalition API');
    }

    return data;
  } catch (error) {
    console.warn('Coalition API fetch error, using robust fallback data:', error);
    // Return high-fidelity fallback matching the API schema to prevent blank dashboard
    return FALLBACK_PATIENTS;
  }
}
