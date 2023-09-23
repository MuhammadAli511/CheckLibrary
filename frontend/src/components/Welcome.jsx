import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from "../ThemeProvider";
import PlayCircleIcon from '../assets/play-circle.svg';

function Welcome() {
    const navigate = useNavigate();
    const workspace = useSelector(state => state.auth.authData?.workspace);
    const handleButtonClick = () => {
        navigate('/onboarding');
    };
    const themeColors = useContext(ThemeContext);

    return (
        <div className="flex items-center justify-between mt-10 mb-4" style={{ background: themeColors.background }}>
            <div>
                <h2 className="text-2xl font-semibold mb-4 font-poppins" style={{ color: themeColors.text }}>Welcome back, {workspace?.firstName} 👋</h2>
                <p style={{ color: themeColors.text }}>Watch our demo video to learn more about Checklibrary</p>
            </div>
            <button onClick={handleButtonClick} className="flex items-center bg-primary-light text-white py-2 px-4 rounded-md">
                <img src={PlayCircleIcon} alt="Play Circle Icon" className="mr-2 h-8 w-7" />
                Watch Demo
            </button>
        </div>
    );
}

export default Welcome;
