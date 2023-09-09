import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSettingTabAction } from "../redux/actions";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SettingTabs() {
    const dispatch = useDispatch();
    const employee = useSelector(state => state.auth.authData?.employee);

    let initialTabs = [
        { name: 'My Account', current: true },
        { name: 'Profile', current: false },
        { name: 'Security', current: false },
        { name: 'Billing', current: false },
        { name: 'Team Members', current: false },
        { name: 'Date & Time', current: false },
        { name: 'Notifications', current: false },
        { name: 'Custom Fields', current: false },
        { name: 'Branding', current: false },
        { name: 'Nav Sidebar', current: false },
        { name: 'Tracking Pixel', current: false },
    ];

    if (employee?.accountType === 'google') {
        initialTabs = initialTabs.filter(tab => tab.name !== 'Security');
    }

    const [tabs, setTabs] = useState(initialTabs);

    const handleTabClick = (tabName) => {
        const updatedTabs = tabs.map(tab => ({
            ...tab,
            current: tab.name === tabName
        }));

        setTabs(updatedTabs);
        dispatch(setSettingTabAction(tabName));
    };

    return (
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
                                    'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium cursor-pointer'
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleTabClick(tab.name);
                                }}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}