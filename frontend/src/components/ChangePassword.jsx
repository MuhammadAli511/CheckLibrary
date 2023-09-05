function ChangePassword() {
    return (
        <div className="mt-4">
            <div className="border bg-background-light pt-6 pl-6 pr-6 pb-6 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                    <span className="font-medium text-xl">Change Password</span>
                    <button className="text-[#079263] text-sm border border-[#079263] rounded-lg px-3 py-2 bg-transparent">Reset Password</button>
                </div>
                
                <div className="mt-6">
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-3">Current Password</label>
                    <input type="password" id="currentPassword" name="currentPassword" className="border border-[#DCDCDC] p-3 rounded-lg w-full"/>
                </div>

                <div className="mt-6">
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-3">New Password</label>
                    <input type="password" id="newPassword" name="newPassword" className="border border-[#DCDCDC] p-3 rounded-lg w-full"/>
                </div>

                <div className="mt-6">
                    <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700 mb-3">Confirm New Password</label>
                    <input type="password" id="confirmNewPassword" name="confirmNewPassword" className="border border-[#DCDCDC] p-3 rounded-lg w-full"/>
                </div>

                <div className="flex justify-end mt-6 mb-2">
                    <button className="rounded-lg px-4 py-3 bg-[#F6F6F6] text-[#9B9B9B] mr-3">Cancel</button>
                    <button className="rounded-lg px-5 py-3 bg-primary-light text-white">Save</button>
                </div>

            </div>
        </div>
    );
}

export default ChangePassword;
