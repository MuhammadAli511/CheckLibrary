import React, { useContext, useState } from 'react';
import { ThemeContext } from "../ThemeProvider";
import MessageIcon from '../assets/MessageIcon.svg';
import TickIcon from '../assets/tick.svg';

const initialTasks = [
    { isChecked: false, name: "Follow up on “Mobile Version", notification: "Design", dueDate: "Today", messageCount: 3 },
    { isChecked: false, name: "Dashboard Components", notification: "Marketing", dueDate: "Today", messageCount: 1 },
    { isChecked: true, name: "Tasks Components", notification: "Marketing", dueDate: "Today", messageCount: 5 },
    { isChecked: true, name: "Project Components", notification: "Marketing", dueDate: "Today", messageCount: 2 },
];

function ToDoListComponent() {
    const [tasks, setTasks] = useState(initialTasks);

    const toggleCheckbox = (index) => {
        const newTasks = [...tasks];
        newTasks[index].isChecked = !newTasks[index].isChecked;
        setTasks(newTasks);
    }

    const themeColors = useContext(ThemeContext);

    return (
        <div>
            {tasks.map((task, index) => (
                <div 
                    key={index} 
                    className={`flex items-center justify-between p-3 ${index !== 0 ? "border-t border-[#DCDCDC]" : ""} ${index % 2 !== 0 ? "bg-[#F9F9F9]" : "bg-white"}`} style={{ color: themeColors.text, background: themeColors.background }}
                >
                    <div className="flex items-center">
                        <button 
                            className={`w-5 h-5 border rounded-md mr-4 relative flex items-center justify-center ${task.isChecked ? "bg-primary-light" : "bg-white"}`}
                            onClick={() => toggleCheckbox(index)}
                        >
                            {task.isChecked && <img src={TickIcon} alt="Checked" className="h-3 w-3" />}
                        </button>
                        <span style={{color: task.isChecked ? "#9B9B9B" : themeColors.text}}>
                            {task.name}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <span className={`mr-4 ${task.notification === "Design" ? "bg-[#FF9F43]" : "bg-[#1AD598]"} text-white rounded-md px-2 py-1 text-xs`}>{task.notification}</span>
                        <span className="text-[#1AD598] text-sm mr-3">{task.dueDate}</span>
                        {task.messageCount > 0 && (
                            <div className="flex items-center text-[#9B9B9B]">
                                <img src={MessageIcon} alt="Message" className="h-4 w-4 mr-1" />
                                <span>{task.messageCount}</span>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ToDoListComponent;
