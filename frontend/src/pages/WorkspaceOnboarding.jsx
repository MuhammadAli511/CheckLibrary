import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { LogoNavbar } from "../components";
import { workspaceOnboard } from "../helper";
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorToast from "../components/ErrorToast";
import '../toastCustomStyles.css';

const WorkspaceOnboarding = () => {
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
            const response = await workspaceOnboard(workspaceName);
            if (!response) {
                toast(<ErrorToast message="Can not reach Server" />);
            }
            if (response.status === 200) {
                const workspace = response.workspace;
                dispatch({
                    type: "UPDATE_WORKSPACE",
                    payload: workspace
                });
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
        <div className="bg-[#F7F7F7] min-h-screen">
            <ToastContainer 
                position="top-right"
                autoClose={2000}
                hideProgressBar
                closeOnClick={true}
                pauseOnHover={true}
                draggable={false}
                theme="colored"
            />
            <LogoNavbar />
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white px-4 mt-4 rounded-lg w-full py-10 max-w-xl sm:max-w-md lg:max-w-md h-auto">
                    <h1 className="text-2xl font-semibold text-[#1E1E1E] mb-2 text-center">
                        Welcome!
                    </h1>
                    <p className="text-sm text-[#333] mb-6 text-center">
                        Workspaces are dedicated environments where teams can collaborate, manage projects, and get things done. Let's get you set up with your very own workspace!
                    </p>
                    <h2 className="text-lg font-semibold text-[#1E1E1E] mb-4 text-center">Create a new workspace</h2>
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
                        
                        
                        <button type="submit" className="bg-[#6259CE] text-white p-2 rounded-lg w-full h-[38px] text-sm font-normal mt-10">
                            {isLoading ? <div className="loader"></div> : "Create Workspace"}</button>
                    </form>
                    <div className="mt-6 text-center text-sm text-gray-600">
                        <p>Tip: Give your workspace a unique name that represents your team or project.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default WorkspaceOnboarding;