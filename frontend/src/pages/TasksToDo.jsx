import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeProvider";
import TickIcon from '../assets/tick.svg';

const initialTasks = [
    { isChecked: false, name: "Follow up on “Mobile Version", notification: "Design", dueDate: "Today" },
    { isChecked: false, name: "Dashboard Components", notification: "Marketing", dueDate: "Today" },
    { isChecked: true, name: "Tasks Components", notification: "Marketing", dueDate: "Today" },
    { isChecked: true, name: "Project Components", notification: "Marketing", dueDate: "Today" },
];

function TasksToDo() {
    const [tasks, setTasks] = useState(initialTasks);

    const toggleCheckbox = (index) => {
        const newTasks = [...tasks];
        newTasks[index].isChecked = !newTasks[index].isChecked;
        setTasks(newTasks);
    }

    const themeColors = useContext(ThemeContext);

    return (
        <div className="mt-4">
            <div className="border pt-6 pl-6 pr-6 pb-4 rounded-lg" style={{ color: themeColors.text, backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius }}>
                <div className="flex justify-between items-center mb-6">
                    <span className="font-medium text-xl">Tasks To Do</span>
                </div>

                {tasks.map((task, index) => (
                    <div 
                        key={index} 
                        className={`flex items-center justify-between mb-4 ${index !== 0 ? "border-t border-[#DCDCDC] pt-4" : ""}`}
                    >
                        <div className="flex items-center">
                            <button 
                                className={`w-5 h-5 border rounded-md mr-4 relative flex items-center justify-center ${task.isChecked ? "bg-primary-light" : "bg-white"}`}
                                onClick={() => toggleCheckbox(index)}
                            >
                                {task.isChecked && <img src={TickIcon} alt="Checked" className="h-3 w-3" />}
                            </button>
                            <span className={`${task.isChecked ? "text-[#9B9B9B]" : "text-black font-semibold"}`}>{task.name}</span>
                        </div>
                        <div className="flex items-center">
                            <span className={`mr-4 ${task.notification === "Design" ? "bg-[#FF9F43]" : "bg-[#1AD598]"} text-white rounded-md px-2 py-1 text-xs`}>{task.notification}</span>
                            <span className="text-[#1AD598] text-sm">{task.dueDate}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TasksToDo;
