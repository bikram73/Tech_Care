import React, { useState } from 'react';
import { DiagnosisHistoryItem } from '../types';
import { BloodPressureChart } from './BloodPressureChart';
import { VitalCard } from './VitalCard';
import { RespiratoryIcon, TemperatureIcon, HeartRateIcon } from './Icons';
import { ChevronDown, ArrowUp, ArrowDown, Check } from 'lucide-react';

interface DiagnosisHistoryProps {
  diagnosisHistory: DiagnosisHistoryItem[];
}

export const DiagnosisHistory: React.FC<DiagnosisHistoryProps> = ({
  diagnosisHistory = [],
}) => {
  const [timeframe, setTimeframe] = useState<'6' | '3' | 'all'>('6');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Most recent record (e.g. March 2024)
  const latest = diagnosisHistory[diagnosisHistory.length - 1] || {
    month: 'March',
    year: 2024,
    blood_pressure: {
      systolic: { value: 160, levels: 'Higher than Average' },
      diastolic: { value: 78, levels: 'Lower than Average' },
    },
    respiratory_rate: { value: 20, levels: 'Normal' },
    temperature: { value: 98.6, levels: 'Normal' },
    heart_rate: { value: 78, levels: 'Lower than Average' },
  };

  const systolicValue = latest.blood_pressure?.systolic?.value ?? 160;
  const systolicLevel = latest.blood_pressure?.systolic?.levels ?? 'Higher than Average';
  const diastolicValue = latest.blood_pressure?.diastolic?.value ?? 78;
  const diastolicLevel = latest.blood_pressure?.diastolic?.levels ?? 'Lower than Average';

  const isSystolicHigher = systolicLevel.toLowerCase().includes('higher');
  const isSystolicLower = systolicLevel.toLowerCase().includes('lower');
  const isDiastolicLower = diastolicLevel.toLowerCase().includes('lower');
  const isDiastolicHigher = diastolicLevel.toLowerCase().includes('higher');

  const respiratoryValue = latest.respiratory_rate?.value ?? 20;
  const respiratoryLevel = latest.respiratory_rate?.levels ?? 'Normal';

  const tempValue = latest.temperature?.value ?? 98.6;
  const tempLevel = latest.temperature?.levels ?? 'Normal';

  const heartRateValue = latest.heart_rate?.value ?? 78;
  const heartRateLevel = latest.heart_rate?.levels ?? 'Lower than Average';
  const heartRateTrend = heartRateLevel.toLowerCase().includes('lower')
    ? 'lower'
    : heartRateLevel.toLowerCase().includes('higher')
    ? 'higher'
    : 'normal';

  const timeframeLabels: Record<'6' | '3' | 'all', string> = {
    '6': 'Last 6 months',
    '3': 'Last 3 months',
    'all': 'All Records',
  };

  return (
    <section className="w-full bg-white rounded-[16px] p-5 shadow-xs">
      {/* Section Heading */}
      <h2 className="text-[24px] font-extrabold text-[#072635] mb-6 tracking-tight">
        Diagnosis History
      </h2>

      {/* Blood Pressure Card */}
      <div className="bg-[#F4F0FE] rounded-[12px] p-4 lg:p-5">
        <div className="flex flex-col lg:flex-row gap-5 justify-between">
          
          {/* Left: Chart Container */}
          <div className="flex-1 min-w-0">
            {/* Header of chart */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[18px] font-bold text-[#072635]">
                Blood Pressure
              </h3>
              
              {/* Interactive Timeframe Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-2 text-[12px] font-medium text-[#072635] hover:bg-white/60 px-2.5 py-1 rounded-md transition select-none cursor-pointer"
                >
                  <span>{timeframeLabels[timeframe]}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#072635]" />
                </button>

                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-20"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <div className="absolute right-0 top-8 w-36 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-30 animate-in fade-in zoom-in-95">
                      {(['6', '3', 'all'] as const).map((key) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => {
                            setTimeframe(key);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full px-3 py-1.5 text-[12px] font-medium text-[#072635] hover:bg-[#F6F7F8] flex items-center justify-between transition cursor-pointer"
                        >
                          <span>{timeframeLabels[key]}</span>
                          {timeframe === key && (
                            <Check className="w-3.5 h-3.5 text-[#00D9C6]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Chart.js Component */}
            <BloodPressureChart
              diagnosisHistory={diagnosisHistory}
              timeframe={timeframe}
            />
          </div>

          {/* Right: Stats Indicators */}
          <div className="w-full lg:w-[175px] flex flex-row lg:flex-col justify-around lg:justify-center border-t lg:border-t-0 lg:border-l border-[#CBC8D4]/60 pt-3 lg:pt-0 lg:pl-5">
            
            {/* Systolic Stat */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-3.5 h-3.5 rounded-full bg-[#E85CB7] inline-block shadow-2xs" />
                <span className="text-[14px] font-bold text-[#072635]">Systolic</span>
              </div>
              <div className="text-[22px] font-extrabold text-[#072635] tracking-tight mb-1">
                {systolicValue}
              </div>
              <div className="flex items-center gap-1.5 text-[12px] text-[#072635] font-medium">
                {isSystolicHigher && (
                  <ArrowUp className="w-3 h-3 text-[#072635] stroke-[3]" />
                )}
                {isSystolicLower && (
                  <ArrowDown className="w-3 h-3 text-[#072635] stroke-[3]" />
                )}
                <span>{systolicLevel}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-full h-px bg-[#CBC8D4]/60 my-4" />

            {/* Diastolic Stat */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-3.5 h-3.5 rounded-full bg-[#8066D9] inline-block shadow-2xs" />
                <span className="text-[14px] font-bold text-[#072635]">Diastolic</span>
              </div>
              <div className="text-[22px] font-extrabold text-[#072635] tracking-tight mb-1">
                {diastolicValue}
              </div>
              <div className="flex items-center gap-1.5 text-[12px] text-[#072635] font-medium">
                {isDiastolicLower && (
                  <ArrowDown className="w-3 h-3 text-[#072635] stroke-[3]" />
                )}
                {isDiastolicHigher && (
                  <ArrowUp className="w-3 h-3 text-[#072635] stroke-[3]" />
                )}
                <span>{diastolicLevel}</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 3 Metric Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <VitalCard
          icon={<RespiratoryIcon className="w-20 h-20" />}
          bgColor="#DDF4FC"
          title="Respiratory Rate"
          value={respiratoryValue}
          unit="bpm"
          levels={respiratoryLevel}
        />

        <VitalCard
          icon={<TemperatureIcon className="w-20 h-20" />}
          bgColor="#FFE3E8"
          title="Temperature"
          value={tempValue}
          unit="°F"
          levels={tempLevel}
        />

        <VitalCard
          icon={<HeartRateIcon className="w-20 h-20" />}
          bgColor="#FCE4F0"
          title="Heart Rate"
          value={heartRateValue}
          unit="bpm"
          levels={heartRateLevel}
          trend={heartRateTrend}
        />
      </div>

    </section>
  );
};
