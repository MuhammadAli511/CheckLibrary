import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeProvider";
import Navbar from "../components/Navbar";
import ProductDetails from "../components/ProductDetails";
import ProductMedia from "../components/ProductMedia";
import ProductPricing from "../components/ProductPricing";
import ProductStatus from "../components/ProductStatus";
import Sidebar from "../components/Sidebar";

const AddProduct = () => {
    const themeColors = useContext(ThemeContext);

    return (
        <div className="flex flex-col h-screen" style={{ backgroundColor: themeColors.background }}>

            <div className="flex h-full">
                <Sidebar />
                <div className="flex flex-col flex-1 pl-10 mt-5 ml-64">
                    <Navbar />
                    <div className="grid grid-cols-2 flex-1 space-x-5 ml-2">
                        <ProductDetails />
                        <ProductPricing />
                    </div>
                    <div className="grid grid-cols-2 flex-1 space-x-5  ml-2">
                        <ProductMedia />
                        <ProductStatus />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
