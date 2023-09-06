import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { DateTime } from 'luxon';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import timezones from 'timezones-list';
import { GoogleLogo } from "../../assets";
import { LogoNavbar } from "../../components";
import { fetchEmployeeDetails, googleSignUp, signup } from "../../helper";

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        workEmail: "",
        password: "",
        confirmPassword: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { firstName, lastName, workEmail, password, confirmPassword } = formData;

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
        console.log("Google Sign in was unsuccessfull. Try Again Later.")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        
        try {
            setIsLoading(true);
            const response = await signup(firstName, lastName, workEmail, password);
    
            if (!response) {
                alert("Cannot reach the server");
            }
            // console.log(response,"response")
            if (response.status === 200 ) {
                const { token } = response.token;
    
                localStorage.setItem('token', response.token);
    
                dispatch({ type: "AUTH", data: { token } });
    
                alert("Signup successfull");
         
                navigate("/login");
            } else {
                alert("Signup failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred during signup. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <div className="bg-[#F7F7F7] min-h-screen">
            <LogoNavbar />
            <div className="flex flex-col items-center justify-center px-2 sm:px-6 lg:px-0">
                <div className="bg-white py-4 px-4 mt-4 rounded-lg w-full max-w-xl sm:max-w-md lg:max-w-md h-auto">
                    <h1 className="text-2xl font-semibold text-[#1E1E1E] mb-4 mt-10 text-center">Create an account</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={onChange}
                            className="input-placeholder border border-[#C5C5C5] p-2 rounded-lg w-full h-[38px] text-sm font-normal mb-4"
                            placeholder="First Name"
                            required
                        />
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={onChange}
                            className="input-placeholder border border-[#C5C5C5] p-2 rounded-lg w-full h-[38px] text-sm font-normal mb-4"
                            placeholder="Last Name"
                            required
                        />
                        <input
                            type="email"
                            id="workEmail"
                            name="workEmail"
                            value={workEmail}
                            onChange={onChange}
                            className="input-placeholder border border-[#C5C5C5] p-2 rounded-lg w-full h-[38px] text-sm font-normal mb-4"
                            placeholder="Work Email"
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
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={onChange}
                            className="input-placeholder border border-[#C5C5C5] p-2 rounded-lg w-full h-[38px] text-sm font-normal mb-4"
                            placeholder="Confirm Password"
                            required
                        />
                        <div className="flex flex-row items-center justify-start w-full ml-2">
                            <input
                                type="radio"
                                id="termsAndConditions"
                                name="termsAndConditions"
                                className="mb-4"
                                required
                            />
                            <label htmlFor="termsAndConditions" className="text-sm font-normal text-[#1E1E1E] mb-4 ml-2">I accept <a href="#" className="text-[#6259CE]">Terms and Conditions</a></label>
                        </div>
                        <button type="submit" className="bg-[#6259CE] text-white p-2 rounded-lg w-full h-[38px] text-sm font-normal mt-10">
                            {isLoading ? <div className="loader"></div> : "Create Account"}</button>
                    </form>
                    <div className="flex flex-row items-center justify-center mt-4">
                        <p className="text-sm font-normal text-[#1E1E1E]">Already have an account? <Link to="/login" className="text-[#6259CE]">Login</Link></p>
                    </div>

                    <div className="flex flex-row items-center justify-center mt-4">
                        <div className="w-[100px] md:w-[140px] h-[1px] bg-[#C5C5C5]"></div>
                        <p className="text-sm font-normal text-[#1E1E1E] mx-4">Or sign up with</p>
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
};

export default SignUp;
