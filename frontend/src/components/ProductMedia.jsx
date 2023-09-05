import React, { useState } from "react";


function ProductMedia() {
    const [fileName, setFileName] = useState('');
    const onFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            alert('Please upload a valid file.');
        }
    };

    return (
        <div className="mt-4">
            <div className="font-medium text-2xl mb-4">Product Details</div>
            <div className="flex flex-1 items-center justify-center">
                <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    className="hidden"
                    onChange={onFileChange}
                    id="csv-input"
                />
                <label
                    htmlFor="csv-input"
                    className="border-dashed border-2 p-8 w-full h-[40%] flex flex-col items-center justify-center space-y-4 cursor-pointer"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={onFileChange}
                >
                    <p className="text-[#110011]">Upload Thumbnail</p>
                    <p className="text-[#9B9B9B]">Or drag and drop it here</p>
                    <p className="mt-2">{fileName}</p>
                </label>
            </div>
        </div>
    );
}

export default ProductMedia;
