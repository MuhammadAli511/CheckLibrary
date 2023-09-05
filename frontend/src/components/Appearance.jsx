import { useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../ThemeProvider';
import DarkThemeIcon from '../assets/darkTheme.svg';
import LightThemeIcon from '../assets/lightTheme.svg';
import TickIcon from '../assets/tick.svg';
import { updateTheme } from '../helper';
import { setThemes as setThemesAction } from '../redux/actions';

function Appearance() {
    const dispatch = useDispatch();
    const employee = useSelector(state => state.auth.authData?.employee);
    const themeColors = useContext(ThemeContext);
    const currentTheme = employee?.selectedTheme || 'light';
    
    const handleThemeChange = async (selectedTheme) => {
        dispatch(setThemesAction(selectedTheme));
        await updateTheme(selectedTheme);
    };

    return (
        <div className="mt-4">
            <div className="border pt-6 pl-6 pr-6 pb-6 rounded-lg" style={{backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius}}>
                <div className="flex justify-between items-center mb-6">
                    <span className="font-medium text-xl" style={{color: themeColors.text}}>Appearance</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className={`flex justify-between items-center rounded-lg cursor-pointer pl-3 pr-3 ${currentTheme === 'light' ? 'border-[#079263] bg-[#07926319]' : 'border-gray-300'}`} onClick={() => handleThemeChange('light')}>
                        <div className="flex items-center space-x-4">
                            <img src={LightThemeIcon} alt="Light Theme" className="h-24 w-24" />
                            <span className='font-semibold' style={{color: themeColors.text}}>Light Theme</span>
                        </div>
                        <div className={`h-5 w-5 rounded-full border flex justify-center items-center ${currentTheme === 'light' ? 'bg-primary-light' : 'bg-transparent'}`}>
                            <img src={TickIcon} alt="Tick" className={`${currentTheme === 'light' ? 'text-white' : 'text-black'}`} />
                        </div>
                    </div>

                    <div className={`flex justify-between items-center rounded-lg cursor-pointer pl-3 pr-3 ${currentTheme === 'dark' ? 'border-[#079263] bg-[#07926319]' : 'border-gray-300'}`} onClick={() => handleThemeChange('dark')}>
                        <div className="flex items-center space-x-4">
                            <img src={DarkThemeIcon} alt="Dark Theme" className="h-24 w-24" />
                            <span className='font-semibold' style={{color: themeColors.text}}>Dark Theme</span>
                        </div>
                        <div className={`h-5 w-5 rounded-full border flex justify-center items-center ${currentTheme === 'dark' ? 'bg-primary-light' : 'bg-transparent'}`}>
                            <img src={TickIcon} alt="Tick" className={`${currentTheme === 'dark' ? 'text-white' : 'text-black'}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appearance;
