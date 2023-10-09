import { DateTime } from 'luxon';
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import timezones from 'timezones-list';
import { ThemeContext } from "../ThemeProvider";
import { profile } from "../constants/svgs";
import { updateDateTimeValues } from '../helper';
import '../toastCustomStyles.css';
import ErrorToast from "./ErrorToast";
import SuccessToast from "./SuccessToast";

const roles = [
    { name: 'Admin', value: 'admin' },
    { name: 'Developer', value: 'developer' },
    { name: 'Designer', value: 'designer' },
    { name: 'Tester', value: 'tester' },
    { name: 'Manager', value: 'manager' },
    { name: 'Other', value: 'other' },
];

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;
    const [formData, setFormData] = useState({
        workEmail: "",
        role: roles[0]?.value || ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const { workEmail, role } = formData;


    function saveInviteMemberWorkspace() {
        if (workEmail === "") {
            toast(<ErrorToast message="Email can not be empty" />);
            return;
        }
        if (role === "") {
            toast(<ErrorToast message="Role can not be empty" />);
            return;
        }
        
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full z-50">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 relative z-10 mx-auto mt-20">
                <h2 className="mb-4 font-semibold text-xl">Invite people to CheckLibrary</h2>
                <div className="border-b mb-4 w-full"></div>
                <div>
                    <label className="block mb-2">Email Address:</label>
                    <input
                        type="email"
                        className="border rounded-lg p-2 w-full"
                        placeholder="Email Address"
                        value={workEmail}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, workEmail: e.target.value }))}
                    />

                    <p className="text-sm mt-2 text-[#9B9B9B]">Your teammates will get an email that gives them access to your team.</p>
                </div>
                <div className="mt-4">
                    <label className="block mb-2">Role:</label>
                    <select
                        className="border rounded-lg p-2 w-full"
                        value={role}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, role: e.target.value }))}
                    >
                        {roles.map((role, index) => (
                            <option key={index} value={role.value}>{role.name}</option>
                        ))}
                    </select>


                </div>
                <div className="mt-4 flex justify-end">
                    <button onClick={saveInviteMemberWorkspace} className="bg-[#079263] text-white p-2 rounded-lg px-6 py-2">Save</button>
                </div>
            </div>
        </div>
    );
}


function TeamMembersComponent() {
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const themeColors = useContext(ThemeContext);

    const [membersInvited, setMembersInvited] = useState(0);
    const [pendingInvites, setPendingInvites] = useState(0);
    const [totalTeamMembers, setTotalTeamMembers] = useState(0);

    const teamMembersData = [
        { name: 'John Doe', role: 'Owner', invitedBy: 'John Doe', status: 'Joined', actions: ['Remove'] },
        { name: 'Jane Smith', role: 'Administrator', invitedBy: 'John Doe', status: 'Sent', actions: ['Resend', 'Cancel'] },
        // ... add more members as needed
    ];

    function actionColor(action) {
        switch (action) {
            case 'Remove':
                return "text-yellow-500 border-yellow-500";
            case 'Resend':
                return "text-green-500 border-green-500";
            case 'Cancel':
                return "text-red-500 border-red-500";
            default:
                return "";
        }
    }

    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }





    return (
        <div className="mt-4">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                closeOnClick={true}
                pauseOnHover={true}
                draggable={false}
                theme="colored"
            />

            <div className="border bg-background-light pt-6 pl-6 pr-6 pb-2 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                    <span className="font-medium text-xl">Team Members</span>
                    <button
                        onClick={toggleModal}
                        className="text-sm border rounded-lg px-3 py-2 bg-transparent"
                        style={{ color: themeColors.primary, borderColor: themeColors.primary }}
                    >
                        Invite Member
                    </button>
                </div>
                <div className="flex justify-between mb-6">
                    <div className="flex flex-col items-center justify-center p-6 border rounded-lg" style={{ width: '30%' }}>
                        <span className="text-4xl font-semibold">{membersInvited}</span>
                        <span>Members Invited</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 border rounded-lg" style={{ width: '30%' }}>
                        <span className="text-4xl font-semibold">{pendingInvites}</span>
                        <span>Pending Invites</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 border rounded-lg" style={{ width: '30%' }}>
                        <span className="text-4xl font-semibold">{totalTeamMembers}</span>
                        <span>Total Team Members</span>
                    </div>
                </div>
                <table className="min-w-full border-collapse">
                    <thead className='rounded-[8px]'>
                        <tr className='bg-[#F6F6F6] text-lg'>
                            <th className="px-6 py-3 text-left font-semibold">Name</th>
                            <th className="px-6 py-3 text-left font-semibold">Role</th>
                            <th className="px-6 py-3 text-left font-semibold">Invited By</th>
                            <th className="px-6 py-3 text-left font-semibold">Status</th>
                            <th className="px-6 py-3 text-left font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teamMembersData.map((member, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 border-b">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 mr-3" dangerouslySetInnerHTML={{ __html: profile }}></div>
                                        {member.name}
                                    </div>
                                </td>
                                <td className="px-6 py-4 border-b">{member.role}</td>
                                <td className="px-6 py-4 border-b">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 mr-3" dangerouslySetInnerHTML={{ __html: profile }}></div>
                                        {member.invitedBy}
                                    </div>
                                </td>
                                <td className="px-6 py-4 border-b">{member.status}</td>
                                <td className="px-6 py-4 border-b">
                                    {member.actions.map((action, index) => (
                                        <button
                                            key={index}
                                            className={`text-md font-semibold rounded-lg mr-3 py-2 bg-transparent ${actionColor(action)}`}
                                        >
                                            {action}
                                        </button>
                                    ))}

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </div>

    );
}

export default TeamMembersComponent;
