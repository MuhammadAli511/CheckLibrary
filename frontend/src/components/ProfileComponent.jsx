import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from "../ThemeProvider";
import { updateProfile } from '../helper';
import { setEmployeeProfile } from '../redux/actions';
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../toastCustomStyles.css';
import ErrorToast from "./ErrorToast";
import SuccessToast from "./SuccessToast";

function ProfileComponent() {
    const dispatch = useDispatch();
    
    const themeColors = useContext(ThemeContext);
    const employeeDetails = useSelector(state => state.auth.authData?.employee);
    const [position, setPosition] = useState(employeeDetails.position || "");
    const [phoneNumber, setPhoneNumber] = useState(employeeDetails.phoneNumber || "");
    const [website, setWebsite] = useState(employeeDetails.website || "");
    const [bio, setBio] = useState(employeeDetails.bio || "");


    useEffect(() => {
        setPosition(employeeDetails.position || "");
        setPhoneNumber(employeeDetails.phoneNumber || "");
        setWebsite(employeeDetails.website || "");
        setBio(employeeDetails.bio || "");
    }, [employeeDetails]);

    const updateProfileButton = async  () => {
        const response = await updateProfile( position, phoneNumber, website, bio );
        if (response.status === 200) {
            toast(<SuccessToast message={response.message} />);
            dispatch(setEmployeeProfile(response.employee));
        } else {
            toast(<ErrorToast message={response.message} />);
        }
    }

    const clearFields = () => {
        setPosition(employeeDetails.position || "");
        setPhoneNumber(employeeDetails.phoneNumber || "");
        setWebsite(employeeDetails.website || "");
        setBio(employeeDetails.bio || "");
    }

    return (
        <div className="mt-4">
            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar
                closeOnClick={true}
                pauseOnHover={true}
                draggable={false}
                theme="colored"
            />
            <div className="border pt-6 pl-6 pr-6 pb-6 rounded-lg" style={{ color: themeColors.text, backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius }}>
                <div className="flex justify-between items-center mb-6">
                    <span className="font-medium text-xl">Profile</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="position" className="block text-sm font-medium mb-3">Position</label>
                        <input type="text" id="position" name="position" value={position}
                            onChange={e => setPosition(e.target.value)} className="border p-3 rounded-lg w-full" style={{ color: themeColors.text, backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius }} />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium mb-3">Phone Number</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)} className="border p-3 rounded-lg w-full" style={{ color: themeColors.text, backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius }} />
                    </div>
                </div>

                <div className="mt-6">
                    <label htmlFor="website" className="block text-sm font-medium mb-3">Website</label>
                    <input type="url" id="website" name="website" value={website}
                            onChange={e => setWebsite(e.target.value)} className="border p-3 rounded-lg w-full" style={{ color: themeColors.text, backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius }} />
                </div>

                <div className="mt-6">
                    <label htmlFor="bio" className="block text-sm font-medium mb-3">Bio</label>
                    <textarea id="bio" name="bio" rows="4" value={bio}
                            onChange={e => setBio(e.target.value)} className="border p-3 rounded-lg w-full" style={{ color: themeColors.text, backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius }}>

                    </textarea>
                </div>

                <div className="flex justify-end mt-6">
                    <button onClick={clearFields} className="rounded-lg px-4 py-3 mr-3 border" style={{ color: themeColors.text, backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius }}>
                        Cancel
                    </button>
                    <button onClick={updateProfileButton} className="rounded-lg px-5 py-3 bg-primary-light text-white">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;
