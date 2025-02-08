import React, { useState } from "react";
import RegisterSteps from "./RegisterSteps";
import MultistepForm from "./MultistepForm";

const RegisterForm = () => {
  const [stepHighlight,setStepHighlight]= useState("#step1")
   const [step, setStep] = useState(1);

  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <RegisterSteps stepHighlight={stepHighlight} setStepHighlight={setStepHighlight} step={step} setStep={setStep} />
        <MultistepForm stepHighlight={stepHighlight} setStepHighlight={setStepHighlight} step={step} setStep={setStep} />
    </div>
  );
};

export default RegisterForm;
