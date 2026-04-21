import React from 'react';

export const EUFlag = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 54 36" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect fill="#003399" width="54" height="36" />
    <g fill="#FFCC00" transform="translate(27 18)">
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 30})`}>
          <polygon points="0,-4 0.448,-1.38 3.236,-2.352 0.9,0.292 1.236,2.98 0,1.4 -1.236,2.98 -0.9,0.292 -3.236,-2.352 -0.448,-1.38" />
        </g>
      ))}
    </g>
  </svg>
);

export const UAEFlag = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 1200 600" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="1200" height="600" fill="#FFFFFF" />
    <rect width="300" height="600" fill="#FF0000" />
    <rect x="300" width="900" height="200" fill="#00732F" />
    <rect x="300" y="200" width="900" height="200" fill="#FFFFFF" />
    <rect x="300" y="400" width="900" height="200" fill="#000000" />
  </svg>
);
