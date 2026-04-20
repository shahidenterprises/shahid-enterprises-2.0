import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className, width = 40, height = 40 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Glow / Ring */}
      <circle cx="256" cy="256" r="230" stroke="currentColor" strokeWidth="8" strokeDasharray="12 8" opacity="0.4" />
      
      {/* Main Seal Ring */}
      <circle cx="256" cy="256" r="210" stroke="currentColor" strokeWidth="20" />
      
      {/* Inner Decorative Ring */}
      <circle cx="256" cy="256" r="160" stroke="currentColor" strokeWidth="2" opacity="0.6" />

      {/* S.E. Initials */}
      <text 
        x="256" 
        y="280" 
        textAnchor="middle" 
        fill="currentColor" 
        style={{ fontSize: '140px', fontWeight: '800', fontFamily: 'serif' }}
      >
        S.E.
      </text>

      {/* Arched Text (Simplified representation using Paths for better cross-browser arched look if needed, but textPath is best) */}
      <defs>
        <path id="topCurve" d="M100,256 A156,156 0 0,1 412,256" />
        <path id="bottomCurve" d="M100,256 A156,156 0 0,0 412,256" />
      </defs>

      <text fill="currentColor" style={{ fontSize: '32px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        <textPath href="#topCurve" startOffset="50%" textAnchor="middle">
          SHAHID ENTERPRISES
        </textPath>
      </text>

      <text fill="currentColor" style={{ fontSize: '28px', fontWeight: '500', letterSpacing: '0.2em' }}>
        <textPath href="#bottomCurve" startOffset="50%" textAnchor="middle">
          SINCE 1970
        </textPath>
      </text>
    </svg>
  );
};

export default Logo;
