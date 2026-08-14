import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface VitalCardProps {
  icon: React.ReactNode;
  bgColor: string;
  title: string;
  value: string | number;
  unit?: string;
  levels: string;
  trend?: 'higher' | 'lower' | 'normal';
}

export const VitalCard: React.FC<VitalCardProps> = ({
  icon,
  bgColor,
  title,
  value,
  unit = '',
  levels,
  trend,
}) => {
  return (
    <div
      className="rounded-[12px] p-4 flex flex-col justify-between"
      style={{ backgroundColor: bgColor }}
    >
      <div className="mb-3">{icon}</div>
      <div>
        <span className="text-[15px] font-medium text-[#072635] block">
          {title}
        </span>
        <span className="text-[28px] lg:text-[30px] font-extrabold text-[#072635] tracking-tight my-1 block leading-tight">
          {value}
          {unit ? ` ${unit}` : ''}
        </span>
        <div className="flex items-center gap-1.5 text-[14px] text-[#072635] font-normal">
          {trend === 'lower' && (
            <ArrowDown className="w-3.5 h-3.5 text-[#072635] stroke-[3]" />
          )}
          {trend === 'higher' && (
            <ArrowUp className="w-3.5 h-3.5 text-[#072635] stroke-[3]" />
          )}
          <span>{levels}</span>
        </div>
      </div>
    </div>
  );
};
