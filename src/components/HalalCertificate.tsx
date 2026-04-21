'use client';

import React from 'react';
import Image from 'next/image';

const HalalCertificate: React.FC<{ className?: string }> = ({ className }) => {
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
        background: '#0b5d1e',
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
          Halal Certification — Shahid Enterprises
        </span>
        <div style={{ marginLeft: 'auto' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
      </div>

      {/* Certificate Photo */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '0.72' }}>
        <Image
          src="/images/cert_halal_8k.webp"
          alt="Official Halal Certificate — Shahid Enterprises, certified for natural casing processing"
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
            International Halal Food Safety Standard
          </span>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', fontFamily: 'monospace' }}>
          Verified Doc
        </span>
      </div>
    </div>
  );
};

export default HalalCertificate;
