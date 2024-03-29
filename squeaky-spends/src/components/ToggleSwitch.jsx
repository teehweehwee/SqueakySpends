import React from 'react';
import './ToggleSwitch.css';
const ToggleSwitch = ({ checked, onToggle }) => {
  return (
    <div className="toggle-switch" onClick={onToggle}>
      <div className={`toggle-switch-inner ${checked ? 'checked' : ''}`} />
    </div>
  );
};

export default ToggleSwitch;