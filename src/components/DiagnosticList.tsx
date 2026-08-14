import React from 'react';
import { DiagnosisItem } from '../types';

interface DiagnosticListProps {
  diagnosticList: DiagnosisItem[];
}

export const DiagnosticList: React.FC<DiagnosticListProps> = ({ diagnosticList }) => {
  return (
    <div className="w-full bg-white rounded-[16px] p-5 shadow-xs mt-8">
      {/* Title */}
      <h2 className="text-[24px] font-extrabold text-[#072635] mb-6 tracking-tight">
        Diagnostic List
      </h2>

      {/* Table Container */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[600px]">
          {/* Table Header */}
          <div className="bg-[#F6F7F8] rounded-[24px] py-3.5 px-4 font-bold text-[14px] text-[#072635] grid grid-cols-12 gap-4 select-none mb-1">
            <div className="col-span-4 pl-2">Problem/Diagnosis</div>
            <div className="col-span-5">Description</div>
            <div className="col-span-3">Status</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#F6F7F8]">
            {diagnosticList.map((item) => (
              <div
                key={item.id}
                className="py-4 px-4 text-[14px] text-[#072635] grid grid-cols-12 gap-4 items-center hover:bg-[#F6F7F8]/40 transition-colors"
              >
                <div className="col-span-4 pl-2 font-medium text-[#072635]">
                  {item.name}
                </div>
                <div className="col-span-5 text-[#072635]/90 font-normal leading-snug">
                  {item.description}
                </div>
                <div className="col-span-3 text-[#072635] font-medium">
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
