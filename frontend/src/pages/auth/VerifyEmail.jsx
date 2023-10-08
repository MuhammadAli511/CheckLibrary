import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LogoNavbar } from "../../components";
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorToast from "../../components/ErrorToast";
import SuccessToast from "../../components/SuccessToast";
import '../../toastCustomStyles.css';

const VerifyEmail = () => {

    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const email = location.state.email;
    const navigate = useNavigate();

    return (
        <div className="bg-[#F7F7F7] min-h-screen">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                closeOnClick={true}
                pauseOnHover={true}
                draggable={false}
                theme="colored"
            />
            <LogoNavbar />
            <div className="flex flex-col items-center justify-center px-2 sm:px-6 lg:px-0">
                <div className="bg-white py-4 px-6 mt-4 rounded-lg w-full max-w-xl sm:max-w-md lg:max-w-md h-auto">


                    <h1 className="text-2xl font-semibold text-[#1E1E1E] mb-2 mt-10 text-center">
                        Almost there!
                    </h1>

                    <p className="text-md text-[#333] mb-6 text-center">
                        We've sent a verification link to <span className="font-semibold">{email}</span>. Please check your inbox (and maybe the spam folder, just in case) and click on the link to verify your email.
                    </p>

                    <button onClick={() => navigate("/login")} type="submit" className="bg-[#079263] text-white p-2 rounded-lg w-full h-[38px] text-sm font-normal mt-4 mb-10">
                        {isLoading ? <div className="loader"></div> : "Go to Login"}
                    </button>

                </div>
            </div>
        </div>
    );
}

export default VerifyEmail;
