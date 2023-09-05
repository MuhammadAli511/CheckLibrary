import ChangePassword from "../../components/ChangePassword";

function Security() {
    return (
        <div className="flex flex-col h-screen bg-background-light">
            <div className="flex h-full">
                <div className="flex-col flex-1">
                    <ChangePassword />
                </div>
            </div>
        </div>
    );
}

export default Security;