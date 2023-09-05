import React, { useState } from "react";


function ProductDetails() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="mt-4">
            <div className="font-medium text-2xl mb-4">Product Details</div>
            <div className="border bg-background-light pt-6 pl-6 pr-6 pb-[30px] rounded-lg">
                <div className="mb-6">
                    <p className="text-xl text-black">Title</p>
                    <input type="text" id="title" name="title" value={title}
                        onChange={e => setTitle(e.target.value)} className="border border-[#DCDCDC] p-3 mb-4 rounded-lg w-full" />
                </div>
                <div className="mb-6">
                    <p className="text-xl text-black">Description</p>
                    <textarea id="description" name="description" value={description}
                        onChange={e => setDescription(e.target.value)} className="border border-[#DCDCDC] p-3 mb-4 rounded-lg w-full" />

                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
