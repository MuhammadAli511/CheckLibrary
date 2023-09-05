import DateAndTimeComponent from "../../components/DateAndTimeComponent";

function DateAndTime() {
    return (
        <div className="flex flex-col h-screen bg-background-light">
            <div className="flex h-full">
                <div className="flex-col flex-1">
                    <DateAndTimeComponent />
                </div>
            </div>
        </div>
    );
}

export default DateAndTime;