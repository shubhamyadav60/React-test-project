import React, { useState } from "react";
import CryptoJS from "crypto-js";

const EncryptComponent = ({ onEncrypt }) => {
  const [text, setText] = useState("");
  const secretKey = "secret-key";

  const handleEncrypt = () => {
    if (!text.trim()) {
      alert("Please enter text to encrypt!");
      return;
    }
    const encryptedText = CryptoJS.AES.encrypt(text, secretKey).toString();
    onEncrypt(encryptedText);
    setText(""); 
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Encryption</h2>
      <input
        type="text"
        placeholder="Enter text to encrypt"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "10px",
          width: "80%",
          marginRight: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleEncrypt}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007BFF",
          color: "white",
          cursor: "pointer",
        }}
      >
        Encrypt
      </button>
    </div>
  );
};

export default EncryptComponent;
