import React, { useState } from "react";
import styles from './css/ProjectDates.module.css';


function ProjectDates() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    
    return (
        <div className="border bg-background-light pt-6 pl-6 pr-6 pb-[30px] rounded-lg h-[200px]">
            <p className="text-lg text-black">Project Date</p>
            <div className="flex space-x-4 mt-4 relative">
                <div className="relative w-full">
                    <input type="date" required id="startDate" name="startDate" value={startDate}
                        onChange={e => setStartDate(e.target.value)} className={`${styles.dateInput} border border-[#DCDCDC] p-3 rounded-lg w-full`} />
                    {!startDate && <label htmlFor="startDate" className="absolute left-3 text-gray-500 pointer-events-none">Start Date</label>}
                </div>
                <div className="relative w-full">
                    <input type="date" required id="endDate" name="endDate" value={endDate}
                        onChange={e => setEndDate(e.target.value)} className={`${styles.dateInput} border border-[#DCDCDC] p-3 rounded-lg w-full`} />
                    {!endDate && <label htmlFor="endDate" className="absolute left-3 text-gray-500 pointer-events-none">End Date</label>}
                </div>
            </div>
        </div>
    );
}

export default ProjectDates;

