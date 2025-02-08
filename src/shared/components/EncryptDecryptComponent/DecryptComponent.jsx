import React, { useState } from "react";
import CryptoJS from "crypto-js";

const DecryptComponent = ({ encryptedText }) => {
  const [decryptedText, setDecryptedText] = useState("");
  const secretKey = "secret-key";

  const handleDecrypt = () => {
    if (!encryptedText) {
      alert("No encrypted text available to decrypt!");
      return;
    }
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      if (!decrypted) throw new Error("Invalid encrypted text");
      setDecryptedText(decrypted);
    } catch (error) {
      alert("Decryption failed! Make sure the text is valid.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Decryption</h2>
      <p>
        <strong>Encrypted Text:</strong> {encryptedText || "None"}
      </p>
      <button
        onClick={handleDecrypt}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#28A745",
          color: "white",
          cursor: "pointer",
        }}
      >
        Decrypt
      </button>
      <p>
        <strong>Decrypted Text:</strong> {decryptedText}
      </p>
    </div>
  );
};

export default DecryptComponent;
