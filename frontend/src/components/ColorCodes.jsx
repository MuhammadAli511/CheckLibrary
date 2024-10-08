import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateSingleColor } from "../helper";
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../toastCustomStyles.css';
import ErrorToast from "./ErrorToast";
import SuccessToast from "./SuccessToast";



function ColorPicker({ color, setColor, label, theme }) {
    const dispatch = useDispatch();
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
    const handleColorBlur = async (e) => {
        setColor(e.target.value);
        let property;
        if (label === "Corner Radius") {
            property = "cornerRadius";
        } else {
            property = label.toLowerCase().replace(/\s/g, '');
        }
        const response = await updateSingleColor(property, e.target.value, theme);
        if (response.status === 200) {
            toast(<SuccessToast message={response.message} />);
            const workspace = response.workspace;
            dispatch({
                type: "UPDATE_WORKSPACE",
                payload: workspace
            });
        } else {
            toast(<ErrorToast message={response.message} />);
        }
    }
    return (
        <div className="relative border bg-background-light py-3 pl-6 pr-6 rounded-lg mt-3 flex justify-between items-center">
            <p>{label}</p>
            <div className="relative h-8 w-8">
                <div 
                    className="absolute inset-0 h-full w-full rounded-md bg-cover bg-center border border-[#DCDCDC]"
                    style={{ backgroundColor: color }}
                ></div>
                <input 
                    type="color" 
                    value={color}
                    onChange={handleColorChange}
                    onBlur={handleColorBlur}
                    className="opacity-0 absolute inset-0 h-full w-full rounded cursor-pointer"
                />
            </div>
        </div>
    );
}



function ColorCodes() {
    const workspace = useSelector(state => state.auth.authData?.workspace);

    // Light Theme Colors
    const [lightPrimary, setLightprimary] = useState(workspace.lightColorScheme.primary);
    const [lightText, setLightText] = useState(workspace.lightColorScheme.text);
    const [lightBackground, setLightBackground] = useState(workspace.lightColorScheme.background);
    const [lightBackground2, setLightBackground2] = useState(workspace.lightColorScheme.background2);
    const [lightCornerRadius, setLightCornerRadius] = useState(workspace.lightColorScheme.cornerRadius);
    const [lightWarning, setLightWarning] = useState(workspace.lightColorScheme.warning);
    const [lightStatus, setLightStatus] = useState(workspace.lightColorScheme.status);
    const [lightStatus1, setLightStatus1] = useState(workspace.lightColorScheme.status1);
    const [lightStatus2, setLightStatus2] = useState(workspace.lightColorScheme.status2);
    const [lightStatus3, setLightStatus3] = useState(workspace.lightColorScheme.status3);

    // Dark Theme Colors
    const [darkPrimary, setDarkPrimary] = useState(workspace.darkColorScheme.primary);
    const [darkText, setDarkText] = useState(workspace.darkColorScheme.text);
    const [darkBackground, setDarkBackground] = useState(workspace.darkColorScheme.background);
    const [darkBackground2, setDarkBackground2] = useState(workspace.darkColorScheme.background2);
    const [darkCornerRadius, setDarkCornerRadius] = useState(workspace.darkColorScheme.cornerRadius);
    const [darkWarning, setDarkWarning] = useState(workspace.darkColorScheme.warning);
    const [darkStatus, setDarkStatus] = useState(workspace.darkColorScheme.status);
    const [darkStatus1, setDarkStatus1] = useState(workspace.darkColorScheme.status1);
    const [darkStatus2, setDarkStatus2] = useState(workspace.darkColorScheme.status2);
    const [darkStatus3, setDarkStatus3] = useState(workspace.darkColorScheme.status3);

    const lightColorsPrimary = [
        { label: 'Primary', color: lightPrimary, setColor: setLightprimary, theme: 'light' },
        { label: 'Text', color: lightText, setColor: setLightText, theme: 'light' },
        { label: 'Background', color: lightBackground, setColor: setLightBackground, theme: 'light' },
        { label: 'Background 2', color: lightBackground2, setColor: setLightBackground2, theme: 'light' },
        { label: 'Corner Radius', color: lightCornerRadius, setColor: setLightCornerRadius, theme: 'light' },
        { label: 'Warning', color: lightWarning, setColor: setLightWarning, theme: 'light' },
    ];

    const lightColorsSecondary = [
        { label: 'Status', color: lightStatus, setColor: setLightStatus, theme: 'light' },
        { label: 'Status 1', color: lightStatus1, setColor: setLightStatus1, theme: 'light' },
        { label: 'Status 2', color: lightStatus2, setColor: setLightStatus2, theme: 'light' },
        { label: 'Status 3', color: lightStatus3, setColor: setLightStatus3, theme: 'light' },
    ]

    const darkColorsPrimary = [
        { label: 'Primary', color: darkPrimary, setColor: setDarkPrimary, theme: 'dark' },
        { label: 'Text', color: darkText, setColor: setDarkText, theme: 'dark' },
        { label: 'Background', color: darkBackground, setColor: setDarkBackground, theme: 'dark' },
        { label: 'Background 2', color: darkBackground2, setColor: setDarkBackground2, theme: 'dark' },
        { label: 'Corner Radius', color: darkCornerRadius, setColor: setDarkCornerRadius, theme: 'dark' },
        { label: 'Warning', color: darkWarning, setColor: setDarkWarning, theme: 'dark' },
    ];

    const darkColorsSecondary = [    
        { label: 'Status', color: darkStatus, setColor: setDarkStatus, theme: 'dark' },
        { label: 'Status 1', color: darkStatus1, setColor: setDarkStatus1, theme: 'dark' },
        { label: 'Status 2', color: darkStatus2, setColor: setDarkStatus2, theme: 'dark' },
        { label: 'Status 3', color: darkStatus3, setColor: setDarkStatus3, theme: 'dark' },
    ]


    return (
        <div className="mt-4">
            <ToastContainer 
                position="top-right"
                autoClose={2000}
                hideProgressBar
                closeOnClick={true}
                pauseOnHover={true}
                draggable={false}
                theme="colored"
            />
            <div className="border bg-background-light pt-6 pl-6 pr-6 pb-2 rounded-lg">
                <div className="mb-6">
                    <span className="font-medium text-xl">Color Codes</span>
                    <div className="grid grid-cols-2 flex-1 space-x-5 mt-4">
                        <div>
                            <span className="font-normal">Primary Light Theme Colors</span>
                            {lightColorsPrimary.map((item) => (
                                <ColorPicker
                                    key={item.label}
                                    label={item.label}
                                    color={item.color}
                                    setColor={item.setColor}
                                    theme={item.theme}
                                />
                            ))}
                            <div className="mt-4"></div>
                            <span className="font-normal">Secondary Light Theme Colors</span>
                            {lightColorsSecondary.map((item) => (
                                <ColorPicker
                                    key={item.label}
                                    label={item.label}
                                    color={item.color}
                                    setColor={item.setColor}
                                    theme={item.theme}
                                />
                            ))}
                        </div>
                        <div>
                            <span className="font-normal">Primary Dark Theme Colors</span>
                            {darkColorsPrimary.map((item) => (
                                <ColorPicker
                                    key={item.label}
                                    label={item.label}
                                    color={item.color}
                                    setColor={item.setColor}
                                    theme={item.theme}
                                />
                            ))}
                            <div className="mt-4"></div>
                            <span className="font-normal">Secondary Dark Theme Colors</span>
                            {darkColorsSecondary.map((item) => (
                                <ColorPicker
                                    key={item.label}
                                    label={item.label}
                                    color={item.color}
                                    setColor={item.setColor}
                                    theme={item.theme}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorCodes;
