import React, { useContext, useState } from 'react';
import { ThemeContext } from "../ThemeProvider";
import MessageIcon from '../assets/MessageIcon.svg';
import TickIcon from '../assets/tick.svg';

const initialTasks = [
    { isChecked: false, name: "Follow up on “Mobile Version", notification: "Design", dueDate: "Today", messageCount: 3, status: "In Progress", assignee: "John Doe" },
    { isChecked: false, name: "Dashboard Components", notification: "Marketing", dueDate: "Today", messageCount: 1, status: "In Progress", assignee: "John Doe" },
    { isChecked: true, name: "Tasks Components", notification: "Marketing", dueDate: "Today", messageCount: 5, status: "In Progress", assignee: "John Doe" },
    { isChecked: true, name: "Project Components", notification: "Marketing", dueDate: "Today", messageCount: 2, status: "In Progress", assignee: "John Doe" },
];

function ListViewComponent() {
    const [tasks, setTasks] = useState(initialTasks);

    const toggleCheckbox = (index) => {
        const newTasks = [...tasks];
        newTasks[index].isChecked = !newTasks[index].isChecked;
        setTasks(newTasks);
    }

    const themeColors = useContext(ThemeContext);

    return (
        <table className="w-full text-left border-collapse">
            <thead>
                <tr>
                    <th className="text-[#9B9B9B] border-t border-b border-[#DCDCDC] pt-2 pb-2 pl-6 font-normal">Task Name</th>
                    <th className="text-[#9B9B9B] border-t border-b border-r border-l border-[#DCDCDC] pt-2 pb-2 pl-6 font-normal">Status</th>
                    <th className="text-[#9B9B9B] border-t border-b border-r border-l border-[#DCDCDC] pt-2 pb-2 pl-6 font-normal">Assignee</th>
                    <th className="text-[#9B9B9B] border-t border-b border-r border-l border-[#DCDCDC] pt-2 pb-2 pl-6 font-normal">Due Date</th>
                    <th className="text-[#9B9B9B] border-t border-b border-[#DCDCDC] pt-2 pb-2 pl-6 font-normal">Project</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <tr key={index}>
                        <td className="border-t border-b border-r border-[#DCDCDC] p-3">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <button
                                        className={`w-5 h-5 border rounded-md mr-4 relative flex items-center justify-center ${task.isChecked ? "bg-primary-light" : "bg-white"}`}
                                        onClick={() => toggleCheckbox(index)}
                                    >
                                        {task.isChecked && <img src={TickIcon} alt="Checked" className="h-3 w-3" />}
                                    </button>
                                    <span style={{ color: task.isChecked ? "#9B9B9B" : themeColors.text }}>
                                        {task.name}
                                    </span>
                                </div>
                                {task.messageCount > 0 && (
                                    <div className="flex items-center ml-4 text-[#9B9B9B]">
                                        <img src={MessageIcon} alt="Message" className="h-4 w-4 mr-1" />
                                        <span>{task.messageCount}</span>
                                    </div>
                                )}
                            </div>
                        </td>
                        <td className="text-center border-b border-t border-r border-l border-[#DCDCDC] p-3">
                            <span className="text-[#079263] bg-[#1AD598] bg-opacity-5 rounded-md px-2 py-1" style={{ color: themeColors.text }}>
                                {task.status}
                            </span>
                        </td>
                        <td className="border-b border-r border-[#DCDCDC] p-3">
                            <div className="flex items-center">
                                <div className="w-5 h-5 bg-gray-300 rounded-full mr-4"></div>
                                <span style={{ color: themeColors.text }}>
                                    {task.assignee}
                                </span>
                            </div>
                        </td>
                        <td className="border-b border-r border-[#DCDCDC] p-3" style={{ color: themeColors.text }}>
                            {task.dueDate}
                        </td>
                        <td className="flex justify-center items-center border-b border-[#DCDCDC] p-3">
                            <span className={`text-white rounded-md px-2 py-1 text-xs ${task.notification === "Design" ? "bg-[#FF9F43]" : "bg-[#1AD598]"}`}>
                                {task.notification}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListViewComponent;
