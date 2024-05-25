import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";
import { PulseLoader } from "react-spinners";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { isLoading, userInfo } = useSelector((state) => state.auth);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitCredentials = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    } else {
      return;
    }
  }, [userInfo, dispatch, navigate]);

  return (
    <div className="w-full h-[75vh] flex justify-center items-center">
      <div>
        <h2 className="text-[18px] mb-4 font-bold text-gray-500">
          Login to your account
        </h2>
        <form onSubmit={handleSubmitCredentials}>
          <div className="flex flex-col gap-5">
            <div className="relative">
              <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                Email{" "}
                <svg
                  width="7"
                  height="7"
                  className="ml-1"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  ></path>
                </svg>
              </label>
              <input
                type="email"
                onChange={handleChange}
                value={credentials.email}
                name="email"
                id="email"
                className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                placeholder="email"
                required=""
              />
            </div>
            <div className="relative">
              <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                Password
                <svg
                  width="7"
                  height="7"
                  className="ml-1"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  ></path>
                </svg>
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={credentials.password}
                id="password"
                className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                placeholder="password"
                required=""
              />
            </div>
          </div>
          <button
            disabled={isLoading}
            className="relative mt-4 w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span className="relative w-full  px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {isLoading ? <PulseLoader size={12} color="white" /> : "Login"}
            </span>
          </button>
        </form>
        <div className="mt-4">
          <span className="text-[14px] mt-4">
            <span className="pr-1">Do not have an account?</span>
            <Link to="/register" className="text-red-500">
              Register here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
