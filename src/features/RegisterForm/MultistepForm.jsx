import React, { useState } from "react";
import "./MultistepForm.css";

const MultistepForm = ({step, setStep}) => {
const [name,setName]= useState('')
const [email,setEmail]= useState('')
const [contactNo,setContactNo]= useState()
const [nameError,setNameError]= useState('')
const [emailError,setEmailError]= useState('')
const [contactNoError,setContactNoError]= useState('')




  const nextStep = () => {
    if (step < 4) {
      if(step === 1 ){
        if(name !== ''){
          setNameError("")
          setStep(step + 1)
        }else {
          setNameError("Name is reqeried")
        }
      }else{
        if(step === 2 ){
          if(email !== ''){
            setEmailError("")
            setStep(step + 1)
          }else{
            setEmailError("Please enter email first")
          }
        }
        if(step === 3  ){
          if(contactNo !== "" && contactNo?.length === 10){
            setContactNoError('')
            setStep(step + 1)
          }else{
            if(contactNo === ""){
              setContactNoError("please enter contact number first")
            }else if ( contactNo?.length <10){
              setContactNoError("please enter valid contact number ")
            }
          }
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
            <input value={name} type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
            {nameError && (<span style={{color:"red",position:"absolute"}}> {nameError}</span>)}
          </div>
        )}
        {step === 2 && (
          <div>
            <label>Enter your email:</label>
            <input value={email}   type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
            {emailError && (<span style={{color:"red",position:"absolute"}}> {emailError}</span>)}
          </div>
        )}
         {step === 3 && (
          <div>
            <label>Enter your Contact No.:</label>
            <input type="number" value={contactNo} placeholder="Enter contact number" onMouseLeave={()=>{
              if(contactNo?.length < 10){
                setContactNoError("please enter valid contact number")
              }
            }} onChange={(e)=>{setContactNo(e.target.value)}}/>
            {contactNoError && (<span style={{color:"red",position:"absolute"}}> {contactNoError}</span>)}
          </div>
        )}
        {step === 4 && (
          <div>
            <label>Confirm your details:</label>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Contact No: {contactNo}</p>

          </div>
        )}
      </div>
      <div className="form-buttons">
        {step > 1 && <button onClick={prevStep}>Previous</button>}
        {step < 4 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default MultistepForm;
