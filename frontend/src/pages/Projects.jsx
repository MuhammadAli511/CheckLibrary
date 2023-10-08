import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ProjectsTabs from "../components/ProjectsTabs";
import Sidebar from "../components/Sidebar";

import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import KanbanBoard from "./KanbanBoard";
import ListView from "./ListView";
import Templates from "./Templates";
import ToDoList from "./ToDoList";

// Mapping each tab name to its respective component
const tabComponents = {
    'List View': ListView,
    'Board View': KanbanBoard,
    'Templates': Templates,
    'Archived': ToDoList,
};

const Projects = () => {
    const projectTab = useSelector((state) => state.projectsTab);
    const RenderedComponent = tabComponents[projectTab];
    const themeColors = useContext(ThemeContext);

    return (
        <div className="flex flex-col"  style={{backgroundColor: themeColors.background}}>
            <div className="flex h-full">
                <Sidebar />
                <div className="flex flex-col flex-1 pl-10 mt-5 ml-64">
                    <Navbar />
                    <div className="mt-5 mx-10">
                        <ProjectsTabs />
                        {RenderedComponent && <RenderedComponent viewType="projects" />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
