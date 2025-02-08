import React from "react";
import "./AlertBox.css";

const AlertBox = ({ title, message, onConfirm, onCancel, showAlert }) => {

  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <h2 className="alert-title">{title}</h2>
        <p className="alert-message">{message}</p>
        <div className="alert-buttons">
          <button className="btn-confirm" onClick={onConfirm}>
            Confirm
          </button>
          <button className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
