import React from 'react';

const HaccpCertificate: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className} style={{ 
      width: '100%', 
      maxWidth: '800px', 
      aspectRatio: '1 / 1.414', 
      background: '#fff', 
      padding: '40px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
      border: '1px solid #e0e0e0',
      position: 'relative',
      fontFamily: 'serif',
      color: '#333',
      overflow: 'hidden'
    }}>
      {/* Background Texture / Watermark */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        opacity: 0.03,
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(#0b5d1e 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }} />

      {/* Border Decoration */}
      <div style={{
        position: 'absolute',
        top: '15px', left: '15px', right: '15px', bottom: '15px',
        border: '2px solid #0b5d1e',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        top: '22px', left: '22px', right: '22px', bottom: '22px',
        border: '1px solid #c8962e',
        pointerEvents: 'none'
      }} />

      {/* Header Section */}
      <header style={{ textAlign: 'center', marginBottom: '30px', position: 'relative' }}>
        <div style={{ position: 'absolute', right: '0', top: '0' }}>
           <svg width="80" height="80" viewBox="0 0 100 100">
              <path d="M10 20 L50 5 L90 20 V60 C90 85 50 95 50 95 C50 95 10 85 10 60 V20Z" fill="#0b5d1e" />
              <text x="50" y="55" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">ACS</text>
              <text x="50" y="70" textAnchor="middle" fill="white" fontSize="8">PAKISTAN</text>
           </svg>
        </div>
        <h1 style={{ fontSize: '28px', color: '#1a1a1a', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
          Certificate of Registration
        </h1>
        <div style={{ height: '2px', width: '100px', background: '#c8962e', margin: '0 auto' }}></div>
      </header>

      {/* Body Section */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <p style={{ fontStyle: 'italic', fontSize: '16px', margin: '15px 0' }}>This is to certify that:</p>
        <h2 style={{ fontSize: '36px', color: '#0b5d1e', fontWeight: '800', margin: '10px 0', textDecoration: 'underline' }}>
          Shahid Enterprises
        </h2>
        <p style={{ fontSize: '14px', margin: '10px 0' }}>of</p>
        <p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '30px' }}>
          Jillani Road, Near Fort Qasim, Multan, Pakistan.
        </p>

        <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '20px auto', maxWidth: '90%' }}>
          has been assessed and registered by ACS Registrars Pakistan (Pvt.) Ltd. against the 
          <strong style={{ fontSize: '16px', display: 'block', margin: '10px 0' }}>HACCP (Hazard Analysis Critical Control Point)</strong>
          for food processing as per international code of practice CAC/RCP-1, Rev. 4 (2003) 
          codex alimentarious commission, general principles of food hygiene.
        </p>

        <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #f0f0f0', background: '#fafafa' }}>
           <h3 style={{ fontSize: '20px', letterSpacing: '4px', marginBottom: '10px' }}>H A C C P</h3>
           <p style={{ fontSize: '12px', textTransform: 'uppercase', color: '#666' }}>The scope of registration is:</p>
           <p style={{ fontSize: '20px', fontStyle: 'italic', fontWeight: '500', marginTop: '10px' }}>
             "Processing and export of natural sheep and goat casing"
           </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', textAlign: 'left', marginTop: '40px', fontSize: '13px' }}>
          <div>
            <p><strong>Certificate #</strong> HACCP 191583</p>
            <div style={{ marginTop: '15px' }}>
              <p>Initial Assessment date:</p>
              <p>September 28th 2019</p>
            </div>
            <div style={{ marginTop: '5px' }}>
              <p>Expiry date:</p>
              <p>October 01st 2021</p>
            </div>
          </div>
          <div>
            <div style={{ marginTop: '28px' }}>
              <p>Registration date:</p>
              <p>October 01st 2019</p>
            </div>
            <div style={{ marginTop: '5px' }}>
              <p>Re-issue date:</p>
              <p>September 24th 2020</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section with Stamps */}
      <footer style={{ marginTop: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ textAlign: 'left', fontSize: '10px' }}>
          <p>Authorized Signature:</p>
          <div style={{ borderBottom: '1px solid #333', width: '150px', height: '40px', position: 'relative' }}>
             <span style={{ position: 'absolute', bottom: '2px', left: '10px', fontStyle: 'italic', fontSize: '24px', opacity: 0.8, color: '#0b5d1e', fontFamily: '"Dancing Script", cursive' }}>Vaman</span>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Golden Seal Recreation */}
          <div style={{
            width: '100px', height: '100px',
            background: 'radial-gradient(circle, #f9d976 0%, #f39c12 100%)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            border: '2px dashed #d35400',
            transform: 'rotate(-10deg)',
            padding: '5px'
          }}>
            <div style={{ border: '1px solid #d35400', borderRadius: '50%', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
               <span style={{ fontSize: '8px', color: '#d35400', fontWeight: 'bold' }}>ACS REGISTRARS<br/>CERTIFIED</span>
            </div>
          </div>
        </div>
      </footer>
      
      <div style={{ marginTop: '20px', fontSize: '9px', color: '#888', textAlign: 'left', lineHeight: '1.2' }}>
        <p>ACS REGISTRARS PAKISTAN (PVT.) LTD. Suite # 17 - G, Al Hafeez View, 67 - D/01, Sir Syed Road, Gulberg - III, Lahore, Pakistan.</p>
        <p>Email: info@acsregistrars.pk | Website: www.acsregistrars.pk</p>
      </div>
    </div>
  );
};

export default HaccpCertificate;
