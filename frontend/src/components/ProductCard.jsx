function ProductCard({ imageSrc, name, price, description }) {
    return (
        <div className="bg-white mt-5 shadow-lg rounded-md h-[450px]">
            <img src={imageSrc} alt={name} className="rounded-md w-full h-1/2" />
            <div className="p-4 h-1/2">
                <div className="flex justify-between items-center">
                    <span className="text-xl font-medium">{name}</span>
                    <span className="text-xl font-semibold">{price}</span>
                </div>
                <p className="mt-2 text-gray-600">{description}</p>
                <div className="mt-4 flex">
                    <input type="text" placeholder="Enter License Code" className="flex-grow pl-3 py-2 border rounded-l focus:outline-none focus:border-blue-400" />
                    <button className="px-4 py-2 bg-emerald-500 text-white rounded-r hover:bg-emerald-600 focus:outline-none">Redeem</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
