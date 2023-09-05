import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tick from "../../assets/resetpass_success_tick.svg";
import { LogoNavbar } from "../../components";


const ResetPasswordSuccess = () => {
    return (
      <div className="bg-[#F7F7F7] min-h-screen">
        <LogoNavbar />
        <div className="flex flex-col items-center justify-center px-2 sm:px-6 lg:px-0 py-24">
          <img src={tick} alt="tick" className="w-225 h-172 flex-shrink-0 mx-auto mb-4" />
          <div className="flex items-center justify-center w-740 flex-shrink-0 text-[#1E1E1E] text-center font-poppins font-bold text-40 leading-52">
            New password confirm successful
          </div>
          <div className="flex items-center justify-center w-740 flex-shrink-0 text-[#1E1E1E] text-center font-poppins font-normal text-16 leading-24">
            You have successfully confirmed your new password. Please use this password when logging in.
          </div>
          <button className="flex flex-col items-center py-3 px-20 mt-4 bg-[#079263] text-white rounded-md w-426 h-12 flex-shrink-0">
            <span className="font-poppins font-medium text-20 leading-40">Log in</span>
          </button>
        </div>
      </div>
    );
  };
  
export default ResetPasswordSuccess;
  
  
  