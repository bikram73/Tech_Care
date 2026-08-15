import React from 'react';

// Tech.Care brand logo mark (Exact 4-faceted cross icon)
export const TechCareMark: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 38,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 38 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
  >
    {/* Left Translucent Ice/Sky Blue Wing */}
    <path
      d="M0.5 16L11.5 9.5L21.5 19L10.5 25.5L0.5 16Z"
      fill="url(#techcare-ice-grad)"
      fillOpacity="0.92"
    />

    {/* Top Emerald Green Wing */}
    <path
      d="M11.5 2L21.5 10.5V21.5H11.5V2Z"
      fill="url(#techcare-green-grad)"
    />

    {/* Right Bright Turquoise/Cyan Wing */}
    <path
      d="M21.5 10.5L35.5 18L24.5 27L21.5 21.5V10.5Z"
      fill="url(#techcare-cyan-grad)"
    />

    {/* Bottom Deep Royal Blue Wing */}
    <path
      d="M11.5 21.5H21.5V31L11.5 40.5V21.5Z"
      fill="url(#techcare-blue-grad)"
    />

    <defs>
      {/* Green Gradient */}
      <linearGradient id="techcare-green-grad" x1="11.5" y1="2" x2="21.5" y2="21.5" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00D284" />
        <stop offset="100%" stopColor="#01F0D0" />
      </linearGradient>
      {/* Cyan Gradient */}
      <linearGradient id="techcare-cyan-grad" x1="21.5" y1="10.5" x2="35.5" y2="23" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#01F0D0" />
        <stop offset="100%" stopColor="#00D2B8" />
      </linearGradient>
      {/* Ice Blue Gradient */}
      <linearGradient id="techcare-ice-grad" x1="0.5" y1="16" x2="21.5" y2="19" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#BAE6FD" />
        <stop offset="100%" stopColor="#8AD3F5" />
      </linearGradient>
      {/* Blue Gradient */}
      <linearGradient id="techcare-blue-grad" x1="11.5" y1="21.5" x2="21.5" y2="40.5" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0066CC" />
        <stop offset="100%" stopColor="#00438E" />
      </linearGradient>
    </defs>
  </svg>
);

// Tech.Care complete brand logo (Mark + Typography)
export const TechCareLogo: React.FC<{ className?: string; dark?: boolean; markSize?: number }> = ({
  className = "h-9",
  dark = false,
  markSize = 36,
}) => (
  <div className={`flex items-center gap-2 select-none ${className}`}>
    <TechCareMark size={markSize} />
    <div className={`font-extrabold text-[25px] tracking-[-0.03em] ${dark ? 'text-white' : 'text-[#072635]'} leading-none flex items-center font-sans`}>
      <span>Tech</span>
      <span className="w-[7px] h-[7px] rounded-full bg-[#01F0D0] inline-block mx-[2px] mt-2 shrink-0 shadow-xs" />
      <span>Care</span>
    </div>
  </div>
);

// Lungs / Respiratory Icon in circle
export const RespiratoryIcon: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => (
  <div className={`${className} rounded-full bg-white flex items-center justify-center shadow-xs`}>
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
      <path
        d="M16 12C12 12 8 16 8 22C8 28.5 12 36 18 38C19 38.3 20 37.8 20 36.8V22C20 16.5 18.2 12 16 12Z"
        fill="#E0F3FA"
        stroke="#01F0D0"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M32 12C36 12 40 16 40 22C40 28.5 36 36 30 38C29 38.3 28 37.8 28 36.8V22C28 16.5 29.8 12 32 12Z"
        fill="#E0F3FA"
        stroke="#01F0D0"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M24 6V20M24 20L20 25M24 20L28 25"
        stroke="#01F0D0"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

// Thermometer / Temperature Icon in circle
export const TemperatureIcon: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => (
  <div className={`${className} rounded-full bg-white flex items-center justify-center shadow-xs`}>
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
      <rect
        x="20"
        y="8"
        width="8"
        height="22"
        rx="4"
        fill="#FFE6E9"
        stroke="#FF627D"
        strokeWidth="2.5"
      />
      <circle
        cx="24"
        cy="34"
        r="7"
        fill="#FF627D"
        stroke="#FF627D"
        strokeWidth="2.5"
      />
      <path
        d="M24 20V31"
        stroke="#FF627D"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <line x1="28" y1="13" x2="31" y2="13" stroke="#FF627D" strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="17" x2="31" y2="17" stroke="#FF627D" strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="21" x2="31" y2="21" stroke="#FF627D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

// Heart Rate Icon in circle
export const HeartRateIcon: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => (
  <div className={`${className} rounded-full bg-white flex items-center justify-center shadow-xs`}>
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
      <path
        d="M24 40S9 29.5 9 17.5C9 12 13.5 8 18.5 8C21.5 8 23.5 10 24 11C24.5 10 26.5 8 29.5 8C34.5 8 39 12 39 17.5C39 29.5 24 40 24 40Z"
        fill="#FFE6F1"
        stroke="#FF62AB"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 20H19L22 14L26 27L29 20H34"
        stroke="#FF62AB"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

// Circular wrapper for patient profile info icons
export const ProfileInfoIcon: React.FC<{
  icon: 'birth' | 'gender' | 'phone' | 'emergency' | 'insurance';
  className?: string;
}> = ({ icon, className = "w-[44px] h-[44px]" }) => {
  return (
    <div
      className={`${className} rounded-full bg-[#F6F7F8] flex items-center justify-center flex-shrink-0`}
    >
      {icon === 'birth' && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#072635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="3" ry="3" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      )}
      {icon === 'gender' && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#072635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="5" />
          <line x1="12" y1="13" x2="12" y2="21" />
          <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
      )}
      {icon === 'phone' && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#072635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )}
      {icon === 'emergency' && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#072635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
        </svg>
      )}
      {icon === 'insurance' && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#072635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )}
    </div>
  );
};

// Download Icon for Lab results
export const LabDownloadIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 text-[#072635]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
