import { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogo } from "../../assets";
import { LogoNavbar } from "../../components";
import { useDispatch } from 'react-redux';
import { login } from "../../helper";
import { fetchEmployeeDetails, googleSignUp, signup } from "../../helper";


const Login = () => {

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

    const googleSuccess = async (res) => {
        const token = res?.credential;
        const defaultTimeZoneCode = Intl.DateTimeFormat().resolvedOptions().timeZone;
        try {
            dispatch({ type: "AUTH", data: { token } });
            const decodedToken = await jwt_decode(token);
            const response = await googleSignUp(decodedToken.given_name, decodedToken.family_name, decodedToken.email, defaultTimeZoneCode);
            if (!response) {
                alert("Can not reach Server");
            }
            if (response.status === 200) {
                const {employee} = await fetchEmployeeDetails(decodedToken.email);
                dispatch({
                    type: "AUTH",
                    data: {
                        token,
                        employee
                    }
                });
                navigate("/dashboard");
            }
            else {
                alert(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const googleFailure = (error) => {
        console.log(error)
        console.log("Google Sign in was uncessucefull. Try Again Later.")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await login(workEmail, password);
            if (!response) {
                alert("Can not reach Server");
            }
            if (response.status === 200) {
                localStorage.setItem('token', response.token);
                navigate("/dashboard");
            }
            else {
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
                <div className="bg-white py-4 px-6 mt-4 rounded-lg w-full max-w-xl sm:max-w-md lg:max-w-md h-auto">
                    <h1 className="text-2xl font-semibold text-[#1E1E1E] mb-4 mt-10 text-center">Login To Your account</h1>
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
                        <button type="submit" className="bg-[#079263] text-white p-2 rounded-lg w-full h-[38px] text-sm font-normal mt-10">
                            {isLoading ? <div className="loader"></div> : "Login"}</button>
                    </form>
                    <div className="flex flex-row items-center justify-center mt-4">
                        <Link to="/forgot-password" className="text-sm font-normal text-[#1E1E1E]">Forgot your password?</Link>
                    </div>
                    <div className="flex flex-row items-center justify-center my-12">
                        <p className="text-sm font-normal text-[#1E1E1E]">Don&#39;t have a CheckLibrary account yet? <Link to="/" className="text-[#079263]">Sign up</Link></p>
                    </div>

                    <div className="flex flex-row items-center justify-center mt-4">
                        <div className="w-[100px] md:w-[140px] h-[1px] bg-[#C5C5C5]"></div>
                        <p className="text-sm font-normal text-[#1E1E1E] mx-4">Or Login with</p>
                        <div className="w-[100px] md:w-[140px] h-[1px] bg-[#C5C5C5]"></div>
                    </div>

                    <div className="flex flex-row items-center justify-center mt-4">
                    <GoogleLogin
                            render={(renderProps) => (
                                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    <img src={GoogleLogo} alt="Google Icon" className="w-5 h-5 mr-2" />
                                    Sign Up With Google
                                </button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;