import React, { useState } from 'react';
import { LabResultItem } from '../types';
import { LabDownloadIcon } from './Icons';
import { Check } from 'lucide-react';

interface LabResultsProps {
  labResults: LabResultItem[];
}

export const LabResults: React.FC<LabResultsProps> = ({ labResults }) => {
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const handleDownload = (item: LabResultItem) => {
    setDownloadedId(item.id);
    setTimeout(() => {
      setDownloadedId(null);
    }, 2000);
  };

  return (
    <div className="w-full bg-white rounded-[16px] p-6 shadow-xs mt-8">
      {/* Title */}
      <h2 className="text-[24px] font-extrabold text-[#072635] mb-4 tracking-tight">
        Lab Results
      </h2>

      {/* Results List */}
      <div className="space-y-1 overflow-y-auto max-h-[260px] pr-1 custom-scrollbar">
        {labResults.map((item, idx) => {
          const isHighlighted = idx === 1; // "CT Scans" styled state matching design
          const isDownloaded = downloadedId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => handleDownload(item)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-[6px] transition cursor-pointer select-none group ${
                isHighlighted
                  ? 'bg-[#F6F7F8]'
                  : 'hover:bg-[#F6F7F8]/70'
              }`}
            >
              <span className="text-[13px] font-medium text-[#072635]">
                {item.name}
              </span>

              <button
                type="button"
                title={`Download ${item.name}`}
                className="p-1 text-[#072635] opacity-80 group-hover:opacity-100 transition"
              >
                {isDownloaded ? (
                  <Check className="w-4 h-4 text-[#01F0D0]" />
                ) : (
                  <LabDownloadIcon className="w-4 h-4 text-[#072635]" />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
