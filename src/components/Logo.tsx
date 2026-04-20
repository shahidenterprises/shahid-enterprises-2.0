import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className, width = 45, height = 45 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="sausageGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2DCDA4" />
          <stop offset="100%" stopColor="#0B987C" />
        </linearGradient>
        <linearGradient id="sausageGradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8FF7C1" />
          <stop offset="100%" stopColor="#2DCDA4" />
        </linearGradient>
        <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E6FFFA" />
          <stop offset="100%" stopColor="#B2F5EA" />
        </linearGradient>
      </defs>

      {/* Vertical bars/hooks background layer */}
      <rect x="140" y="30" width="30" height="430" rx="15" fill="url(#barGradient)" opacity="0.6" />
      <rect x="342" y="30" width="30" height="430" rx="15" fill="url(#barGradient)" opacity="0.6" />
      
      {/* Bottom Hooks */}
      <circle cx="155" cy="460" r="45" stroke="url(#barGradient)" strokeWidth="30" fill="none" strokeDasharray="210 100" strokeDashoffset="-20" strokeLinecap="round" opacity="0.6" />
      <circle cx="357" cy="460" r="45" stroke="url(#barGradient)" strokeWidth="30" fill="none" strokeDasharray="210 100" strokeDashoffset="-20" strokeLinecap="round" opacity="0.6" />

      {/* Top Sausage */}
      <path 
        d="M60 180c0-60 392-60 392 0s-392 60-392 0z" 
        fill="url(#sausageGradientTop)" 
      />
      <rect x="180" y="90" width="25" height="60" rx="12" fill="white" opacity="0.2" />
      <rect x="245" y="80" width="25" height="70" rx="12" fill="white" opacity="0.2" />
      <rect x="310" y="90" width="25" height="60" rx="12" fill="white" opacity="0.2" />

      {/* Bottom Sausage */}
      <path 
        d="M60 380c0-60 392-60 392 0s-392 60-392 0z" 
        fill="url(#sausageGradient)" 
      />
      <rect x="180" y="290" width="25" height="60" rx="12" fill="white" opacity="0.2" />
      <rect x="245" y="280" width="25" height="70" rx="12" fill="white" opacity="0.2" />
      <rect x="310" y="290" width="25" height="60" rx="12" fill="white" opacity="0.2" />
    </svg>
  );
};

export default Logo;
