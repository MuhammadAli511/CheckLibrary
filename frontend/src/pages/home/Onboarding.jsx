import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex flex-col h-screen bg-background-light">

            <div className="flex h-full">
                <Sidebar />
                <div className="flex flex-col flex-1 pl-10 mt-5 ml-64">
                    <Navbar />
                    <div className="mt-5 mx-10">
                        <div className="text-black text-2xl font-bold mb-4">
                            Uncover opportunities to explode your business here 👇
                        </div>
                        <div className="rounded-[10px] overflow-hidden"> 
                            <iframe 
                                width="1000" 
                                height="550" 
                                src="https://www.youtube.com/embed/WuljKartv2U" 
                                title="YouTube video player"
                                className="rounded-[10px]"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
