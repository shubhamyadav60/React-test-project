import { createContext, useState } from "react";
import CryptoJS from "crypto-js";
// Create Context
const GlobalContext = createContext();

// Create Provider Component
export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const secretKey = "secret-key";
  
  const handleDecrypt = (encryptedText) => {
    if (!encryptedText) {
      alert("No encrypted text available to decrypt!");
      return;
    }
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      if (!decrypted) throw new Error("Invalid encrypted text");
      return decrypted;
    } catch (error) {
      alert("Decryption failed! Make sure the text is valid.");
    }
  };

  return (
    <GlobalContext.Provider value={{ user, setUser, handleDecrypt }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
