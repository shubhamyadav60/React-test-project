import { useState } from "react";
import EncryptComponent from "../shared/components/EncryptDecryptComponent/EncryptComponent";
import DecryptComponent from "../shared/components/EncryptDecryptComponent/DecryptComponent";
import RightClickTable from "./dashboard/RightClickComponent";


const EncryptDecryptComponent = () => {
    const [encryptedText, setEncryptedText] = useState("");
  
    return (
        <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
        <h1>Encryption and Decryption</h1>
        <EncryptComponent onEncrypt={setEncryptedText} />
        <DecryptComponent encryptedText={encryptedText} />
        <RightClickTable/>
      </div>
    );
  };

  export default EncryptDecryptComponent