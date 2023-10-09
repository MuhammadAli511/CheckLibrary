import { useContext, useState } from "react";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { LogoNavbar } from "../components";
import { workspaceCreation } from "../helper";
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from "../ThemeProvider";
import ErrorToast from "../components/ErrorToast";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SuccessToast from "../components/SuccessToast";
import '../toastCustomStyles.css';

const NewWorkspace = () => {
    const themeColors = useContext(ThemeContext);
    const [formData, setFormData] = useState({
        workspaceName: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const { workspaceName } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }



    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await workspaceCreation(workspaceName);
            if (!response) {
                toast(<ErrorToast message="Can not reach Server" />);
            }
            if (response.status === 200) {
                toast(<SuccessToast message={response.message} />);
                const workspace = response.workspace;
                navigate("/dashboard");
            }
            else {
                toast(<ErrorToast message={response.message} />);
            }
        } catch (error) {
            console.log(error);
            toast(<ErrorToast message={"Something went wrong"} />);
        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen" style={{ backgroundColor: themeColors.background }}>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                closeOnClick={true}
                pauseOnHover={true}
                draggable={false}
                theme="colored"
            />

            <div className="flex h-full">
                <Sidebar />
                <div className="flex flex-col flex-1 pl-10 mt-5 ml-64">
                    <Navbar />
                    <div className="bg-background-light pt-6 pl-6 pr-6 pb-[30px] rounded-lg flex flex-col items-center justify-center">

                        <div className="bg-white px-4 mt-4 rounded-lg w-full py-10 max-w-xl sm:max-w-md lg:max-w-md h-auto">
                            <h2 className="text-lg font-semibold text-[#1E1E1E] mb-4 text-center">Create a new workspace</h2>
                            <p className="text-sm text-[#333] mb-6 text-center">
                                Workspaces are dedicated environments where teams can collaborate, manage projects, and get things done. Let's get you set up with your very own workspace!
                            </p>

                            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                                <input
                                    type="text"
                                    id="workspaceName"
                                    name="workspaceName"
                                    value={workspaceName}
                                    onChange={onChange}
                                    className="input-placeholder border border-[#C5C5C5] p-2 rounded-lg w-full h-[38px] text-sm font-normal mb-4"
                                    placeholder="Workspace Name"
                                    required
                                />
                                <button type="submit" className="bg-[#079263] text-white p-2 rounded-lg w-full h-[38px] text-sm font-normal mt-10">
                                    {isLoading ? <div className="loader"></div> : "Create Workspace"}</button>
                            </form>
                            <div className="mt-6 text-center text-sm text-gray-600">
                                <p>Tip: Give your workspace a unique name that represents your team or project.</p>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewWorkspace;
