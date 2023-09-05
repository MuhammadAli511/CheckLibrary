import BillingHistory from "../../components/BillingHistory";
import BillingPeriod from "../../components/BillingPeriod";
import CardDetails from "../../components/CardDetails";
import Plans from "../../components/Plans";

function Security() {
    return (
        <div className="flex flex-col h-screen bg-background-light">
            <div className="flex h-full">
                <div className="flex-col flex-1">
                    <div className="grid grid-cols-3 gap-4">
                        <Plans />
                        <BillingPeriod />
                        <CardDetails />
                    </div>
                    <BillingHistory />
                </div>
            </div>
        </div>
    );
}

export default Security;