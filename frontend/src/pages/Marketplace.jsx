import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import { plusWhite } from '../constants/svgs';

function Marketplace() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/addProduct');
    };
    return (
        <div className="flex flex-col h-screen bg-background-light">
            <div className="flex h-full">
                <Sidebar />
                <div className="flex flex-col flex-1 pl-10 mt-5 ml-64">
                    <Navbar />
                    <div className='mx-10'>
                        <div className="flex items-center justify-between mt-10 mb-4 bg-white">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4 font-poppins">Showing 1-10 of 10 products</h2>
                            </div>
                            <button onClick={handleButtonClick} className="flex items-center bg-primary-light text-white py-2 px-4 rounded-md align-middle">
                                <div className='mr-2' dangerouslySetInnerHTML={{ __html: plusWhite }}></div>
                                Add Product
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-10">
                            <ProductCard
                                imageSrc="https://cdn.dribbble.com/userupload/7903448/file/original-393fef8139f96de87292369aec7aed6e.png"
                                name="Apple Imac 27-Inch"
                                price="$18.00"
                                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                            />
                            <ProductCard
                                imageSrc="https://cdn.dribbble.com/userupload/7903448/file/original-393fef8139f96de87292369aec7aed6e.png"
                                name="Apple Imac 27-Inch"
                                price="$18.00"
                                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                            />
                            <ProductCard
                                imageSrc="https://cdn.dribbble.com/userupload/7903448/file/original-393fef8139f96de87292369aec7aed6e.png"
                                name="Apple Imac 27-Inch"
                                price="$18.00"
                                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                            />
                            <ProductCard
                                imageSrc="https://cdn.dribbble.com/userupload/7903448/file/original-393fef8139f96de87292369aec7aed6e.png"
                                name="Apple Imac 27-Inch"
                                price="$18.00"
                                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                            />
                            <ProductCard
                                imageSrc="https://cdn.dribbble.com/userupload/7903448/file/original-393fef8139f96de87292369aec7aed6e.png"
                                name="Apple Imac 27-Inch"
                                price="$18.00"
                                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Marketplace;
