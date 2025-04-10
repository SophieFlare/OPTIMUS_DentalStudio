import React from 'react';
import './NeonButton.css';  // Assuming you have custom styles for the button

interface NeonButtonProps {
  children: React.ReactNode; // Allow the button to accept any children
  onClick?: () => void;
}

const NeonButton: React.FC<NeonButtonProps> = ({ children }) => {
  return (
    <div className="button-shiny-cta">
      <span>{children}</span> {/* Render the children inside the button */}
    </div>
  );
}

export default NeonButton;