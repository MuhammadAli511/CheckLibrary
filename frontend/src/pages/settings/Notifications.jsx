import NotificationsSettings from "../../components/NotificationsSettings";

function Notifications() {
    return (
        <div className="flex flex-col h-screen bg-background-light">
            <div className="flex h-full">
                <div className="flex-col flex-1">
                    <NotificationsSettings />
                </div>
            </div>
        </div>
    );
}

export default Notifications;