'use client';

import React from 'react';
import Image from 'next/image';

const FbrCertificate: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={className}
      style={{
        width: 'min(92vw, calc(85vh * 0.72))',
        height: 'min(85vh, calc(92vw / 0.72))',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: '12px',
      }}
    >
      {/* Header Bar */}
      <div style={{
        padding: '12px 24px',
        background: '#0b5d1e',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        borderRadius: '12px 12px 0 0',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
        </div>
        <span style={{
          color: 'rgba(255,255,255,0.85)',
          fontSize: '12px',
          fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
          fontWeight: 500,
          marginLeft: 8,
        }}>
          FBR Certificate — Shahid Enterprises
        </span>
        <div style={{ marginLeft: 'auto' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/>
          </svg>
        </div>
      </div>

      {/* Certificate Photo */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        flex: 1,
        minHeight: 0,
        background: '#fff'
      }}>
        <Image
          src="/images/cert_fbr_8k.webp"
          alt="Official FBR Certificate — Shahid Enterprises"
          fill
          style={{ objectFit: 'contain' }}
          sizes="700px"
          quality={100}
          priority
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
            Federal Board of Revenue of Pakistan
          </span>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', fontFamily: 'monospace' }}>
          Verified Statutory Document
        </span>
      </div>
    </div>
  );
};

export default FbrCertificate;
