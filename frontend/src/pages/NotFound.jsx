import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeProvider";
import { CheckLibraryLogo, notfound } from "../assets";

const NotFound = () => {
    const themeColors = useContext(ThemeContext);

    return (
        <div className="flex flex-col h-screen" style={{ backgroundColor: themeColors.background }}>
            <div className="flex h-full p-5">
                <img className="h-8 w-auto sm:h-10 sm:w-auto md:h-12 md:w-auto" src={CheckLibraryLogo} alt="Logo" />

                <div className="flex items-center w-full space-x-60">
                    <div className="relative">
                        <img className="h-[470px] w-[570px]" src={notfound} alt="Not Found" />
                        <span className="absolute -bottom-[90px] left-1/2 transform -translate-x-1/2 text-[180px] font-bold text-[#079263]">404</span>
                    </div>

                    <div>
                        <h1 className="text-[44px] font-bold text-gray-800">We can't seem to find that</h1>
                        <h1 className="text-[24px] font-[600] text-gray-800">The page you're looking for doesn't exist or has been moved.</h1>
                        <Link to="/dashboard">
                            <div className="text-white w-[35%] flex items-center justify-center text-[16px] px-8 py-3 rounded-[10px] mt-8 font-semibold" style={{ backgroundColor: themeColors.primary }}>
                                Back to Dashboard
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;