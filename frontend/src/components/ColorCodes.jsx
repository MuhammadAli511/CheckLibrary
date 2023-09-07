import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from "../ThemeProvider";
import { updateSingleColor } from "../helper";


function ColorPicker({ color, setColor, label, theme }) {
    const dispatch = useDispatch();
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
    const handleColorBlur = async (e) => {
        setColor(e.target.value);
        var property;
        if (label === "Corner Radius") {
            property = "cornerRadius";
        } else {
            property = label.toLowerCase().replace(/\s/g, '');
        }
        const response = await updateSingleColor(property, e.target.value, theme);
        if (response.status === 200) {
            const employee = response.employee;
            dispatch({
                type: "UPDATE_PROFILE",
                payload: employee
            });
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
    const employeeDetails = useSelector(state => state.auth.authData?.employee);

    // Light Theme Colors
    const [lightPrimary, setLightprimary] = useState(employeeDetails.lightColorScheme.primary);
    const [lightText, setLightText] = useState(employeeDetails.lightColorScheme.text);
    const [lightBackground, setLightBackground] = useState(employeeDetails.lightColorScheme.background);
    const [lightBackground2, setLightBackground2] = useState(employeeDetails.lightColorScheme.background2);
    const [lightCornerRadius, setLightCornerRadius] = useState(employeeDetails.lightColorScheme.cornerRadius);
    const [lightWarning, setLightWarning] = useState(employeeDetails.lightColorScheme.warning);
    const [lightStatus, setLightStatus] = useState(employeeDetails.lightColorScheme.status);
    const [lightStatus1, setLightStatus1] = useState(employeeDetails.lightColorScheme.status1);
    const [lightStatus2, setLightStatus2] = useState(employeeDetails.lightColorScheme.status2);
    const [lightStatus3, setLightStatus3] = useState(employeeDetails.lightColorScheme.status3);

    // Dark Theme Colors
    const [darkPrimary, setDarkPrimary] = useState(employeeDetails.darkColorScheme.primary);
    const [darkText, setDarkText] = useState(employeeDetails.darkColorScheme.text);
    const [darkBackground, setDarkBackground] = useState(employeeDetails.darkColorScheme.background);
    const [darkBackground2, setDarkBackground2] = useState(employeeDetails.darkColorScheme.background2);
    const [darkCornerRadius, setDarkCornerRadius] = useState(employeeDetails.darkColorScheme.cornerRadius);
    const [darkWarning, setDarkWarning] = useState(employeeDetails.darkColorScheme.warning);
    const [darkStatus, setDarkStatus] = useState(employeeDetails.darkColorScheme.status);
    const [darkStatus1, setDarkStatus1] = useState(employeeDetails.darkColorScheme.status1);
    const [darkStatus2, setDarkStatus2] = useState(employeeDetails.darkColorScheme.status2);
    const [darkStatus3, setDarkStatus3] = useState(employeeDetails.darkColorScheme.status3);

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
