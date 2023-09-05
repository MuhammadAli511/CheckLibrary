import React from "react";

function AccountLogo() {
    return (
        <div className="mt-4">
            <div className="border bg-background-light pt-6 pl-6 pr-6 pb-2 rounded-lg">
                <div className="mb-6">
                    <span className="font-medium text-xl">Account Logo</span>
                    <p className="mt-4 mb-6">
                        Your logo must be a PNG file with maximum size set to 140*40px.
                    </p>
                    <div className="flex flex-row w-full">
                        <div className="flex flex-col flex-1 mr-4">
                            <div className="bg-background-light border border-[#DCDCDC] h-24 rounded-lg mb-4">
                                {/* Logo display logic here */}
                            </div>

                            <div className="flex flex-row justify-start space-x-4">
                                <button className="flex-1 border border-[#079263] text-[#079263] rounded-lg px-4 py-2">Edit</button>
                                <button className="flex-1 border border-[#EC5453] text-[#EC5453] rounded-lg px-4 py-2">Delete</button>
                            </div>

                        </div>

                        <div className="flex flex-col flex-1">
                            <div className="bg-background-dark border border-[#DCDCDC] h-24 rounded-lg mb-4">
                                {/* Logo display logic here */}
                            </div>

                            <div className="flex flex-row justify-start space-x-4">
                                <button className="flex-1 border border-[#079263] text-[#079263] rounded-lg px-4 py-2">Edit</button>
                                <button className="flex-1 border border-[#EC5453] text-[#EC5453] rounded-lg px-4 py-2">Delete</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountLogo;
