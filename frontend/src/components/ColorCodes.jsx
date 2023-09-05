import React, { useState } from "react";

function ColorPicker({ color, setColor, label }) {
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
                    onChange={(e) => setColor(e.target.value)}
                    className="opacity-0 absolute inset-0 h-full w-full rounded cursor-pointer"
                />
            </div>
        </div>
    );
}



function ColorCodes() {
    // Light Theme Colors
    const [lightPrimary, setLightprimary] = useState("#079263");
    const [lightText, setLightText] = useState("#110011");
    const [lightBackground, setLightBackground] = useState("#FFFFFF");
    const [lightBackground2, setLightBackground2] = useState("#DCDCDC");
    const [lightCornerRadius, setLightCornerRadius] = useState("#2E293E");
    const [lightWarning, setLightWarning] = useState("#EC5453");
    const [lightStatus, setLightStatus] = useState("#DCDCDC");
    const [lightStatus1, setLightStatus1] = useState("#F4B1A9");
    const [lightStatus2, setLightStatus2] = useState("#B7CEFF");
    const [lightStatus3, setLightStatus3] = useState("#B7F8FF");

    // Dark Theme Colors
    const [darkPrimary, setDarkPrimary] = useState("#079263");
    const [darkText, setDarkText] = useState("#FFFFFF");
    const [darkBackground, setDarkBackground] = useState("#261E35");
    const [darkBackground2, setDarkBackground2] = useState("#2E293E");
    const [darkCornerRadius, setDarkCornerRadius] = useState("#403A54");
    const [darkWarning, setDarkWarning] = useState("#EC5453");
    const [darkStatus, setDarkStatus] = useState("#DCDCDC");
    const [darkStatus1, setDarkStatus1] = useState("#F4B1A9");
    const [darkStatus2, setDarkStatus2] = useState("#B7CEFF");
    const [darkStatus3, setDarkStatus3] = useState("#B7F8FF");

    const lightColorsPrimary = [
        { label: 'Primary', color: lightPrimary, setColor: setLightprimary },
        { label: 'Text', color: lightText, setColor: setLightText },
        { label: 'Background', color: lightBackground, setColor: setLightBackground },
        { label: 'Background 2', color: lightBackground2, setColor: setLightBackground2 },
        { label: 'Corner Radius', color: lightCornerRadius, setColor: setLightCornerRadius },
        { label: 'Warning', color: lightWarning, setColor: setLightWarning }
    ];

    const lightColorsSecondary = [
        { label: 'Status', color: lightStatus, setColor: setLightStatus },
        { label: 'Status 1', color: lightStatus1, setColor: setLightStatus1 },
        { label: 'Status 2', color: lightStatus2, setColor: setLightStatus2 },
        { label: 'Status 3', color: lightStatus3, setColor: setLightStatus3 },
    ]

    const darkColorsPrimary = [
        { label: 'Primary', color: darkPrimary, setColor: setDarkPrimary },
        { label: 'Text', color: darkText, setColor: setDarkText },
        { label: 'Background', color: darkBackground, setColor: setDarkBackground },
        { label: 'Background 2', color: darkBackground2, setColor: setDarkBackground2 },
        { label: 'Corner Radius', color: darkCornerRadius, setColor: setDarkCornerRadius },
        { label: 'Warning', color: darkWarning, setColor: setDarkWarning }
    ];

    const darkColorsSecondary = [    
        { label: 'Status', color: darkStatus, setColor: setDarkStatus },
        { label: 'Status 1', color: darkStatus1, setColor: setDarkStatus1 },
        { label: 'Status 2', color: darkStatus2, setColor: setDarkStatus2 },
        { label: 'Status 3', color: darkStatus3, setColor: setDarkStatus3 },
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
