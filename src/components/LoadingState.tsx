import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingState: React.FC = () => {
  return (
    <div className="w-full min-h-[500px] flex flex-col items-center justify-center p-8 text-center bg-white rounded-[16px] shadow-xs">
      <Loader2 className="w-10 h-10 text-[#01F0D0] animate-spin mb-4" />
      <h3 className="text-[18px] font-bold text-[#072635] mb-1">
        Loading Patient Records...
      </h3>
      <p className="text-[14px] text-[#707070] max-w-sm">
        Retrieving clinical and vital data from Coalition Patient Data API.
      </p>
    </div>
  );
};
