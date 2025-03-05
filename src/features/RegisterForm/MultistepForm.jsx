"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronLeft, ChevronRight, Upload } from "lucide-react"
import SuccessBox from "../../shared/components/common/SuccessBox"

const steps = [
  { id: 1, label: "Basic Info" },
  { id: 2, label: "Contact Details" },
  { id: 3, label: "Address" },
  { id: 4, label: "Business" },
  { id: 5, label: "Documents" },
  { id: 6, label: "Password" },
  { id: 7, label: "Confirmation" },
]

const MultistepForm = ({ step, setStep }) => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    email: "",
    contactNo: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    businessName: "",
    businessType: "",
    gstNumber: "",
    aadhaar: null,
    panCard: null,
    businessLicense: null,
    password: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState({
    aadhaar: null,
    panCard: null,
    businessLicense: null,
  })

  const handleChange = (e) => {
    const { name, value, type, files } = e.target

    if (type === "file") {
      setUploadedFiles({
        ...uploadedFiles,
        [name]: files[0] ? files[0].name : null,
      })
      setFormData({
        ...formData,
        [name]: files[0],
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateStep = () => {
    const newErrors = {}

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required"
      else if (formData.name.length < 3) newErrors.name = "Name must be at least 3 characters"

      if (!formData.gender) newErrors.gender = "Please select your gender"

      if (!formData.dob) newErrors.dob = "Date of birth is required"
      else {
        const birthDate = new Date(formData.dob)
        const today = new Date()
        const age = today.getFullYear() - birthDate.getFullYear()
        if (age < 18) newErrors.dob = "You must be at least 18 years old"
      }
    }

    if (step === 2) {
      if (!formData.email.trim()) newErrors.email = "Email is required"
      else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Please enter a valid email address"

      if (!formData.contactNo.trim()) newErrors.contactNo = "Contact number is required"
      else if (!/^\d{10}$/.test(formData.contactNo)) newErrors.contactNo = "Contact number must be 10 digits"
    }

    if (step === 3) {
      if (!formData.address1.trim()) newErrors.address1 = "Address line 1 is required"
      if (!formData.city.trim()) newErrors.city = "City is required"
      if (!formData.state.trim()) newErrors.state = "State is required"
      if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required"
      else if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = "Pincode must be 6 digits"
    }

    if (step === 4) {
      if (!formData.businessName.trim()) newErrors.businessName = "Business name is required"
      if (!formData.businessType.trim()) newErrors.businessType = "Business type is required"
      if (!formData.gstNumber.trim()) newErrors.gstNumber = "GST number is required"
      else if (!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(formData.gstNumber))
        newErrors.gstNumber = "Please enter a valid GST number"
    }

    if (step === 5) {
      if (!formData.aadhaar) newErrors.aadhaar = "Aadhaar document is required"
      if (!formData.panCard) newErrors.panCard = "PAN card is required"
      if (!formData.businessLicense) newErrors.businessLicense = "Business license is required"
    }

    if (step === 6) {
      if (!formData.password) newErrors.password = "Password is required"
      else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters"
      else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password))
        newErrors.password = "Password must contain uppercase, lowercase and numbers"

      if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password"
      else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1)
    }
  }

  const prevStep = () => setStep(step - 1)

  const handleSubmit = () => {
    // Simulate API call or form submission
    console.log("Form submitted:", formData)
    setShowSuccess(true)
  }

  const handleCloseSuccess = () => {
    setFormData({
      name: "",
      gender: "",
      dob: "",
      email: "",
      contactNo: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      pincode: "",
      businessName: "",
      businessType: "",
      gstNumber: "",
      aadhaar: null,
      panCard: null,
      businessLicense: null,
      password: "",
      confirmPassword: "",
    })
    setUploadedFiles({
      aadhaar: null,
      panCard: null,
      businessLicense: null,
    })
    setErrors({})
    setStep(1)
    setShowSuccess(false)
  }

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white  overflow-hidden">
      {/* Progress bar and steps */}

      <div className="p-6 space-y-6">
        {/* Form content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`step-${step}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={stepVariants}
            className="space-y-4 "
          >
            {step === 1 && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all
                      ${errors.name ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all
                      ${errors.gender ? "border-red-500" : "border-gray-300"}`}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all
                      ${errors.dob ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all
                      ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                  <input
                    type="tel"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    placeholder="Enter your 10-digit contact number"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all
                      ${errors.contactNo ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.contactNo && <p className="text-red-500 text-sm mt-1">{errors.contactNo}</p>}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
                  <input
                    type="text"
                    name="address1"
                    value={formData.address1}
                    onChange={handleChange}
                    placeholder="Enter your street address"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all
                      ${errors.address1 ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.address1 && <p className="text-red-500 text-sm mt-1">{errors.address1}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Address Line 2 (Optional)</label>
                  <input
                    type="text"
                    name="address2"
                    value={formData.address2}
                    onChange={handleChange}
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all
                        ${errors.city ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="State"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all
                        ${errors.state ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="6-digit pincode"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all
                        ${errors.pincode ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                  </div>
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Business Name</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Enter your business name"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all
                      ${errors.businessName ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Business Type</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all
                      ${errors.businessType ? "border-red-500" : "border-gray-300"}`}
                  >
                    <option value="">Select Business Type</option>
                    <option value="sole_proprietorship">Sole Proprietorship</option>
                    <option value="partnership">Partnership</option>
                    <option value="llp">Limited Liability Partnership</option>
                    <option value="private_limited">Private Limited Company</option>
                    <option value="public_limited">Public Limited Company</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">GST Number</label>
                  <input
                    type="text"
                    name="gstNumber"
                    value={formData.gstNumber}
                    onChange={handleChange}
                    placeholder="Enter your 15-digit GST number"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all
                      ${errors.gstNumber ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.gstNumber && <p className="text-red-500 text-sm mt-1">{errors.gstNumber}</p>}
                </div>
              </>
            )}

            {step === 5 && (
              <>
                <div className="space-y-4">
                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center 
                    ${errors.aadhaar ? "border-red-500" : uploadedFiles.aadhaar ? "border-green-500" : "border-gray-300"}`}
                  >
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <Upload className={`w-10 h-10 ${uploadedFiles.aadhaar ? "text-green-500" : "text-gray-400"}`} />
                      <h4 className="text-lg font-medium">
                        {uploadedFiles.aadhaar ? "Aadhaar Uploaded" : "Upload Aadhaar Card"}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {uploadedFiles.aadhaar ? uploadedFiles.aadhaar : "PDF, JPG or PNG (Max 5MB)"}
                      </p>
                      <label className="mt-2 cursor-pointer">
                        <span className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                          {uploadedFiles.aadhaar ? "Change File" : "Select File"}
                        </span>
                        <input
                          type="file"
                          name="aadhaar"
                          onChange={handleChange}
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                    </div>
                    {errors.aadhaar && <p className="text-red-500 text-sm mt-2">{errors.aadhaar}</p>}
                  </div>

                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center 
                    ${errors.panCard ? "border-red-500" : uploadedFiles.panCard ? "border-green-500" : "border-gray-300"}`}
                  >
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <Upload className={`w-10 h-10 ${uploadedFiles.panCard ? "text-green-500" : "text-gray-400"}`} />
                      <h4 className="text-lg font-medium">
                        {uploadedFiles.panCard ? "PAN Card Uploaded" : "Upload PAN Card"}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {uploadedFiles.panCard ? uploadedFiles.panCard : "PDF, JPG or PNG (Max 5MB)"}
                      </p>
                      <label className="mt-2 cursor-pointer">
                        <span className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                          {uploadedFiles.panCard ? "Change File" : "Select File"}
                        </span>
                        <input
                          type="file"
                          name="panCard"
                          onChange={handleChange}
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                    </div>
                    {errors.panCard && <p className="text-red-500 text-sm mt-2">{errors.panCard}</p>}
                  </div>

                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center 
                    ${errors.businessLicense ? "border-red-500" : uploadedFiles.businessLicense ? "border-green-500" : "border-gray-300"}`}
                  >
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <Upload
                        className={`w-10 h-10 ${uploadedFiles.businessLicense ? "text-green-500" : "text-gray-400"}`}
                      />
                      <h4 className="text-lg font-medium">
                        {uploadedFiles.businessLicense ? "Business License Uploaded" : "Upload Business License"}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {uploadedFiles.businessLicense ? uploadedFiles.businessLicense : "PDF, JPG or PNG (Max 5MB)"}
                      </p>
                      <label className="mt-2 cursor-pointer">
                        <span className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                          {uploadedFiles.businessLicense ? "Change File" : "Select File"}
                        </span>
                        <input
                          type="file"
                          name="businessLicense"
                          onChange={handleChange}
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                    </div>
                    {errors.businessLicense && <p className="text-red-500 text-sm mt-2">{errors.businessLicense}</p>}
                  </div>
                </div>
              </>
            )}

            {step === 6 && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all
                      ${errors.password ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  <p className="text-xs text-gray-500 mt-1">
                    Password must be at least 8 characters and include uppercase, lowercase, and numbers
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all
                      ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>
              </>
            )}

            {step === 7 && (
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-green-800 font-medium">All information collected successfully!</h4>
                    <p className="text-green-700 text-sm mt-1">
                      Please review your information below before submitting.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Personal Information</h5>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <span className="text-gray-500">Name:</span> {formData.name}
                        </li>
                        <li>
                          <span className="text-gray-500">Gender:</span> {formData.gender}
                        </li>
                        <li>
                          <span className="text-gray-500">Date of Birth:</span> {formData.dob}
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-700 mb-2">Contact Information</h5>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <span className="text-gray-500">Email:</span> {formData.email}
                        </li>
                        <li>
                          <span className="text-gray-500">Contact:</span> {formData.contactNo}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-700 mb-2">Address</h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <span className="text-gray-500">Address Line 1:</span> {formData.address1}
                      </li>
                      {formData.address2 && (
                        <li>
                          <span className="text-gray-500">Address Line 2:</span> {formData.address2}
                        </li>
                      )}
                      <li>
                        <span className="text-gray-500">City, State, Pincode:</span> {formData.city}, {formData.state},{" "}
                        {formData.pincode}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-700 mb-2">Business Information</h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <span className="text-gray-500">Business Name:</span> {formData.businessName}
                      </li>
                      <li>
                        <span className="text-gray-500">Business Type:</span> {formData.businessType}
                      </li>
                      <li>
                        <span className="text-gray-500">GST Number:</span> {formData.gstNumber}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-700 mb-2">Uploaded Documents</h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <span className="text-gray-500">Aadhaar Card:</span> {uploadedFiles.aadhaar || "Not uploaded"}
                      </li>
                      <li>
                        <span className="text-gray-500">PAN Card:</span> {uploadedFiles.panCard || "Not uploaded"}
                      </li>
                      <li>
                        <span className="text-gray-500">Business License:</span>{" "}
                        {uploadedFiles.businessLicense || "Not uploaded"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center  ">
          {step > 1 ? (
            <button
              onClick={prevStep}
              className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </button>
          ) : (
            <div></div> // Empty div to maintain flex spacing
          )}

          {step < steps.length ? (
            <button
              onClick={nextStep}
              className="flex items-center px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex items-center px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              Submit
              <Check className="w-4 h-4 ml-1" />
            </button>
          )}
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <SuccessBox
          message="Thank you! Your registration has been submitted successfully."
          onClose={handleCloseSuccess}
          show={showSuccess}
        />
      )}
    </div>
  )
}

export default MultistepForm

