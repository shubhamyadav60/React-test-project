// import React, { useState } from 'react';
// import RegisterSteps from './RegisterSteps';
// import MultistepForm from './MultistepForm';

// const steps = [
//   "Basic Info",
//   "Contact Details",
//   "Address Details",
//   "Business Details",
//   "Document Upload",
//   "Set Password",
//   "Confirmation",
// ];

// const RegisterForm = () => {
//   const [step, setStep] = useState(1);

//   return (
//     <div className="flex flex-col lg:flex-row items-start justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 mx-auto">
//       <div className="w-full lg:w-1/3 bg-white p-6 rounded-2xl shadow-md space-y-6 border border-gray-200">
//         <h2 className="text-xl font-bold text-gray-700">Registration Steps</h2>
//         <RegisterSteps step={step} />
//       </div>

//       <div className="flex-1 bg-white p-8 rounded-2xl shadow-md border border-gray-200 lg:ml-8 mt-6 lg:mt-0 relative">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6">
//           Step {step}: {steps[step - 1]}
//         </h1>
//         <MultistepForm step={step} setStep={setStep} />
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;

import { useState } from "react"
import RegisterSteps from './RegisterSteps';
import MultistepForm from './MultistepForm';

const steps = [
  "Basic Info",
  "Contact Details",
  "Address Details",
  "Business Details",
  "Document Upload",
  "Set Password",
  "Confirmation",
];

const RegisterForm = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col items-center justify-center p-4">
      {/* Card Container */}
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-3xl overflow-hidden relative border border-gray-200">
        

        {/* Main Body - Steps + Form */}
        <div className="">
          
          {/* Sidebar Stepper */}
          <div className="w-full   p-6 border-r border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Registration Steps</h3>
            <RegisterSteps step={step} />
          </div>

          {/* Form Section */}
          <div className="flex-1 p-6">
            <h4 className="text-xl font-bold text-gray-800 mb-4">
              Step {step}: {steps[step - 1]}
            </h4>
            <MultistepForm step={step} setStep={setStep} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
