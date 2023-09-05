import React, { useState } from "react";

function ProductStatus() {
    const [isActive, setIsActive] = useState(true);

    return (
        <div className="mt-4">
            <div className="font-medium text-2xl mb-4">Status</div>
            <div className="flex flex-1 items-center justify-center border border-[#DCDCDC] p-4 rounded-lg">
                <button 
                    className={`px-4 w-full rounded-md py-3 border-l border-t border-b border-[#DCDCDC] ${isActive ? 'bg-[#079263] text-white' : 'bg-white'}`}
                    onClick={() => setIsActive(true)}
                >
                    Active
                </button>
                <button 
                    className={`px-4 w-full rounded-md py-3 border-r border-t border-b border-[#DCDCDC] ${!isActive ? 'bg-[#079263] text-white' : 'bg-white'}`}
                    onClick={() => setIsActive(false)}
                >
                    Inactive
                </button>
            </div>
        </div>
    );
}

export default ProductStatus;
