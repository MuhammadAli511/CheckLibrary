import React, { useContext, useState } from 'react';
import { ThemeContext } from "../ThemeProvider";

const initialprojects = [
    { name: "CheckLibrary", status:"In Progress", startDate: "Oct 20, 2023", dueDate: "Oct 22, 2023", priority: "High" },
    { name: "CheckLibrary", status:"In Progress", startDate: "Oct 20, 2023", dueDate: "Oct 22, 2023", priority: "Medium" },
    { name: "CheckLibrary", status:"In Progress", startDate: "Oct 20, 2023", dueDate: "Oct 22, 2023", priority: "Low" },
    { name: "CheckLibrary", status:"In Progress", startDate: "Oct 20, 2023", dueDate: "Oct 22, 2023", priority: "High" },
];

function ListViewComponent() {
    const [projects, setprojects] = useState(initialprojects);

    const toggleCheckbox = (index) => {
        const newprojects = [...projects];
        newprojects[index].isChecked = !newprojects[index].isChecked;
        setprojects(newprojects);
    }

    const themeColors = useContext(ThemeContext);

    return (
        <table className="w-full text-left border-collapse">
            <thead>
                <tr>
                    <th className="text-[#9B9B9B] border-t border-b border-[#DCDCDC] pt-2 pb-2 pl-3 font-normal">Project Name</th>
                    <th className="text-[#9B9B9B] border-t border-b border-r border-l border-[#DCDCDC] pt-2 pb-2 pl-6 font-normal">Status</th>
                    <th className="text-[#9B9B9B] border-t border-b border-r border-l border-[#DCDCDC] pt-2 pb-2 pl-6 font-normal">Start Date</th>
                    <th className="text-[#9B9B9B] border-t border-b border-r border-l border-[#DCDCDC] pt-2 pb-2 pl-6 font-normal">Due Date</th>
                    <th className="text-[#9B9B9B] border-t border-b border-[#DCDCDC] pt-2 pb-2 pl-6 font-normal">Priority</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project, index) => (
                    <tr key={index}>
                        <td className="border-t border-b border-r border-[#DCDCDC] p-3">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    {project.name}
                                </div>
                            </div>
                        </td>
                        <td className="text-center border-b border-t border-r border-l border-[#DCDCDC] p-3">
                            <span className="text-[#079263] bg-[#1AD598] bg-opacity-5 rounded-md px-2 py-1" style={{ color: themeColors.text }}>
                                {project.status}
                            </span>
                        </td>
                        <td className="border-b border-r border-[#DCDCDC] p-3" style={{ color: themeColors.text }}>
                            {project.startDate}
                        </td>
                        <td className="border-b border-r border-[#DCDCDC] p-3" style={{ color: themeColors.text }}>
                            {project.dueDate}
                        </td>
                        <td className="flex justify-center items-center border-b border-[#DCDCDC] p-3">
                            <span className={`text-white rounded-md px-2 py-1 text-xs ${project.priority === 'High' ? 'bg-red-500' : project.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'}`}>
                                {project.priority}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListViewComponent;
