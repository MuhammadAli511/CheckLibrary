import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import lock from "../../assets/lock.svg";
import { LogoNavbar } from "../../components";
import { SendPasswordResetEmail } from "../../helper";
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorToast from "../../components/ErrorToast";
import SuccessToast from "../../components/SuccessToast";
import '../../toastCustomStyles.css';

const ForgotPassword = () => {

    const [formData, setFormData] = useState({
        workEmail: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const { workEmail } = formData;
    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await SendPasswordResetEmail(workEmail);
            if (!response) {
                toast(<ErrorToast message="Can not reach Server" />);
            }
            if (response.status === 200) {
                navigate("/check-your-mail");
            }
            else {
                toast(<ErrorToast message={response.message} />);
            }
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="bg-[#F7F7F7] min-h-screen">
            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar
                closeOnClick={true}
                pauseOnHover={true}
                draggable={false}
                theme="colored"
            />
            <LogoNavbar />
            <div className="flex flex-col items-center justify-center px-2 sm:px-6 lg:px-0">
                <div className="bg-white py-4 px-6 mt-4 rounded-lg w-full max-w-xl sm:max-w-md lg:max-w-lg h-auto">
                    <img
                        src={lock}
                        alt="lock"
                        className="w-42 h-42 mx-auto pt-14"
                    />
                    <h1 className="text-2xl font-semibold text-[#1E1E1E] mb-4 mt-10 text-center">Recover Your Password</h1>
                    <div className="flex flex-row items-center justify-center my-12">
                        <p className="text-sm font-normal text-[#1E1E1E] text-center px-5">Enter Your Email And We&#39;ll Send You Instructions To Reset Your Password</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                        <input
                            type="email"
                            id="workEmail"
                            name="workEmail"
                            value={workEmail}
                            onChange={onChange}
                            className="input-placeholder border border-[#C5C5C5] p-2 rounded-lg w-full h-[38px] text-sm font-normal mb-4"
                            placeholder="Email"
                            required
                        />


                        <button type="submit" className="bg-[#6259CE] text-white p-2 rounded-lg w-full h-[38px] text-sm font-normal mt-10">
                            {isLoading ? <div className="loader"></div> : "Send Reset Password"}</button>
                    </form>

                    <div className="flex flex-row items-center justify-center my-5">
                        <p className="text-sm font-normal text-[#1E1E1E]">Go back to <Link to="/login" className="text-[#6259CE]">Login</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;