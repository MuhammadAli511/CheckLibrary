import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider";
import DigitalClock from "../../components/DigitalClock";
import Navbar from "../../components/Navbar";
import Overview from "../../components/Overview";
import RecentActivities from "../../components/RecentActivities";
import Sidebar from "../../components/Sidebar";
import Welcome from "../../components/Welcome";
import TasksToDo from "../TasksToDo";

const Dashboard = () => {
    const themeColors = useContext(ThemeContext);
    return (
        <div className="flex flex-col" style={{backgroundColor: themeColors.background}}>

            <div className="flex h-full">
                <Sidebar />
                <div className="flex flex-col flex-1 pl-10 mt-5 ml-64">
                    <Navbar />
                    <div className="mx-10">
                        <Welcome />
                        <Overview />
                        <DigitalClock />
                        <div className="grid grid-cols-2 gap-4 pb-10">
                            <TasksToDo />
                            <RecentActivities />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
