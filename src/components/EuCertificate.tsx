'use client';

import React from 'react';
import Image from 'next/image';

const EuCertificate: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={className}
      style={{
        width: '100%',
        maxWidth: '700px',
        background: '#1a1a1a',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
      }}
    >
      {/* Header Bar */}
      <div style={{
        padding: '16px 24px',
        background: '#003399',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
        </div>
        <span style={{
          color: 'rgba(255,255,255,0.85)',
          fontSize: '13px',
          fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
          fontWeight: 500,
          marginLeft: 8,
        }}>
          EU Establishment Record — Shahid Enterprises (06-MINFAL-SHE)
        </span>
        <div style={{ marginLeft: 'auto' }}>
          <svg width="20" height="20" viewBox="0 0 54 36" xmlns="http://www.w3.org/2000/svg">
            <rect fill="#003399" width="54" height="36" />
            <g fill="#FFCC00" transform="translate(27 18) scale(0.12)">
              {[...Array(12)].map((_, i) => (
                <path 
                  key={i} 
                  d="M0,-100 L22.5,-30.9 H95.1 L36.3,11.8 L58.8,80.9 L0,38.2 L-58.8,80.9 L-36.3,11.8 L-95.1,-30.9 H-22.5 Z" 
                  transform={`rotate(${i * 30}) translate(0, -150)`} 
                />
              ))}
            </g>
          </svg>
        </div>
      </div>

      {/* Certificate Photo */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '0.72' }}>
        <Image
          src="/images/cert_eu_8k.webp"
          alt="Official EU Export License for Shahid Enterprises — Registration Number 06-MINFAL-SHE"
          fill
          style={{ objectFit: 'contain', background: '#f5f5f0' }}
          sizes="700px"
          quality={100}
        />
      </div>

      {/* Footer Bar */}
      <div style={{
        padding: '14px 24px',
        background: '#111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: '#28c840',
            boxShadow: '0 0 6px #28c840',
          }} />
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontFamily: 'monospace' }}>
            REG # 06-MINFAL-SHE · EU APPROVED ESTABLISHMENT
          </span>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', fontFamily: 'monospace' }}>
          Digital Twin Verified
        </span>
      </div>
    </div>
  );
};

export default EuCertificate;
