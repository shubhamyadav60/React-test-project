import React from "react";
import "./AlertBox.css";
import { AlertTriangle, HelpCircle } from "lucide-react";

const AlertBox = ({ title = "Are you sure?", message, onConfirm, onCancel, showAlert }) => {
  if (!showAlert) return null;

  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <div className="alert-icon">
          <HelpCircle size={50} className="icon-help" />
          <AlertTriangle size={50} className="icon-alert" />
        </div>
        <h2 className="alert-title">{title}</h2>
        <p className="alert-message">{message}</p>
        <div className="alert-buttons">
          <button className="btn-confirm" onClick={onConfirm}>
            ✅ Confirm
          </button>
          <button className="btn-cancel" onClick={onCancel}>
            ❌ Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
