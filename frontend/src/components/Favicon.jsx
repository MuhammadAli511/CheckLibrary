import React, { useState } from "react";

function Favicon() {
    return (
        <div className="mt-4">
            <div className="border bg-background-light pt-6 pl-6 pr-6 pb-2 rounded-lg">
                <div className="mb-6">
                    <span className="font-medium text-xl">Favicon</span>
                    <p className="mt-4 mb-6">
                        Your favicon must be an .ico file
                    </p>
                    <div className="flex">
                        <div className="w-3/4 bg-background-light border border-[#DCDCDC] h-28 rounded-lg mr-4">
                            {/* You can add the favicon display logic here */}
                        </div>
                        
                        <div className="w-1/4 flex flex-col justify-start">
                            <button className="mb-4 border border-[#079263] text-[#079263] rounded-lg px-4 py-2">Edit</button>
                            <button className="border border-[#EC5453] text-[#EC5453] rounded-lg px-4 py-2">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favicon;
