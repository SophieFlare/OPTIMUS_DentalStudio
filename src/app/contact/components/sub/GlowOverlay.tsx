import React from 'react'

const GlowOverlay = () => {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none mix-blend-screen bg-[radial-gradient(75%_75%_at_center,rgba(140,255,255,0.3)_15%,rgba(14,5,16,0.6)_80%,transparent)]" />
  );
};

export default GlowOverlay;
