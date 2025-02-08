import { useState, useEffect } from "react";
import leftSigninImg from "../../../../../assets/images/signin_left-img.jpg";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { APP_MESSAGES } from "../../../../../shared/constant/app-messages";
import { APP_ENUMS } from "../../../../../shared/constant/app-enum";
import { APP_ROUTE } from "../../../../../shared/constant/app-routes";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.email) {
      setFormData((prev) => ({ ...prev, email: location.state.email }));
    }
  }, [location.state]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoading(false);
      return;
    }

    setFormErrors({});
    try {
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem("userDetails",JSON.stringify(formData))
        localStorage.setItem("userToken", "aswew3edwer3ugfhyft6hfghfgt4dsfggr");
        localStorage.setItem("isUserLogged", "true");
        navigate(APP_ROUTE.DASHBOARD);
        toast.success(APP_MESSAGES.SUCCESS_WHILE_LOGIN);
      }, 1000);
    } catch (err) {
      setLoading(false);
      setError(APP_MESSAGES.ERROR_WHILE_SUBMITTING_LOGIN_FORM);
    }
  };

  return (
    <div className="h-screen flex w-full">
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${leftSigninImg})` }}
      />
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-gradient-to-br from-blue-100 to-white px-6">
        <div
          className="w-full max-w-lg lg:max-w-xl bg-white shadow-md rounded-lg p-6 border border-gray-200"
          style={{ padding: "2rem" }}
        >
          <h3 className="text-2xl font-semibold text-[#171A1C] mb-2">Sign in</h3>
         
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ padding: "0.6rem" }}
                placeholder="Enter email address"
                className={`w-full font-bold py-[0.75rem] pr-[6.5rem] pl-[1rem] text-[1.125rem] bg-[#FBFCFE] text-[#555E68] border-[1.5px] rounded-[0.3rem] shadow-sm focus:outline-none focus:ring-[1.5px] focus:ring-[#008cc2] placeholder:text-[0.875rem] md:placeholder:text-[1rem] ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-[0.875rem] font-bold text-[#171A1C] mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  style={{ padding: "0.6rem" }}
                  placeholder="Enter your password"
                  className={`w-full font-bold py-[0.75rem] px-[1rem] text-[1.125rem] bg-[#FBFCFE] text-[#555E68] border-[1.5px] rounded-[0.3rem] shadow-sm focus:outline-none focus:ring-[1.5px] focus:ring-[#008cc2] placeholder:text-[1rem] ${
                    formErrors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
                >
                </button>
              </div>
              {formErrors.password && (
                <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
              )}
            </div>
            <div className="flex items-center mb-4">
              <input
                id="rememberMe"
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="h-4 w-4 text-[#008CC2] border-[#32383E] rounded-sm"
              />
              <label
                htmlFor="rememberMe"
                className="ml-3 font-bold text-[#171A1C] text-lg"
              >
                Remember me
              </label>
            </div>
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
            <div className="mb-1 mt-[1.5rem]">
              <button
                type="submit"
                className="cursor-pointer font-semibold tracking-wide w-full py-[0.5rem] px-[1rem] bg-[#268ebe] text-base text-white rounded-md hover:bg-[#3182aa] focus:outline-none transition-colors duration-300 ease-in-out"
                disabled={loading}
              >
                {loading ? APP_ENUMS.LOADING : APP_ENUMS.LOGIN}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
