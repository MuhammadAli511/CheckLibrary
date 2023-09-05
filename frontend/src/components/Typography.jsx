import React, { useState } from "react";

function Typography() {
    return (
        <div className="mt-4">
            <div className="border bg-background-light pt-6 pl-6 pr-6 pb-2 rounded-lg">
                <div className="mb-6">
                    <span className="font-medium text-xl">Typography</span>
                    <div className="flex flex-row justify-between mt-4 border border-[#DCDCDC] px-4 rounded-lg py-3">
                        <p className="flex-1">H1 Heading</p>
                        <p className="w-16 text-center">28 Px</p>
                        <p className="flex-1 text-right">Medium</p>
                    </div>
                    <div className="flex flex-row justify-between mt-4 border border-[#DCDCDC] px-4 rounded-lg py-3">
                        <p className="flex-1">H2 Heading</p>
                        <p className="w-16 text-center">26 Px</p>
                        <p className="flex-1 text-right">Medium</p>
                    </div>
                    <div className="flex flex-row justify-between mt-4 border border-[#DCDCDC] px-4 rounded-lg py-3">
                        <p className="flex-1">Body Text</p>
                        <p className="w-16 text-center">20 Px</p>
                        <p className="flex-1 text-right">Regular</p>
                    </div>
                    <div className="flex flex-row justify-between mt-4 border border-[#DCDCDC] px-4 rounded-lg py-3">
                        <p className="flex-1">Body Sub Text</p>
                        <p className="w-16 text-center">18 Px</p>
                        <p className="flex-1 text-right">Regular</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Typography;
