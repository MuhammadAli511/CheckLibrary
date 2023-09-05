import ToDoListComponent from "../components/ToDoListComponent";

function ToDoList() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex h-full">
                <div className="flex-col flex-1">
                    <ToDoListComponent />
                </div>
            </div>
        </div>
    );
}

export default ToDoList;