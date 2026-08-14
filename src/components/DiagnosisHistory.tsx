import React, { useState } from 'react';
import { Patient } from '../types';
import { RespiratoryIcon, TemperatureIcon, HeartRateIcon } from './Icons';
import { ChevronDown, ArrowUp, ArrowDown } from 'lucide-react';

interface DiagnosisHistoryProps {
  patient: Patient;
}

export const DiagnosisHistory: React.FC<DiagnosisHistoryProps> = ({ patient }) => {
  const [timeRange, setTimeRange] = useState('Last 6 months');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const history = patient.bloodPressureHistory || [];

  // Chart coordinate mapping
  // Y range: 60 to 180 (span: 120)
  const chartHeight = 190;
  const chartWidth = 440;
  const paddingLeft = 36;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;

  const innerWidth = chartWidth - paddingLeft - paddingRight;
  const innerHeight = chartHeight - paddingTop - paddingBottom;

  const yMin = 60;
  const yMax = 180;

  const getYCoord = (val: number) => {
    const clamped = Math.max(yMin, Math.min(yMax, val));
    const ratio = (clamped - yMin) / (yMax - yMin);
    return paddingTop + innerHeight - ratio * innerHeight;
  };

  const getXCoord = (index: number) => {
    if (history.length <= 1) return paddingLeft + innerWidth / 2;
    return paddingLeft + (index / (history.length - 1)) * innerWidth;
  };

  // Helper for generating smooth cubic bezier path
  const getSmoothPath = (points: { x: number; y: number }[]) => {
    if (points.length === 0) return '';
    if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i === 0 ? 0 : i - 1];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2] || p2;

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;

      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return path;
  };

  const systolicPoints = history.map((pt, idx) => ({
    x: getXCoord(idx),
    y: getYCoord(pt.systolic),
    val: pt.systolic,
    month: pt.month,
    year: pt.year,
  }));

  const diastolicPoints = history.map((pt, idx) => ({
    x: getXCoord(idx),
    y: getYCoord(pt.diastolic),
    val: pt.diastolic,
    month: pt.month,
    year: pt.year,
  }));

  const systolicPath = getSmoothPath(systolicPoints);
  const diastolicPath = getSmoothPath(diastolicPoints);

  const yTicks = [180, 160, 140, 120, 100, 80, 60];

  return (
    <div className="w-full bg-white rounded-[16px] p-5 shadow-xs">
      {/* Section Heading */}
      <h2 className="text-[24px] font-extrabold text-[#072635] mb-6 tracking-tight">
        Diagnosis History
      </h2>

      {/* Blood Pressure Card */}
      <div className="bg-[#F4F0FE] rounded-[12px] p-4 lg:p-5">
        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          
          {/* Left: Chart Container */}
          <div className="flex-1">
            {/* Header of chart */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[18px] font-bold text-[#072635]">
                Blood Pressure
              </h3>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 text-[12px] font-medium text-[#072635] hover:opacity-80 transition cursor-pointer"
                >
                  <span>{timeRange}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#072635]" />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-1.5 w-36 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-20 text-xs text-[#072635]">
                    {['Last 3 months', 'Last 6 months', 'Last 1 year'].map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setTimeRange(option);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 hover:bg-[#F4F0FE] transition ${
                          timeRange === option ? 'font-bold text-[#8C6FE6]' : ''
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* SVG Chart */}
            <div className="relative w-full overflow-x-auto">
              <svg
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                className="w-full h-auto min-w-[340px] max-w-full overflow-visible"
              >
                {/* Horizontal Grid lines & Y-axis labels */}
                {yTicks.map((tick) => {
                  const y = getYCoord(tick);
                  return (
                    <g key={tick}>
                      <text
                        x="24"
                        y={y + 3.5}
                        textAnchor="end"
                        fill="#707070"
                        fontSize="10"
                        fontFamily="Manrope, sans-serif"
                        fontWeight="500"
                      >
                        {tick}
                      </text>
                      <line
                        x1={paddingLeft}
                        y1={y}
                        x2={chartWidth - paddingRight}
                        y2={y}
                        stroke="#CBC8D4"
                        strokeWidth="1"
                        strokeOpacity="0.6"
                      />
                    </g>
                  );
                })}

                {/* X-axis labels */}
                {history.map((pt, idx) => {
                  const x = getXCoord(idx);
                  return (
                    <text
                      key={idx}
                      x={x}
                      y={chartHeight - 8}
                      textAnchor="middle"
                      fill="#707070"
                      fontSize="10"
                      fontFamily="Manrope, sans-serif"
                      fontWeight="500"
                    >
                      {pt.month}, {pt.year}
                    </text>
                  );
                })}

                {/* Systolic Line (Pink) */}
                <path
                  d={systolicPath}
                  fill="none"
                  stroke="#E66FD2"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Diastolic Line (Purple) */}
                <path
                  d={diastolicPath}
                  fill="none"
                  stroke="#8C6FE6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Systolic Dots */}
                {systolicPoints.map((pt, idx) => (
                  <g
                    key={`sys-${idx}`}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredPoint(idx)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  >
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={hoveredPoint === idx ? 6.5 : 5}
                      fill="#E66FD2"
                      stroke="#F4F0FE"
                      strokeWidth="2"
                      className="transition-all"
                    />
                  </g>
                ))}

                {/* Diastolic Dots */}
                {diastolicPoints.map((pt, idx) => (
                  <g
                    key={`dia-${idx}`}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredPoint(idx)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  >
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={hoveredPoint === idx ? 6.5 : 5}
                      fill="#8C6FE6"
                      stroke="#F4F0FE"
                      strokeWidth="2"
                      className="transition-all"
                    />
                  </g>
                ))}

                {/* Hover Tooltip in SVG */}
                {hoveredPoint !== null && (
                  <g transform={`translate(${getXCoord(hoveredPoint)}, 25)`}>
                    <rect
                      x="-55"
                      y="-18"
                      width="110"
                      height="38"
                      rx="6"
                      fill="#072635"
                      opacity="0.9"
                    />
                    <text
                      x="0"
                      y="-4"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="9"
                      fontWeight="bold"
                    >
                      {history[hoveredPoint].month} {history[hoveredPoint].year}
                    </text>
                    <text
                      x="0"
                      y="11"
                      textAnchor="middle"
                      fill="#01F0D0"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      {history[hoveredPoint].systolic} / {history[hoveredPoint].diastolic} mmHg
                    </text>
                  </g>
                )}
              </svg>
            </div>
          </div>

          {/* Right: Stats Indicators */}
          <div className="w-full lg:w-[170px] flex flex-row lg:flex-col justify-around lg:justify-center border-t lg:border-t-0 lg:border-l border-[#CBC8D4]/50 pt-3 lg:pt-0 lg:pl-5">
            
            {/* Systolic Stat */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-3.5 h-3.5 rounded-full bg-[#E66FD2] inline-block shadow-2xs" />
                <span className="text-[14px] font-bold text-[#072635]">Systolic</span>
              </div>
              <div className="text-[22px] font-extrabold text-[#072635] tracking-tight mb-1">
                {patient.systolicStat.value}
              </div>
              <div className="flex items-center gap-1.5 text-[12px] text-[#072635] font-medium">
                {patient.systolicStat.trend === 'higher' ? (
                  <>
                    <ArrowUp className="w-3 h-3 text-[#072635] stroke-[3]" />
                    <span>Higher than Average</span>
                  </>
                ) : patient.systolicStat.trend === 'lower' ? (
                  <>
                    <ArrowDown className="w-3 h-3 text-[#072635] stroke-[3]" />
                    <span>Lower than Average</span>
                  </>
                ) : (
                  <span>Normal</span>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-full h-px bg-[#CBC8D4]/60 my-4" />

            {/* Diastolic Stat */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-3.5 h-3.5 rounded-full bg-[#8C6FE6] inline-block shadow-2xs" />
                <span className="text-[14px] font-bold text-[#072635]">Diastolic</span>
              </div>
              <div className="text-[22px] font-extrabold text-[#072635] tracking-tight mb-1">
                {patient.diastolicStat.value}
              </div>
              <div className="flex items-center gap-1.5 text-[12px] text-[#072635] font-medium">
                {patient.diastolicStat.trend === 'lower' ? (
                  <>
                    <ArrowDown className="w-3 h-3 text-[#072635] stroke-[3]" />
                    <span>Lower than Average</span>
                  </>
                ) : patient.diastolicStat.trend === 'higher' ? (
                  <>
                    <ArrowUp className="w-3 h-3 text-[#072635] stroke-[3]" />
                    <span>Higher than Average</span>
                  </>
                ) : (
                  <span>Normal</span>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 3 Metric Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        
        {/* 1. Respiratory Rate */}
        <div className="bg-[#E0F3FA] rounded-[12px] p-4 flex flex-col justify-between">
          <RespiratoryIcon className="w-20 h-20 mb-3" />
          <div>
            <span className="text-[16px] font-medium text-[#072635] block">
              Respiratory Rate
            </span>
            <span className="text-[30px] font-extrabold text-[#072635] tracking-tight my-1 block">
              {patient.respiratoryRate.value}
            </span>
            <span className="text-[14px] text-[#072635] font-normal block">
              {patient.respiratoryRate.status}
            </span>
          </div>
        </div>

        {/* 2. Temperature */}
        <div className="bg-[#FFE6E9] rounded-[12px] p-4 flex flex-col justify-between">
          <TemperatureIcon className="w-20 h-20 mb-3" />
          <div>
            <span className="text-[16px] font-medium text-[#072635] block">
              Temperature
            </span>
            <span className="text-[30px] font-extrabold text-[#072635] tracking-tight my-1 block">
              {patient.temperature.value}
            </span>
            <span className="text-[14px] text-[#072635] font-normal block">
              {patient.temperature.status}
            </span>
          </div>
        </div>

        {/* 3. Heart Rate */}
        <div className="bg-[#FFE6F1] rounded-[12px] p-4 flex flex-col justify-between">
          <HeartRateIcon className="w-20 h-20 mb-3" />
          <div>
            <span className="text-[16px] font-medium text-[#072635] block">
              Heart Rate
            </span>
            <span className="text-[30px] font-extrabold text-[#072635] tracking-tight my-1 block">
              {patient.heartRate.value}
            </span>
            <div className="flex items-center gap-1.5 text-[14px] text-[#072635] font-normal">
              {patient.heartRate.trend === 'lower' && (
                <ArrowDown className="w-3.5 h-3.5 text-[#072635] stroke-[3]" />
              )}
              {patient.heartRate.trend === 'higher' && (
                <ArrowUp className="w-3.5 h-3.5 text-[#072635] stroke-[3]" />
              )}
              <span>{patient.heartRate.status}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
