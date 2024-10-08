import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeProvider";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { csv } from '../constants/svgs';
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorToast from "../components/ErrorToast";
import SuccessToast from "../components/SuccessToast";
import '../toastCustomStyles.css';

const ImportCsv = () => {
    const themeColors = useContext(ThemeContext);
    const [fileName, setFileName] = useState('');

    const onFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.name.endsWith('.csv')) {
            setFileName(file.name);
            toast(<SuccessToast message="File uplaoded" />);
        } else {
            setFileName('');
            toast(<ErrorToast message="Upload valid csv file" />);
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
                    <div className="flex flex-1 items-center justify-center mx-10 mt-[-50px]"> 
                        <input 
                            type="file"
                            accept=".csv"
                            className="hidden"
                            onChange={onFileChange}
                            id="csv-input"
                        />
                        <label 
                            htmlFor="csv-input"
                            className="border-dashed border-2 p-8 w-[65%] h-[40%] flex flex-col items-center justify-center space-y-4 cursor-pointer"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={onFileChange}
                        >
                            <div className='mr-2' dangerouslySetInnerHTML={{ __html: csv }}></div>
                            <p>Select a CSV file to import</p>
                            <p>Or drag and drop it here</p>
                            <p className="mt-2">{fileName}</p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImportCsv;
