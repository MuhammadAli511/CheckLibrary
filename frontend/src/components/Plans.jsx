function Plans() {
    // Set the data as a constant
    const planData = {
        planType: "Premium",
        planDetails: "$20.00 USD/month + Tax"
    };

    return (
        <div className="mt-4">
            <div className="border bg-background-light p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <span className="font-medium text-2xl text-text-light">Plans</span>
                </div>
                
                <div className="flex items-center mb-2">
                    <span className="rounded-full w-3.5 h-3.5 flex-shrink-0 bg-[#1AD598]"></span>
                    <span className="font-medium ml-2 text-xl text-text-light">{planData.planType}</span>
                </div>

                <div className="text-gray-500 mb-4 text-lg">
                    <span>{planData.planDetails}</span>
                </div>
                                
                <div className="flex space-x-4">
                    <button 
                        className="text-white flex-shrink-0 rounded-md text-lg bg-primary-light w-32 h-12"
                        onClick={() => {}}
                    >
                        Explore Plans
                    </button>

                    <button 
                        className="flex-shrink-0 rounded-md text-[#079263] border border-[#079263] text-lg w-36 h-12"
                        onClick={() => {}}
                    >
                        Manage Plan
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Plans;
