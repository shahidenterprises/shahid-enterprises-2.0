'use client';

import React from 'react';
import Image from 'next/image';

const HaccpCertificate: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={className}
      style={{
        width: '100%',
        maxWidth: '700px',
        maxHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
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
          HACCP Certificate — Shahid Enterprises
        </span>
        <div style={{ marginLeft: 'auto' }}>
          <svg width="16" height="16" viewBox="0 0 300 300" fill="none">
            <path d="M70 60 L150 30 L230 60 V160 C230 210 150 250 150 250 C150 250 70 210 70 160 V60Z" fill="white" fillOpacity="0.9"/>
            <path d="M110 90 V170 M190 90 V170 M110 130 H190" stroke="#0b5d1e" strokeWidth="18" strokeLinecap="square" />
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
          src="/images/cert_haccp_original.webp"
          alt="Official HACCP Certificate — Shahid Enterprises"
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
            Certificate #HACCP 191583 · ACS Registrars Pakistan
          </span>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', fontFamily: 'monospace' }}>
          Verified Document
        </span>
      </div>
    </div>
  );
};

export default HaccpCertificate;
