import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setProjectsTabAction } from "../redux/actions";

// Import the SVG assets
import ArrowDown from '../assets/ArrowDown.svg';
import CreateIcon from '../assets/Create.svg';
import ListViewIcon from '../assets/ListView.svg';
import SearchIcon from '../assets/Search.svg';
import TemplatesIcon from '../assets/Templates.svg';
import ToDoIcon from '../assets/ToDo.svg';
import KanbanIcon from '../assets/kanban.svg';

import ExportIcon from '../assets/Export.svg';
import ImportIcon from '../assets/Import.svg';

const DROPDOWN_OPTIONS = [
    { label: "New Project", icon: ToDoIcon, path: "/newProject" },
    { label: "Import", icon: ImportIcon, path: "/import" },
    { label: "Export", icon: ExportIcon, path: "/export" }
];


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProjectsTabs() {
    const dispatch = useDispatch();

    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Project");
    const navigate = useNavigate();


    const [tabs, setTabs] = useState([
        { name: 'List View', current: true, icon: ToDoIcon },
        { name: 'Board View', current: false, icon: KanbanIcon },
        { name: 'Templates', current: false, icon: TemplatesIcon },
        { name: 'Archived', current: false, icon: KanbanIcon },
    ]);

    const handleTabClick = (tabName) => {
        const updatedTabs = tabs.map(tab => ({
            ...tab,
            current: tab.name === tabName
        }));

        setTabs(updatedTabs);
        dispatch(setProjectsTabAction(tabName));
    };

    return (
        <div className="pb-3 flex justify-between">
            <div>
                <div className="pb-3">
                    <div className="sm:hidden">
                        <label htmlFor="tabs" className="sr-only">
                            Select a tab
                        </label>
                        <select
                            id="tabs"
                            name="tabs"
                            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-[#079263] focus:outline-none focus:ring-[#079263] sm:text-sm"
                            defaultValue={tabs.find((tab) => tab.current).name}
                            onChange={(e) => handleTabClick(e.target.value)}
                        >
                            {tabs.map((tab) => (
                                <option key={tab.name}>{tab.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="hidden sm:block">
                        <div className="border-b border-gray-200">
                            <nav className="-mb-px flex space-x-3" aria-label="Tabs">
                                {tabs.map((tab) => (
                                    <a
                                        key={tab.name}
                                        className={classNames(
                                            tab.current
                                                ? 'border-[#079263] text-[#079263]'
                                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                            'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium cursor-pointer flex items-center space-x-2'
                                        )}
                                        aria-current={tab.current ? 'page' : undefined}
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevents default behavior (like navigating)
                                            handleTabClick(tab.name);
                                        }}
                                    >
                                        <img
                                            src={tab.icon}
                                            alt={tab.name}
                                            className={classNames(
                                                tab.current ? 'text-[#079263]' : 'text-gray-500',
                                                'h-5 w-5 mr-1'
                                            )}
                                            style={tab.current ? { filter: "brightness(0) saturate(100%) invert(2%) sepia(98%) saturate(742%) hue-rotate(135deg) brightness(92%) contrast(91%)" } : {}}
                                        />
                                        {tab.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center">
                <span className="text-[#9B9B9B] mr-4 cursor-pointer">Filter</span>
                <span className="text-[#9B9B9B] mr-4 cursor-pointer">Sort</span>
                <img src={SearchIcon} alt="Search" className="h-5 w-5 mr-4" />
                <button className="flex items-center bg-primary-light px-3 py-2 rounded-l-md rounded-r-none">
                    <img src={CreateIcon} alt="Create" className="h-5 w-5 mr-1" />
                    <span className="text-white mr-1">Create</span>
                </button>
                <div className="relative inline-block text-left">
                    <button
                        className="flex items-center bg-primary-light px-3 py-3 rounded-l-none rounded-r-md border-l border-white"
                        onClick={() => setShowDropdown(prev => !prev)}
                    >
                        <img src={ArrowDown} alt="Arrow Down" className="h-4 w-4" />
                    </button>

                    {showDropdown && (
                        <div className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                            <div className="py-1">
                                {DROPDOWN_OPTIONS.map(({ label, icon, path }) => (
                                    <button
                                        key={label}
                                        onClick={() => {
                                            navigate(path);
                                            setShowDropdown(false);
                                        }}
                                        className="block px-4 py-2 text-sm text-black w-full text-left hover:bg-gray-200 flex items-center space-x-2"
                                    >
                                        <img src={icon} alt={label} className="h-5 w-5" />
                                        <span>{label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}