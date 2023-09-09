import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeProvider";
import { changePassword } from "../helper";
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../toastCustomStyles.css';
import ErrorToast from "./ErrorToast";
import SuccessToast from "./SuccessToast";


function ChangePassword() {
    const themeColors = useContext(ThemeContext);
    
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const clearFields = () => {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
    }

    const changePasswordButton = async () => {
        if (newPassword !== confirmNewPassword) {
            toast(<ErrorToast message="Passwords do not match" />);
        } else {
            const response = await changePassword( currentPassword, newPassword, confirmNewPassword );
            if (response.status === 200) {
                toast(<SuccessToast message={response.message} />);
                clearFields();
            } else {
                toast(<ErrorToast message={response.message} />);
                clearFields();
            }
        }
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
            <div className="border pt-6 pl-6 pr-6 pb-6 rounded-lg" style={{ backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius }}>
                <div className="flex justify-between items-center mb-6">
                    <span className="font-medium text-xl" style={{ color: themeColors.text }}>Change Password</span>
                    <button className="text-sm border rounded-lg px-3 py-2 bg-transparent" style={{ color: themeColors.primary, borderColor: themeColors.primary }}>Reset Password</button>
                </div>
                
                <div className="mt-6">
                    <label htmlFor="currentPassword" className="block text-sm font-medium mb-3" style={{ color: themeColors.text }}>Current Password</label>
                    <input type="password" id="currentPassword" name="currentPassword" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} className="border border-[#DCDCDC] p-3 rounded-lg w-full"/>
                </div>

                <div className="mt-6">
                    <label htmlFor="newPassword" className="block text-sm font-medium mb-3" style={{ color: themeColors.text }}>New Password</label>
                    <input type="password" id="newPassword" name="newPassword" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="border border-[#DCDCDC] p-3 rounded-lg w-full"/>
                </div>

                <div className="mt-6">
                    <label htmlFor="confirmNewPassword" className="block text-sm font-medium mb-3" style={{ color: themeColors.text }}>Confirm New Password</label>
                    <input type="password" id="confirmNewPassword" name="confirmNewPassword" value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} className="border border-[#DCDCDC] p-3 rounded-lg w-full"/>
                </div>

                <div className="flex justify-end mt-6 mb-2">
                    <button onClick={clearFields} className="rounded-lg px-4 py-3 mr-3 border" style={{ color: themeColors.text, backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius }}>Cancel</button>
                    <button onClick={changePasswordButton} className="rounded-lg px-5 py-3" style={{ color: themeColors.text, backgroundColor: themeColors.primary }}>Save</button>
                </div>

            </div>
        </div>
    );
}

export default ChangePassword;
