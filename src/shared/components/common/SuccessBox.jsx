import React from "react";
import "./SuccessBox.css";
import { CheckCircle2, PartyPopper } from "lucide-react";

const SuccessBox = ({ title = "Success!", message = "Your form has been submitted successfully.", onClose, show }) => {
  if (!show) return null;

  return (
    <div className="success-overlay">
      <div className="success-box">
        <div className="success-icon-wrapper">
          <PartyPopper className="success-icon popper" size={40} />
          <CheckCircle2 className="success-icon check" size={50} />
        </div>
        <h2 className="success-title">{title}</h2>
        <p className="success-message">{message}</p>

        <button className="success-close-btn" onClick={onClose}>
          🎉 Okay, Got It!
        </button>
      </div>
    </div>
  );
};

export default SuccessBox;
