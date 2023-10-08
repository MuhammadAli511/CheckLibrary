import ListViewComponent from "../components/ListViewComponent";
import ProjectListViewComponent from "../components/ProjectListViewComponent";

function ListView({ viewType }) {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex h-full">
                <div className="flex-col flex-1">
                    {viewType === 'tasks' ? <ListViewComponent /> : <ProjectListViewComponent />}
                </div>
            </div>
        </div>
    );
}

export default ListView;
