import React, { useState } from 'react';
import { LabDownloadIcon } from './Icons';
import { Check } from 'lucide-react';

interface LabResultsProps {
  labResults: string[];
  patientName?: string;
}

export const LabResults: React.FC<LabResultsProps> = ({ labResults = [], patientName = 'Jessica Taylor' }) => {
  const [downloadedIndex, setDownloadedIndex] = useState<number | null>(null);

  const handleDownload = (name: string, index: number, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setDownloadedIndex(index);

    // Generate formatted clinical laboratory report file content
    const dateStr = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const reportContent = `=====================================================
TECH.CARE CLINICAL HEALTH SYSTEMS
OFFICIAL LABORATORY DIAGNOSTIC REPORT
=====================================================

Patient Name:      ${patientName}
Date of Report:    ${dateStr}
Test Category:     ${name}
Ordering Provider: Dr. Jose Simmons (General Practitioner)
Laboratory Status: COMPLETED & VERIFIED
HIPAA Reference:   TC-${Math.floor(100000 + Math.random() * 900000)}

-----------------------------------------------------
CLINICAL FINDINGS & DIAGNOSTIC VALUES
-----------------------------------------------------
Test Conducted:    ${name}
Methodology:       Automated Clinical Diagnostic Assay
Specimen:          Standard Clinical Specimen
Quality Control:   Verified Within Target Tolerances

Reference Range Summary:
- Parameters within standard physiological boundaries.
- No critical acute anomalies detected for current observation cycle.
- Routine follow-up recommended during subsequent clinical review.

-----------------------------------------------------
Physician Electronic Signature: Dr. Jose Simmons, M.D.
Clinic: Tech.Care Central Medical Center
=====================================================`;

    // Create a Blob and trigger standard browser file download
    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    const safeFileName = name.toLowerCase().replace(/[^a-z0-9]/g, '_');
    downloadLink.href = url;
    downloadLink.download = `${safeFileName}_report.txt`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloadedIndex(null);
    }, 2000);
  };

  return (
    <aside className="w-full bg-white rounded-[16px] p-6 shadow-xs mt-8">
      {/* Title */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[24px] font-extrabold text-[#072635] tracking-tight">
          Lab Results
        </h2>
        <span className="text-[11px] font-semibold text-[#707070] bg-[#F6F7F8] px-2 py-1 rounded-md">
          {labResults.length} Reports
        </span>
      </div>

      {/* Results List */}
      <div className="space-y-1 overflow-y-auto max-h-[260px] pr-1 custom-scrollbar">
        {labResults.map((name, idx) => {
          const isHighlighted = idx === 1; // "CT Scans" state matching design
          const isDownloaded = downloadedIndex === idx;

          return (
            <div
              key={`${name}-${idx}`}
              onClick={(e) => handleDownload(name, idx, e)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-[6px] transition cursor-pointer select-none group ${
                isHighlighted
                  ? 'bg-[#F6F7F8]'
                  : 'hover:bg-[#F6F7F8]/70'
              }`}
              title={`Click to download official report for ${name}`}
            >
              <span className="text-[13px] font-medium text-[#072635]">
                {name}
              </span>

              <button
                type="button"
                onClick={(e) => handleDownload(name, idx, e)}
                aria-label={`Download ${name}`}
                className="p-1 text-[#072635] opacity-80 group-hover:opacity-100 hover:text-[#00D9C6] transition cursor-pointer"
              >
                {isDownloaded ? (
                  <Check className="w-4 h-4 text-[#00D9C6]" />
                ) : (
                  <LabDownloadIcon className="w-4 h-4 text-[#072635] group-hover:text-[#00D9C6] transition-colors" />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
