import { DateTime } from 'luxon';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import timezones from 'timezones-list';
import { ThemeContext } from "../ThemeProvider";
import CameraIcon from '../assets/camera.svg';
import { updatePersonalInfo } from '../helper';
import { setEmployeeProfile } from '../redux/actions';
import '../toastCustomStyles.css';
import ErrorToast from "./ErrorToast";
import SuccessToast from "./SuccessToast";


function PersonalInfo() {
    const dispatch = useDispatch();
    const [uploadedImage, setUploadedImage] = useState(null);
    const employeeDetails = useSelector(state => state.auth.authData?.employee);
    const [firstName, setFirstName] = useState(employeeDetails.firstName || "");
    const [lastName, setLastName] = useState(employeeDetails.lastName || "");
    const [email, setEmail] = useState(employeeDetails.email || "");
    const [timeZone, setTimeZone] = useState(employeeDetails.timeZone || "");
    const [dob, setDob] = useState(employeeDetails.dob || "");

    useEffect(() => {
        setFirstName(employeeDetails.firstName || "");
        setLastName(employeeDetails.lastName || "");
        setEmail(employeeDetails.email || "");
        setTimeZone(employeeDetails.timeZone || "");
        setDob(employeeDetails.dob || "");
    }, [employeeDetails]);

    const themeColors = useContext(ThemeContext);

    const updatePersonalInfoButton = async () => {
        const response = await updatePersonalInfo( firstName, lastName, dob, timeZone );
        if (response.status === 200) {
            toast(<SuccessToast message={response.message} />);
            dispatch(setEmployeeProfile(response.employee));
        } else {
            toast(<ErrorToast message={response.message} />);
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
                    <span className="font-medium text-xl" style={{ color: themeColors.text }}>Personal Info</span>
                </div>

                <div className="grid grid-cols-[1fr,4fr,4fr] gap-6">
                    <div className="flex flex-col items-center pr-2">
                        <div className="w-32 h-32 mb-4 rounded-full bg-gray-200 overflow-hidden">
                            {uploadedImage ? (
                                <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover rounded-full" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    Photo
                                </div>
                            )}
                        </div>

                        <label className="cursor-pointer text-sm text-[#079263] border border-[#079263] rounded px-2 py-2 flex items-center">
                            <img
                                src={CameraIcon}
                                alt="Camera Icon"
                                className="h-5 w-5 mr-2" />
                            Upload Photo
                            <input type="file" className="hidden" onChange={(e) => setUploadedImage(URL.createObjectURL(e.target.files[0]))} />
                        </label>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium mb-3" style={{ color: themeColors.text }}>First Name</label>
                            <input type="text" id="firstName" name="firstName" value={firstName}
                                onChange={e => setFirstName(e.target.value)} className="border border-[#DCDCDC] p-3 rounded-lg w-full" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium  mb-3" style={{ color: themeColors.text }}>Last Name</label>
                            <input type="text" id="lastName" name="lastName" value={lastName}
                                onChange={e => setLastName(e.target.value)} className="border border-[#DCDCDC] p-3 rounded-lg w-full" />
                        </div>
                        <div>
                            <label htmlFor="dob" className="block text-sm font-medium mb-3" style={{ color: themeColors.text }}>Date of Birth</label>
                            <input type="date" id="dob" name="dob" value={dob}
                                onChange={e => setDob(e.target.value)} className="border border-[#DCDCDC] p-3 rounded-lg w-full" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-3" style={{ color: themeColors.text }}>Email</label>
                            <div className="relative">
                                <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} className="border border-[#DCDCDC] p-3 rounded-lg w-full pl-3 pr-20" />
                                <button
                                    className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-transparent border-none focus:outline-none">
                                    Change
                                </button>
                            </div>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="timezone" className="block text-sm font-medium mb-3" style={{ color: themeColors.text }}>Time Zone</label>
                            <select
                                id="timezone"
                                name="timezone"
                                value={timeZone}
                                onChange={e => setTimeZone(e.target.value)}
                                className="border border-[#DCDCDC] p-3 rounded-lg w-full">
                                {timezones.map(zone => {
                                    const now = DateTime.now().setZone(zone.tzCode).toFormat("HH:mm");
                                    return <option key={zone.tzCode} value={zone.tzCode}>{zone.label} - {now}</option>;
                                })}
                            </select>
                        </div>


                    </div>
                </div>
                <div className="flex justify-end mt-6">
                    <button className="rounded-lg px-4 py-3 mr-3 border" style={{ color: themeColors.text, backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius }}>
                        Cancel
                    </button>
                    <button onClick={updatePersonalInfoButton} className="rounded-lg px-5 py-3" style={{ color: themeColors.background, backgroundColor: themeColors.primary}}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;