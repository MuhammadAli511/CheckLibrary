import AllProductsComponent from "../components/AllProductsComponent";

function AllProducts() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex h-full">
                <div className="flex-col flex-1">
                    <AllProductsComponent />
                </div>
            </div>
        </div>
    );
}

export default AllProducts;