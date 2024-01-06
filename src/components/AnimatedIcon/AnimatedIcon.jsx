import React, { useEffect } from "react";
import "./AnimatedIcon.css"; // Assuming your CSS is in this file
import successIcon from "./success.png";
import failIcon from "./fail.png";

const AnimatedIcon = ({ show, type, close }) => {
  useEffect(() => {
    if (show) {
      setTimeout(() => close(), 1000); // Hide after 2 seconds
    }
  }, [show]);

  const iconSrc = type === "success" ? successIcon : failIcon;

  return show && <img className="icon" src={iconSrc} alt={type} />;
};

export default AnimatedIcon;
