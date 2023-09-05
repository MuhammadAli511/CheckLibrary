import NavSideBarCard from "../../components/NavSidebarCard";
function NavSideBar() {
    return (
        <>
            <div className="flex justify-center items-center mt-4">
                <div className="w-[748px] border rounded-[10px] bg-background-light pt-6 pl-6 pr-6 pb-6">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-medium text-xl">Nav Sidebar</span>
                        <button className="text-[#079263] text-md border border-[#079263] rounded-md px-4 py-2 bg-transparent">+ Create</button>
                    </div>
                    <NavSideBarCard />
                </div>

            </div>
        </>
    );
}

export default NavSideBar;