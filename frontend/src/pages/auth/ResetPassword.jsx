import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import lock from "../../assets/lock.svg";
import { LogoNavbar } from "../../components";
import { ChangePasswordonReset } from "../../helper";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    new_password: "",
    confirm_password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { new_password, confirm_password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
  
      if (!token) {
        alert("Token not found in URL");
        return;
      }
      
      const response = await ChangePasswordonReset(new_password, confirm_password, token);
      if (!response) {
        alert("Can not reach Server");
      }
      if (response.status === 200) {
        navigate("/reset-password-success");
      } else {
        alert(response.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <LogoNavbar />
      <div className="flex flex-col items-center justify-center px-2 sm:px-6 lg:px-0">
        <div className="bg-white py-4 px-6 mt-4 rounded-lg w-full max-w-xl sm:max-w-md lg:max-w-lg h-auto">
          <img src={lock} alt="lock" className="w-42 h-42 mx-auto pt-14" />
          <h1 className="text-2xl font-semibold text-[#1E1E1E] mb-4 mt-10 text-center">
            Reset Your Password
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center"
          >
            <input
              type="password"
              id="new_password"
              name="new_password"
              value={new_password}
              onChange={onChange}
              className="input-placeholder border border-[#C5C5C5] p-2 rounded-lg w-full h-[38px] text-sm font-normal mb-4"
              placeholder="New Password"
              required
            />
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={confirm_password}
              onChange={onChange}
              className="input-placeholder border border-[#C5C5C5] p-2 rounded-lg w-full h-[38px] text-sm font-normal mb-4"
              placeholder="Confirm New Password"
              required
            />

            <button
              type="submit"
              className="bg-[#6259CE] text-white p-2 rounded-lg w-full h-[38px] text-sm font-normal mt-10"
            >
              {isLoading ? (
                <div className="loader"></div>
              ) : (
                "Reset Password"
              )}
            </button>
          </form>

          <div className="flex flex-row items-center justify-center my-5">
            <p className="text-sm font-normal text-[#1E1E1E]">
              Go back to{" "}
              <Link to="/login" className="text-[#6259CE]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
