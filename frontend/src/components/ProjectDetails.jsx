import React, { useState } from "react";


function ProjectDetails() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="mt-16">
            <div className="border bg-background-light pt-6 pl-6 pr-6 pb-[30px] rounded-lg">
                <div className="mb-6">
                    <p className="text-lg text-black">Project Name</p>
                    <input type="text" id="name" name="name" value={name}
                        onChange={e => setName(e.target.value)} className="border border-[#DCDCDC] p-3 mb-4 rounded-lg w-full" />
                </div>
                <div className="mb-6">
                    <p className="text-lg text-black">Project Description</p>
                    <textarea id="description" name="description" value={description}
                        onChange={e => setDescription(e.target.value)} className="border border-[#DCDCDC] p-3 mb-4 rounded-lg w-full" />

                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
