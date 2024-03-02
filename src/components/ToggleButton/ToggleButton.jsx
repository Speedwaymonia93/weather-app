import React from "react";
import { useAPI } from "../../services/ApiContext";
import "../ToggleButton/ToggleButton.css";
import { FcOrgUnit } from "react-icons/fc";
const ToggleButton = () => {
  const { isToggled, setIsToggled } = useAPI();

  const handleChange = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="button-container">
      <div className="label-container">
        <FcOrgUnit className="icon" />
        <p className="label">Switch temperature units</p>
      </div>
      <button
        onClick={handleChange}
        className={`toggle-button ${isToggled ? "off" : "on"}`}>
        {isToggled ? <span>°C</span> : <span>F</span>}
      </button>
    </div>
  );
};

export default ToggleButton;
