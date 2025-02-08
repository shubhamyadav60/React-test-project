import React, { useState } from "react";
import "./MultistepForm.css";

const MultistepForm = ({step, setStep}) => {
const [name,setName]= useState('')
const [email,setEmail]= useState('')
  const nextStep = () => {
    if (step < 3) {
      if(step === 1 && name !== ''){
        setStep(step + 1)
      }else{
        if(step === 2 && email !== ''){
          setStep(step + 1)
        }
      }
      };
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    alert("Form Submitted!");
    setStep(1); 
  };


  
  return (
    <div className="multistep-form">
      <h2>Step {step} of 3</h2>
      <div className="form-step">
        {step === 1 && (
          <div>
            <label>Enter your name:</label>
            <input type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
          </div>
        )}
        {step === 2 && (
          <div>
            <label>Enter your email:</label>
            <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
        )}
        {step === 3 && (
          <div>
            <label>Confirm your details:</label>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
        )}
      </div>
      <div className="form-buttons">
        {step > 1 && <button onClick={prevStep}>Previous</button>}
        {step < 3 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default MultistepForm;
