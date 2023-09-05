import ListViewComponent from "../components/ListViewComponent";

function ListView() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex h-full">
                <div className="flex-col flex-1">
                    <ListViewComponent />
                </div>
            </div>
        </div>
    );
}

export default ListView;