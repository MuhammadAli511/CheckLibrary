import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import plane from "../../assets/checkmail_paperplane.svg";
import { LogoNavbar } from "../../components";


const CheckYourMail = () => {
    return (
      <div className="bg-[#F7F7F7] min-h-screen">
        <LogoNavbar />
        <div className="flex flex-col items-center justify-center px-2 sm:px-6 lg:px-0">
          <div className="flex items-center justify-center w-3/4 lg:w-2/4 flex-shrink-0 text-center font-poppins font-bold text-5xl leading-12">
            Check Your Mail
          </div>
          <div className="flex items-center justify-center w-3/4 lg:w-2/4 flex-shrink-0 text-center font-poppins font-normal text-3xl leading-10">
            A password reset email has been sent to your e-mail address. Sometimes it takes up to 5 min to deliver the email. Please, also check you spam folder
          </div>
          <img src={plane} alt="paper plane" className="w-387 h-584 mt-8" />
        </div>
      </div>
    );
  };
  
  export default CheckYourMail;
  
  
  
  
  