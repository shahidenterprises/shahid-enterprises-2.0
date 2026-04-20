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
      {/* Bun Bottom */}
      <path 
        d="M60 250c0 0-10 80 50 120s280 60 340 0s10-120 10-120" 
        stroke="currentColor" 
        strokeWidth="16" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Sausage */}
      <path 
        d="M30 200c0 0-15-20 10-40s410 40 440 80s-10 80-60 60" 
        stroke="currentColor" 
        strokeWidth="20" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Bun Top */}
      <path 
        d="M80 180c0 0 10-60 80-100s240-20 300 40s10 110 10 110" 
        stroke="currentColor" 
        strokeWidth="16" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Sauce Zigzag */}
      <path 
        d="M100 190c20-10 40 10 60 0s40-10 60 0s40 10 60 0s40-10 60 0s40 10 60 0" 
        stroke="currentColor" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Steam lines */}
      <path 
        d="M240 60c0 0 10-15 0-30m40 35c0 0 10-15 0-30" 
        stroke="currentColor" 
        strokeWidth="12" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

export default Logo;
