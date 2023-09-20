import jwt_decode from "jwt-decode";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { LogoNavbar } from "../../components";
import { } from "../../helper";
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorToast from "../../components/ErrorToast";
import SuccessToast from "../../components/SuccessToast";
import '../../toastCustomStyles.css';

const VerifyEmail = () => {

    const [formData, setFormData] = useState({
        workEmail: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const { workEmail, password } = formData;
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

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
                    <h1 className="text-2xl font-semibold text-[#1E1E1E] mb-4 mt-10 text-center">Verify your Email</h1>
                    <form className="flex flex-col items-center justify-center">
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
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            className="input-placeholder border border-[#C5C5C5] p-2 rounded-lg w-full h-[38px] text-sm font-normal mb-4"
                            placeholder="Password"
                            required
                        />

                        <div className="flex flex-row items-center justify-start w-full ml-2">
                            <input
                                type="checkbox"
                                id="termsAndConditions"
                                name="termsAndConditions"
                                className="mb-4"
                            />
                            <label htmlFor="termsAndConditions" className="text-sm font-normal text-[#1E1E1E] mb-4 ml-2">Remember Me</label>
                        </div>
                        <button type="submit" className="bg-[#079263] text-white p-2 rounded-lg w-full h-[38px] text-sm font-normal mt-10 mb-10">
                            {isLoading ? <div className="loader"></div> : "Login"}</button>
                    </form>
                    
                </div>
            </div>
        </div>
    );
}

export default VerifyEmail;