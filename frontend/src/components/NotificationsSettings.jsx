import React, { useState } from 'react';
import TickIcon from '../assets/tick.svg';

function NotificationsSettings() {
    const [duplicateToEmailChecked, setDuplicateToEmailChecked] = useState(false);
    const [hideReadNotificationsChecked, setHideReadNotificationsChecked] = useState(false);
    const [stageUpdatedChecked, setStageUpdatedChecked] = useState(false);
    const [newTaskCreatedChecked, setNewTaskCreatedChecked] = useState(false);
    const [addedAscollaboratorChecked, setAddedAscollaboratorChecked] = useState(false);
    const [addedAsFollowerChecked, setAddedAsFollowerChecked] = useState(false);
    const [assigneeChangedChecked, setAssigneeChangedChecked] = useState(false);
    const [priorityChangedChecked, setPriorityChangedChecked] = useState(false);
    const [newCommentsPostedChecked, setNewCommentsPostedChecked] = useState(false);
    const [newProjectCommentsChecked, setNewProjectCommentsChecked] = useState(false);
    const [projectMilestoneAchievedChecked, setProjectMilestoneAchievedChecked] = useState(false);
    const [projectStageUpdatedChecked, setProjectStageUpdatedChecked] = useState(false);

    const toggleDuplicateToEmailCheckbox = () => {
        setDuplicateToEmailChecked(!duplicateToEmailChecked);
    };

    const toggleHideReadNotificationsCheckbox = () => {
        setHideReadNotificationsChecked(!hideReadNotificationsChecked);
    };

    const toggleStageUpdatedCheckbox = () => {
        setStageUpdatedChecked(!stageUpdatedChecked);
    };

    const toggleNewTaskCreatedCheckbox = () => {
        setNewTaskCreatedChecked(!newTaskCreatedChecked);
    };

    const toggleAddedAscollaboratorCheckbox = () => {
        setAddedAscollaboratorChecked(!addedAscollaboratorChecked);
    };

    const toggleAddedAsFollowerCheckbox = () => {
        setAddedAsFollowerChecked(!addedAsFollowerChecked);
    };

    const toggleAssigneeChangedCheckbox = () => {
        setAssigneeChangedChecked(!assigneeChangedChecked);
    };

    const togglePriorityChangedCheckbox = () => {
        setPriorityChangedChecked(!priorityChangedChecked);
    };

    const toggleNewCommentsPostedCheckbox = () => {
        setNewCommentsPostedChecked(!newCommentsPostedChecked);
    };

    const toggleNewProjectCommentsCheckbox = () => {
        setNewProjectCommentsChecked(!newProjectCommentsChecked);
    };

    const toggleProjectMilestoneAchievedCheckbox = () => {
        setProjectMilestoneAchievedChecked(!projectMilestoneAchievedChecked);
    };

    const toggleProjectStageUpdatedCheckbox = () => {
        setProjectStageUpdatedChecked(!projectStageUpdatedChecked);
    };

    return (
        <div className="mt-4">
            <div className="border bg-background-light pt-6 pl-6 pr-6 pb-2 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <span className="font-medium text-xl">Notification Settings</span>
                </div>
                <div className="grid grid-cols-3">
                    <div className="flex flex-row items-center">
                        {/* Duplicate notifications to email */}
                        <button
                            className={`w-5 h-5 border rounded-md mr-4 relative flex items-center justify-center ${duplicateToEmailChecked ? 'bg-primary-light' : 'bg-white'}`}
                            onClick={toggleDuplicateToEmailCheckbox}
                        >
                            {duplicateToEmailChecked && <img src={TickIcon} alt="Checked" className="h-3 w-3" />}
                        </button>
                        <span className="text-black font-normal text-md">Duplicate notifications to email</span>
                    </div>
                    <div className="flex flex-row items-center">
                        {/* Hide read notifications */}
                        <button
                            className={`w-5 h-5 border rounded-md mr-4 relative flex items-center justify-center ${hideReadNotificationsChecked ? 'bg-primary-light' : 'bg-white'}`}
                            onClick={toggleHideReadNotificationsCheckbox}
                        >
                            {hideReadNotificationsChecked && <img src={TickIcon} alt="Checked" className="h-3 w-3" />}
                        </button>
                        <span className="text-black font-normal text-md">Hide read notifications</span>
                    </div>
                </div>
                <div className='w-full bg-[#F6F6F6] rounded-[8px] py-1 px-5 text-lg font-semibold my-8'>
                    Tasks
                </div>
                <div className="grid grid-cols-3">
                    <div className="flex flex-row items-center">
                        {/* Stage updated */}
                        <button
                            className={`w-5 h-5 border rounded-md mr-4 relative flex items-center justify-center ${stageUpdatedChecked ? 'bg-primary-light' : 'bg-white'}`}
                            onClick={toggleStageUpdatedCheckbox}
                        >
                            {stageUpdatedChecked && <img src={TickIcon} alt="Checked" className="h-3 w-3" />}
                        </button>
                        <span className="text-black font-normal text-md">Stage updated</span>
                    </div>
                    <div className="flex flex-row items-center">
                        {/* New task created */}
                        <button
                            className={`w-5 h-5 border rounded-md mr-4 relative flex items-center justify-center ${newTaskCreatedChecked ? 'bg-primary-light' : 'bg-white'}`}
                            onClick={toggleNewTaskCreatedCheckbox}
                        >
                            {newTaskCreatedChecked && <img src={TickIcon} alt="Checked" className="h-3 w-3" />}
                        </button>
                        <span className="text-black font-normal text-md">New task created</span>
                    </div>
                    <div className="flex flex-row items-center">
                        {/* Added as collaborator */}
                        <button
                            className={`w-5 h-5 border rounded-md mr-4 relative flex items-center justify-center ${addedAscollaboratorChecked ? 'bg-primary-light' : 'bg-white'}`}
                            onClick={toggleAddedAscollaboratorCheckbox}
                        >
                            {addedAscollaboratorChecked && <img src={TickIcon} alt="Checked" className="h-3 w-3" />}
                        </button>
                        <span className="text-black font-normal text-md">You are added as a collaborator</span>
                    </div>
                    <div className="flex flex-row items-center mt-4">
                        {/* Added as follower */}
                        <button
                            className={`w-5 h-5 border rounded-md mr-4 relative flex items-center justify-center ${addedAsFollowerChecked ? 'bg-primary-light' : 'bg-white'}`}
                            onClick={toggleAddedAsFollowerCheckbox}
                        >
                            {addedAsFollowerChecked && <img src={TickIcon} alt="Checked" className="h-3 w-3" />}
                        </button>
                        <span className="text-black font-normal text-md">You are added as a follower</span>
                    </div>
                    <div className="flex flex-row items-center mt-4">
                        {/* Assignee changed */}
                        <button
                            className={`w-5 h-5 border rounded-md mr-4 relative flex items-center justify-center ${assigneeChangedChecked ? 'bg-primary-light' : 'bg-white'}`}
                            onClick={toggleAssigneeChangedCheckbox}
                        >
                            {assigneeChangedChecked && <img src={TickIcon} alt="Checked" className="h-3 w-3" />}
                        </button>
                        <span className="text-black font-normal text-md">Assignee changed</span>
                    </div>
                    <div className="flex flex-row items-center mt-4">
                        {/* Priority changed */}
                        <button
                            className={`w-5 h-5 border rounded-md mr-4 relative flex items-center justify-center ${priorityChangedChecked ? 'bg-primary-light' : 'bg-white'}`}
                            onClick={togglePriorityChangedCheckbox}
                        >
                            {priorityChangedChecked && <img src={TickIcon} alt="Checked" className="h-3 w-3" />}
                        </button>
                        <span className="text-black font-normal text-md">Priority changed</span>
                    </div>
                    <div className="flex flex-row items-center mt-4">
                        {/* New comments posted */}
                        <button
                            className={`w-5 h-5 border rounded-md mr-4 relative flex items-center justify-center ${newCommentsPostedChecked ? 'bg-primary-light' : 'bg-white'}`}
                            onClick={toggleNewCommentsPostedCheckbox}
                        >
                            {newCommentsPostedChecked && <img src={TickIcon} alt="Checked" className="h-3 w-3" />}
                        </button>
                        <span className="text-black font-normal text-md">New comments posted</span>
                    </div>
                </div>
                <div className='w-full bg-[#F6F6F6] rounded-[8px] py-1 px-5 text-lg font-semibold my-8'>
                    Projects
                </div>
                <div className="grid grid-cols-3 mb-10">
                    <div className="flex flex-row items-center">
                        {/* New project comments */}
                        <button
                            className={`w-5 h-5 border rounded-md mr-4 relative flex items-center justify-center ${newProjectCommentsChecked ? 'bg-primary-light' : 'bg-white'}`}
                            onClick={toggleNewProjectCommentsCheckbox}
                        >
                            {newProjectCommentsChecked && <img src={TickIcon} alt="Checked" className="h-3 w-3" />}
                        </button>
                        <span className="text-black font-normal text-md">New project comments</span>
                    </div>
                    <div className="flex flex-row items-center">
                        {/* Project milestone achieved */}
                        <button
                            className={`w-5 h-5 border rounded-md mr-4 relative flex items-center justify-center ${projectMilestoneAchievedChecked ? 'bg-primary-light' : 'bg-white'}`}
                            onClick={toggleProjectMilestoneAchievedCheckbox}
                        >
                            {projectMilestoneAchievedChecked && <img src={TickIcon} alt="Checked" className="h-3 w-3" />}
                        </button>
                        <span className="text-black font-normal text-md">Project milestone achieved</span>
                    </div>
                    <div className="flex flex-row items-center">
                        {/* Project stage updated */}
                        <button
                            className={`w-5 h-5 border rounded-md mr-4 relative flex items-center justify-center ${projectStageUpdatedChecked ? 'bg-primary-light' : 'bg-white'}`}
                            onClick={toggleProjectStageUpdatedCheckbox}
                        >
                            {projectStageUpdatedChecked && <img src={TickIcon} alt="Checked" className="h-3 w-3" />}
                        </button>
                        <span className="text-black font-normal text-md">Project stage updated</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotificationsSettings;
