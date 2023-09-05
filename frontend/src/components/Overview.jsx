import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeProvider";

// Dropdown options
const DURATION = ["This Week", "This Month", "Last Month", "Last 60 Days"];

// Configuration for rectangles
const RECTANGLES = [
    { number: '122', label: 'Total Projects', backgroundColor: 'bg-[#E4FFEF]', textColor: 'text-[#079263]' },
    { number: '44', label: 'Overdue Projects', backgroundColor: 'bg-[#FFEFE2]', textColor: 'text-[#EC5453]' },
    { number: '8', label: 'Total Tasks', backgroundColor: 'bg-[#E4FFEF]', textColor: 'text-[#079263]' },
    { number: '2', label: 'Overdue Tasks', backgroundColor: 'bg-[#FFEFE2]', textColor: 'text-[#EC5453]' }
];



function Overview() {
    const [selectedOption, setSelectedOption] = useState("This Month");
    const [showDropdown, setShowDropdown] = useState(false);
    const themeColors = useContext(ThemeContext);

    return (
    <div className="mt-4">
        <div className="border pt-6 pl-6 pr-6 pb-2 rounded-lg" style={{ color: themeColors.text, backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius}}>
            <div className="flex justify-between items-center mb-6">
                <span className="font-medium text-xl">Overview</span>
                <div className="relative inline-block text-left">
                    <div>
                        <button
                            className="inline-flex justify-center w-full rounded-md border px-4 py-2 text-sm font-sm focus:outline-none"
                            onClick={() => setShowDropdown(prev => !prev)}
                            aria-haspopup="true"
                            aria-expanded="true"
                        >
                            {selectedOption}
                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    {showDropdown && (
                        <div className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg ring-1 ring-black ring-opacity-5" style={{ backgroundColor: themeColors.background }}>
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                {DURATION.map(option => (
                                    <button
                                        key={option}
                                        onClick={() => {
                                            setSelectedOption(option);
                                            setShowDropdown(false);  // Close dropdown after selection
                                        }}
                                        className="block px-6 py-3 text-sm text-110011  w-full text-left" 
                                        role="menuitem"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex space-x-4 justify-between mx-auto container px-4 md:px-0">
                {RECTANGLES.map((rectangle, index) => (
                    <div key={index} className={`flex flex-col items-center justify-center ${rectangle.backgroundColor} w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 h-32 rounded-lg mb-4`}>
                        <span className={`${rectangle.textColor} text-3xl font-semibold`}>{rectangle.number}</span>
                        <span className="text-black font-medium mt-2">{rectangle.label}</span>
                    </div>
                ))}
            </div>

        </div>
    </div>
    );
}

export default Overview;
