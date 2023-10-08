import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LogoNavbar } from "../../components";
import ErrorToast from "../../components/ErrorToast";
import SuccessToast from "../../components/SuccessToast";
import { verifyUserEmail } from "../../helper";
import '../../toastCustomStyles.css';

const VerifyEmailClicked = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isVerified, setIsVerified] = useState(null);
    const navigate = useNavigate();
    const { userId, emailToken } = useParams();

    useEffect(() => {
        const checkVerification = async () => {
            try {
                const response = await verifyUserEmail(userId, emailToken);
                if (response.status === 200) {
                    setIsVerified(true);
                } else {
                    setIsVerified(false);
                    toast(<ErrorToast message="Verification failed!" />);
                }
            } catch (error) {
                toast(<ErrorToast message="Can not reach Server" />);
            } finally {
                setIsLoading(false);
            }
        };
        checkVerification();
    }, [userId, emailToken]);

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
                    {isVerified === null ? (
                        <h1 className="text-2xl font-semibold text-[#1E1E1E] mb-2 mt-10 text-center">
                            Please wait...
                        </h1>
                    ) : isVerified ? (
                        <>
                            <h1 className="text-2xl font-semibold text-[#1E1E1E] mb-2 mt-10 text-center">
                                Verification Successful!
                            </h1>
                            <p className="text-md text-[#333] mb-6 text-center">
                                You can now login to your account.
                            </p>
                            <button onClick={() => navigate("/login")} type="submit" className="bg-[#079263] text-white p-2 rounded-lg w-full h-[38px] text-sm font-normal mt-4 mb-10">
                                {isLoading ? <div className="loader"></div> : "Go to Login"}
                            </button>
                        </>
                    ) : (
                        <h1 className="text-2xl font-semibold text-[#1E1E1E] mb-2 mt-10 text-center">
                            Verification Failed!
                        </h1>
                    )}
                </div>

            </div>
        </div>
    );
}

export default VerifyEmailClicked;
