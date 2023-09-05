import React, { useState } from "react";


function ProductPricing() {
    const [price, setPrice] = useState("");
    const [comparePrice, setComparePrice] = useState("");

    return (
        <div className="mt-4">
            <div className="font-medium text-2xl mb-4">Product Pricing</div>
            <div className="border bg-background-light pt-6 pl-6 pr-6 pb-[30px] rounded-lg">
                <div className="mb-6">
                    <p className="text-xl text-black">Price</p>
                    <input type="text" id="price" name="price" value={price}
                        onChange={e => setPrice(e.target.value)} className="border border-[#DCDCDC] p-3 mb-4 rounded-lg w-full" />
                </div>
                <div className="mb-6">
                    <p className="text-xl text-black">Compare Price</p>
                    <input type="text" id="comparePrice" name="comparePrice" value={comparePrice}
                        onChange={e => setComparePrice(e.target.value)} className="border border-[#DCDCDC] p-3 mb-4 rounded-lg w-full" />
                </div>
                {/* Publish Button */}
                <div className="flex">
                    <button className="bg-[#079263] text-white font-medium text-xl px-8 py-3 rounded-lg w-full">Publish</button>
                </div>
            </div>
        </div>
    );
}

export default ProductPricing;
