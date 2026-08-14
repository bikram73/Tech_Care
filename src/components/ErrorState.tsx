import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message, onRetry }) => {
  return (
    <div className="w-full min-h-[400px] flex flex-col items-center justify-center p-8 text-center bg-white rounded-[16px] shadow-xs">
      <div className="w-14 h-14 rounded-full bg-[#FFE3E8] flex items-center justify-center mb-4">
        <AlertCircle className="w-7 h-7 text-[#FF6384]" />
      </div>
      <h3 className="text-[18px] font-bold text-[#072635] mb-2">
        Unable to Load Patient Data
      </h3>
      <p className="text-[14px] text-[#707070] max-w-md mb-6">
        {message || 'An error occurred while connecting to the Coalition API.'}
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#01F0D0] hover:bg-[#00d8bc] text-[#072635] font-bold text-[14px] shadow-xs transition cursor-pointer"
      >
        <RefreshCw className="w-4 h-4" />
        <span>Retry Request</span>
      </button>
    </div>
  );
};
