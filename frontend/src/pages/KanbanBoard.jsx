import KanbanBoardComponent from "../components/KanbanBoardComponent";

function KanbanBoard() {
    return (
        <div className="flex flex-col h-screen bg-background-light">
            <div className="flex h-full">
                <div className="flex-col flex-1">
                    <KanbanBoardComponent />
                </div>
            </div>
        </div>
    );
}

export default KanbanBoard;