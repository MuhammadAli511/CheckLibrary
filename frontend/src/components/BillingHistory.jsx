
function BillingTable() {
    const data = [
        {
            "invoiceNumber": "#32220211122-8",
            "amount": "$22.00",
            "date": "12 Jun 2023",
            "status": "Paid",
            "plan": "Premium",
            "action": "Download Invoice"
        },
        {
            "invoiceNumber": "#32220211122-9",
            "amount": "$18.00",
            "date": "14 Jun 2023",
            "status": "Unpaid",
            "plan": "Basic",
            "action": "Download Invoice"
        },
    ];
    return (
        <table className="w-full text-left">
            <thead className="bg-[#F6F6F6] rounded">
                <tr>
                    <th className="p-2">Invoice #</th>
                    <th className="p-2">Amount</th>
                    <th className="p-2">Date</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Plan</th>
                    <th className="p-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((record, index) => (
                    <tr key={index} className="border-t border-[#DCDCDC]">
                        <td className="p-2">{record.invoiceNumber}</td>
                        <td className="p-2">{record.amount}</td>
                        <td className="p-2">{record.date}</td>
                        <td className="p-2 flex items-center justify-left">
                            {record.status === "Paid" ? 
                                <span className="text-[#079263] bg-[#E3FAF2] w-18 h-9 flex-shrink-0 rounded-md flex items-center justify-center pl-4 pr-4">
                                    {record.status}
                                </span>
                                : 
                                <span className="text-red-500 bg-red-100 w-18 h-9 flex-shrink-0 rounded-md flex items-center justify-center pl-2 pr-2">
                                    {record.status}
                                </span>
                            }
                        </td>
                        <td className="p-2">{record.plan}</td>
                        <td className="p-2">
                            <button className="flex-shrink-0 rounded-md text-[#079263] border border-[#079263] text-base px-2 py-1">
                                Download Invoice
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function BillingHistory() {
    return (
        <div className="mt-4 w-108.5 h-auto border rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-2xl text-text-light">Billing History</span>
                <select className="text-[#9B9B9B] border border-[#DCDCDC] rounded-lg p-2 w-38 h-13 flex-shrink-0">
                    <option>All Time</option>
                    {/* Add more options if required */}
                </select>
            </div>

            <hr className="mb-4 text-gray-400" />

            <div className="pl-5 pr-5 overflow-y-auto">
                <BillingTable />
            </div>
        </div>
    );
}

export default BillingHistory;