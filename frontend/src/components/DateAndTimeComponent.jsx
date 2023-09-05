import { DateTime } from 'luxon';
import { useState } from 'react';
import timezones from 'timezones-list';

function DateAndTimeComponent() {
    const [timeZone, setTimeZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [selectedDays, setSelectedDays] = useState([]);

    const days = [
        { abbreviation: "M", fullName: "Monday" },
        { abbreviation: "T", fullName: "Tuesday" },
        { abbreviation: "W", fullName: "Wednesday" },
        { abbreviation: "T", fullName: "Thursday" },
        { abbreviation: "F", fullName: "Friday" },
        { abbreviation: "S", fullName: "Saturday" },
        { abbreviation: "S", fullName: "Sunday" }
    ];

    const toggleDay = (dayName) => {
        if (selectedDays.includes(dayName)) {
            setSelectedDays(prevDays => prevDays.filter(day => day !== dayName));
        } else {
            setSelectedDays(prevDays => [...prevDays, dayName]);
        }
    };

    return (
        <div className="mt-4">
            <div className="border bg-background-light pt-6 pl-6 pr-6 pb-2 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                    <span className="font-medium text-xl">Date & Time</span>
                </div>
                <div>
                    <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-3">Time Zone</label>
                    <select
                        id="timezone"
                        name="timezone"
                        value={timeZone}
                        onChange={e => setTimeZone(e.target.value)}
                        className="border border-[#DCDCDC] p-3 rounded-lg w-full">
                        {timezones.map(zone => {
                            const now = DateTime.now().setZone(zone.tzCode).toFormat("HH:mm");
                            return <option key={zone.tzCode} value={zone.tzCode}>{zone.label} - {now}</option>;
                        })}
                    </select>
                </div>
                <div className='w-full bg-[#F6F6F6] rounded-[8px] py-1 px-5 text-lg font-semibold mt-8 mb-4'>
                    Date Format
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-5">
                    <div>
                        <label htmlFor="weekStartOn" className="block text-sm font-medium text-gray-700 mb-3">Week Start on</label>
                        <select id="weekStartOn" name="weekStartOn" className="border border-[#DCDCDC] p-3 rounded-lg w-full">
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="dateFormat" className="block text-sm font-medium text-gray-700 mb-3">Date Format</label>
                        <select id="dateFormat" name="dateFormat" className="border border-[#DCDCDC] p-3 rounded-lg w-full">
                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                            <option value="DD-MM-YYYY">DD-MM-YYYY</option>
                            <option value="MM-DD-YYYY">MM-DD-YYYY</option>
                            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="timeFormat" className="block text-sm font-medium text-gray-700 mb-3">Time Format</label>
                        <select id="timeFormat" name="timeFormat" className="border border-[#DCDCDC] p-3 rounded-lg w-full">
                            <option value="12H">12 Hours</option>
                            <option value="24H">24 Hours</option>
                        </select>
                    </div>
                </div>
                <div className='w-full bg-[#F6F6F6] rounded-[8px] py-1 px-5 text-lg font-semibold mt-8 mb-4'>
                    Days Off
                </div>
                <div className='w-[30%] mb-10'>
                    <div className="col-span-3 grid grid-cols-7 gap-[22px]">
                        {days.map(day => (
                            <div
                                key={day.fullName}
                                onClick={() => toggleDay(day.fullName)}
                                className={`flex justify-center items-center border border-[#DCDCDC] rounded-lg h-[50px] w-[50px] cursor-pointer ${selectedDays.includes(day.fullName) ? 'bg-primary-light text-white' : ''}`}
                            >
                                <span>{day.abbreviation}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end mt-6 mb-2">
                    <button className="rounded-lg px-4 py-3 bg-[#F6F6F6] text-[#9B9B9B] mr-3">Cancel</button>
                    <button className="rounded-lg px-5 py-3 bg-primary-light text-white">Save</button>
                </div>
            </div>
        </div>
    );
}

export default DateAndTimeComponent;
