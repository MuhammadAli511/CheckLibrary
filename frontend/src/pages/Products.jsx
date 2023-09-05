import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ProductsTab from "../components/ProductsTab";
import Sidebar from "../components/Sidebar";

import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import AllProducts from "./AllProducts";

const tabComponents = {
    'All': AllProducts,
    'Active': AllProducts,
    'Draft': AllProducts,
};

const Products = () => {
    const taskTab = useSelector((state) => state.tasksTab);
    const RenderedComponent = tabComponents[taskTab];
    const themeColors = useContext(ThemeContext);

    return (
        <div className="flex flex-col"  style={{backgroundColor: themeColors.background}}>
            <div className="flex h-full">
                <Sidebar />
                <div className="flex flex-col flex-1 pl-10 mt-5 ml-64">
                    <Navbar />
                    <div className="mt-5 mx-10">
                        <ProductsTab />
                        {RenderedComponent && <RenderedComponent />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
