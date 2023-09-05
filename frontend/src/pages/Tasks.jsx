import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import TasksTabs from "../components/TasksTabs";  // Importing the new Tabs component
import Sidebar from "../components/Sidebar";

import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import ToDoList from "./ToDoList";
import ListView from "./ListView";
import KanbanBoard from "./KanbanBoard";
import Templates from "./Templates";

// Mapping each tab name to its respective component
const tabComponents = {
    'To-Do List': ToDoList,
    'List View': ListView,
    'Kanban Board': KanbanBoard,
    'Templates': Templates,
};

const Tasks = () => {
    const taskTab = useSelector((state) => state.tasksTab);  // Assuming you have a similar state in the redux store for tasks.
    const RenderedComponent = tabComponents[taskTab];
    const themeColors = useContext(ThemeContext);

    return (
        <div className="flex flex-col"  style={{backgroundColor: themeColors.background}}>
            <div className="flex h-full">
                <Sidebar />
                <div className="flex flex-col flex-1 pl-10 mt-5 ml-64">
                    <Navbar />
                    <div className="mt-5 mx-10">
                        <TasksTabs />
                        {RenderedComponent && <RenderedComponent />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
