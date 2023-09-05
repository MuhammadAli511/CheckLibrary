import React, { useContext, useState } from 'react';
import { ThemeContext } from "../ThemeProvider";
import { product } from "../assets";
import TickIcon from '../assets/tick.svg';

const initialTasks = [
    { isChecked: false, name: "High Converting Ad Copy", type: "asd", markets: "4", status: "Active", salesChannel: "4", vendor: "EcomHigh" },
    { isChecked: false, name: "High Converting Thumbnail", type: "asd", markets: "3", status: "Active", salesChannel: "3", vendor: "EcomHigh" },
    { isChecked: false, name: "Social Media Management", type: "asd", markets: "2", status: "Active", salesChannel: "2", vendor: "EcomHigh" },
];

function AllProductsComponent() {
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
                    <th className="text-[#9B9B9B] border-t border-b border-[#DCDCDC] pt-2 pb-2 pl-6 font-normal">Product Name</th>
                    <th className="text-[#9B9B9B] border-t border-b border-r border-l border-[#DCDCDC] pt-2 pb-2 pl-6 font-normal">Status</th>
                    <th className="text-[#9B9B9B] border-t border-b border-r border-l border-[#DCDCDC] pt-2 pb-2 pl-6 font-normal">Sales Channel</th>
                    <th className="text-[#9B9B9B] border-t border-b border-r border-l border-[#DCDCDC] pt-2 pb-2 pl-6 font-normal">Markets</th>
                    <th className="text-[#9B9B9B] border-t border-b border-r border-l border-[#DCDCDC] pt-2 pb-2 pl-6 font-normal">Type</th>
                    <th className="text-[#9B9B9B] border-t border-b border-[#DCDCDC] pt-2 pb-2 pl-6 font-normal">Vendor</th>
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
                                    <img src={product} alt="Product" className="w-8 h-8 mr-4" />
                                    <span style={{ color: task.isChecked ? "#9B9B9B" : themeColors.text }}>
                                        {task.name}
                                    </span>
                                </div>
                            </div>
                        </td>
                        <td className="text-center border-b border-r border-[#DCDCDC] p-3 flex flex-row items-center">
                            <span className="bg-[#1AD5980D] bg-opacity-5 rounded-md px-2 py-1" style={{ color: themeColors.primary }}>
                                {task.status}
                            </span>
                            <div className='text-[#9B9B9B] ml-2'>Inventory not tracked</div>
                        </td>
                        <td className="border-b border-r border-[#DCDCDC] p-3" style={{ color: themeColors.text }}>
                            {task.salesChannel}
                        </td>
                        <td className="border-b border-r border-[#DCDCDC] p-3" style={{ color: themeColors.text }}>
                            {task.markets}
                        </td>
                        <td className="border-b border-r border-[#DCDCDC] p-3" style={{ color: themeColors.text }}>
                            {task.type}
                        </td>
                        <td className="border-b border-l border-[#DCDCDC] p-3" style={{ color: themeColors.text }}>
                            {task.vendor}
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    );
}

export default AllProductsComponent;
