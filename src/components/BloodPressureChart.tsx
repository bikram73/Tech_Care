import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { DiagnosisHistoryItem } from '../types';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface BloodPressureChartProps {
  diagnosisHistory: DiagnosisHistoryItem[];
  timeframe?: '6' | '3' | 'all';
}

export const BloodPressureChart: React.FC<BloodPressureChartProps> = ({
  diagnosisHistory,
  timeframe = '6',
}) => {
  const historyList = diagnosisHistory || [];
  const count = timeframe === '3' ? 3 : timeframe === '6' ? 6 : historyList.length;
  const sortedHistory = count > 0 ? historyList.slice(-count) : historyList;

  const labels = sortedHistory.map((item) => {
    const shortMonth = item.month ? item.month.slice(0, 3) : '';
    return `${shortMonth}, ${item.year || ''}`;
  });

  const systolicValues = sortedHistory.map(
    (item) => Number(item.blood_pressure?.systolic?.value) || 0
  );
  const diastolicValues = sortedHistory.map(
    (item) => Number(item.blood_pressure?.diastolic?.value) || 0
  );

  const data: ChartData<'line'> = {
    labels,
    datasets: [
      {
        label: 'Systolic',
        data: systolicValues,
        borderColor: '#E85CB7',
        backgroundColor: '#E85CB7',
        tension: 0.4,
        borderWidth: 2.5,
        pointBackgroundColor: '#E85CB7',
        pointBorderColor: '#F4F0FE',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: 'Diastolic',
        data: diastolicValues,
        borderColor: '#8066D9',
        backgroundColor: '#8066D9',
        tension: 0.4,
        borderWidth: 2.5,
        pointBackgroundColor: '#8066D9',
        pointBorderColor: '#F4F0FE',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#072635',
        titleFont: {
          family: 'Manrope, sans-serif',
          size: 11,
          weight: 'bold',
        },
        bodyFont: {
          family: 'Manrope, sans-serif',
          size: 11,
        },
        padding: 8,
        cornerRadius: 6,
        displayColors: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#707070',
          font: {
            family: 'Manrope, sans-serif',
            size: 11,
            weight: 500,
          },
        },
      },
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: '#707070',
          font: {
            family: 'Manrope, sans-serif',
            size: 11,
            weight: 500,
          },
        },
        grid: {
          color: 'rgba(203, 200, 212, 0.4)',
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full h-[220px]">
      <Line data={data} options={options} />
    </div>
  );
};
