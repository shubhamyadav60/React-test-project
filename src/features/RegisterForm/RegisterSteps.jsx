// import React from 'react';

// const steps = [
//   { id: 1, title: "Basic Info", description: "Personal details" },
//   { id: 2, title: "Contact Details", description: "Email & Phone" },
//   { id: 3, title: "Address Details", description: "Full address" },
//   { id: 4, title: "Business Details", description: "Business information" },
//   { id: 5, title: "Document Upload", description: "Upload necessary documents" },
//   { id: 6, title: "Set Password", description: "Secure your account" },
//   { id: 7, title: "Confirmation", description: "Review & Submit" },
// ];

// const RegisterSteps = ({ step }) => {
//   return (
//     <ol className="space-y-8 overflow-hidden">
//       {steps.map((item, index) => (
//         <li key={item.id} className={`relative flex-1 after:content-[''] after:w-0.5 after:h-full after:inline-block after:absolute after:left-4 lg:after:left-5 ${
//             index !== steps.length - 1
//               ? step > item.id
//                 ? 'after:bg-indigo-600 after:-bottom-11'
//                 : 'after:bg-gray-200 after:-bottom-12'
//               : ''
//           }`}>
//           <div className="flex items-center font-medium w-full">
//             <span className={`w-8 h-8 border-2 rounded-full flex justify-center items-center mr-3 text-sm lg:w-10 lg:h-10 ${
//                 step > item.id
//                   ? 'bg-green-600 border-transparent text-white'
//                   : step === item.id
//                   ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
//                   : 'bg-gray-50 border-gray-200 text-gray-500'
//               }`}>
//               {step > item.id ? "✓" : item.id}
//             </span>
//             <div>
//               <h4 className={`text-lg ${step >= item.id ? 'text-blue-700' : 'text-gray-500'}`}>{item.title}</h4>
//               <span className={`text-sm ${step >= item.id ? 'text-blue-700' : 'text-gray-500'}`}>{item.description}</span>
//             </div>
//           </div>
//         </li>
//       ))}
//     </ol>
//   );
// };

// export default RegisterSteps;


import React from 'react';
import { CheckCircle, FileText, MapPin, Briefcase, Upload, Lock, Check } from 'lucide-react';

const steps = [
  { id: 1, title: "Basic Info", icon: <FileText />, description: "Personal details" },
  { id: 2, title: "Contact Details", icon: <MapPin />, description: "Email & Phone" },
  { id: 3, title: "Address Details", icon: <MapPin />, description: "Full address" },
  { id: 4, title: "Business Details", icon: <Briefcase />, description: "Business information" },
  { id: 5, title: "Document Upload", icon: <Upload />, description: "Upload documents" },
  { id: 6, title: "Set Password", icon: <Lock />, description: "Secure your account" },
  { id: 7, title: "Confirmation", icon: <Check />, description: "Review & Submit" },
];

const RegisterSteps = ({ step }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between relative overflow-x-auto bg-white py-4 px-4 rounded-xl shadow-lg border border-gray-100">
      {steps.map((item, index) => (
        <div key={item.id} className="relative flex flex-col items-center text-center group">
          {/* Connector Line */}
          {index !== steps.length - 1 && (
            <div className={`absolute top-4 left-1/2 h-1 w-28 transform -translate-x-1/2 ${step > item.id ? 'bg-green-500' : 'bg-gray-200'}`} />
          )}

          {/* Step Circle */}
          <div className={`w-10 h-10 flex justify-center items-center rounded-full border-2 z-10 text-white group-hover:scale-110 transition-all duration-300 ease-in-out ${
            step > item.id
              ? 'bg-green-500 border-green-500'
              : step === item.id
              ? 'bg-indigo-500 border-indigo-500 animate-bounce'
              : 'bg-gray-100 border-gray-300 text-gray-400'
          }`}>
            {step > item.id ? <CheckCircle size={20} /> : item.icon}
          </div>

          {/* Step Title */}
          <span className={`mt-2 text-xs font-medium whitespace-nowrap ${step >= item.id ? 'text-indigo-700' : 'text-gray-500'}`}>
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RegisterSteps;
