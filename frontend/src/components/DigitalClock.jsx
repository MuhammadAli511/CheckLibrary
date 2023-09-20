import React, { useContext, useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { ThemeContext } from "../ThemeProvider";
import DayBackground from '../assets/Day.svg';
import Moon from '../assets/Moon.svg';
import NightBackground from '../assets/Night.svg';
import Sun from '../assets/Sun.svg';

// Configuration for rectangles
const CLOCKS = [
    { location: 'Los Angeles', timezone: 'America/Los_Angeles' },
    { location: 'Denver', timezone: 'America/Denver' },
    { location: 'Chicago', timezone: 'America/Chicago' },
    { location: 'New York', timezone: 'America/New_York' },
    { location: 'London', timezone: 'Europe/London' },
    { location: 'Berlin', timezone: 'Europe/Berlin' },
    { location: 'Dubai', timezone: 'Asia/Dubai' },
    { location: 'Sydney', timezone: 'Australia/Sydney' },
];

function getTimeFormatBool(timeFormat) {
    switch(timeFormat) {
        case '12 Hours':
            return true;
        case '24 Hours':
            return false;
        default:
            return true;
    }
}

function getTimeForTimeZone(timezone, dateFormat, timeFormat) {
    const now = new Date();

    let dateOptions = {};
    switch(dateFormat) {
        case 'YYYY-MM-DD':
            dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
            break;
        case 'DD-MM-YYYY':
            dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
            break;
        case 'MM-DD-YYYY':
            dateOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
            break;
        case 'DD/MM/YYYY':
            dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
            break;
        default:
            dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    }

    const optionsTime = {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: getTimeFormatBool(timeFormat),
    };

    const optionsDate = {
        timeZone: timezone,
        ...dateOptions
    };

    const optionsHour = {
        timeZone: timezone,
        hour: '2-digit',
        hour12: getTimeFormatBool(timeFormat),
    };

    const timeString = new Intl.DateTimeFormat('en-US', optionsTime).format(now);
    const dateString = new Intl.DateTimeFormat('en-US', optionsDate).format(now);
    const hourString = new Intl.DateTimeFormat('en-US', optionsHour).format(now);

    return { time: timeString, date: dateString, hour: parseInt(hourString, 10) };
}



function DigitalClock() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const themeColors = useContext(ThemeContext);
    const userDetails = useSelector(state => state.auth.authData?.user);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="mt-4">
            <div className="border pt-6 pl-6 pr-6 pb-2 rounded-lg" style={{ color: themeColors.text, backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius }}>
                <div className="flex justify-between items-center mb-6">
                    <span className="font-medium text-xl">Digital Clock</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {CLOCKS.map((clock, index) => {
                        const { time, date, hour } = getTimeForTimeZone(clock.timezone, userDetails.dateFormat, userDetails.timeFormat);
                        const isDay = hour < 18 && hour > 6;

                        return (
                            <div
                                key={index}
                                className={`p-2 sm:p-4 border relative flex flex-col items-center justify-between bg-white w-full h-24 sm:h-28 md:h-32 lg:h-34 rounded-md mb-4 overflow-hidden`}
                                style={{ backgroundImage: `url(${isDay ? DayBackground : NightBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                                <img src={isDay ? Sun : Moon} alt="time of day" className="h-4 sm:h-5 w-4 sm:w-5 mb-2" />
                                <span className="text-black text-sm sm:text-xs font-normal font-poppins">{clock.location}</span>
                                <span className="text-black text-md lg:text-md md:text-md sm:text-sm font-bold mt-1 font-poppins">{time}</span>
                                <span className="text-[#9B9B9B] text-sm sm:text-xs mt-2">{date}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default DigitalClock;