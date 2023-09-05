function BillingPeriod() {
    const billingInfo = {
        period: "Monthly",
        renewal: "(Renew Aug 12th 2023)"
    };

    return (
        <div className="mt-4">
            <div className="border bg-background-light p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <span className="font-medium text-2xl text-text-light">Billing Period</span>
                </div>
                
                <div className="flex items-center mb-2">
                    <span className="font-medium text-xl text-text-light">Billing Period</span>
                </div>

                <div className="mb-4">
                    <span className="text-text-light text-lg">{billingInfo.period}</span>
                    <span className="text-gray-500 text-lg ml-2">{billingInfo.renewal}</span>
                </div>
                                
                <div className="flex space-x-4">
                    <button 
                        className="flex-shrink-0 rounded-md text-[#079263] border border-[#079263] text-lg w-48 h-12"
                        onClick={() => {}}
                    >
                        Change Billing Period
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BillingPeriod;
