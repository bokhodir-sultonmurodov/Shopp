import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "@/api/hooks/useProduct";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart";

const Productdetail = () => {
    const { id } = useParams();
    const { getProductById } = useProduct();
    const { data: product, isLoading } = getProductById(id);
    const dispatch = useDispatch();
     useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    
    if (isLoading) return <div className="text-center py-10">Loading...</div>;

    const {
        title,
        brand,
        price,
        thumbnail,
        category,
        discountPercentage,
        rating,
        stock,
        images,
        description,
    } = product;

    return (
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex gap-4">
                <div className="flex flex-col gap-4">
                    {images?.map((img, index) => (
                        <img key={index} src={img} alt={title} className="w-20 h-20 object-cover border rounded" />
                    ))}
                </div>
                <div className="flex-1 bg-gray-100 rounded-md flex justify-center items-center min-h-[400px]">
                    <img src={thumbnail} alt={title} className="max-h-[380px]" />
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-gray-500 text-lg mt-1">Rs {price} usd</p>

                <div className="flex items-center gap-2 mt-2">
                    <div className="text-yellow-500">⭐ {rating}</div>
                    <p className="text-gray-500 text-sm">({stock} in stock)</p>
                </div>

                <p className="text-black mt-4">{description}</p>

                <div className="mt-6">
                    <h4 className="font-semibold text-[#9F9F9F] mb-2">Size</h4>
                    <div className="flex gap-2">
                        <button className="bg-[#F9F1E7] px-4 py-2 rounded text-sm text-black hover:bg-[#B88E2F] hover:text-white transition">
                            L
                        </button>
                        <button className="bg-[#F9F1E7] px-4 py-2 rounded text-sm text-black hover:bg-[#B88E2F] hover:text-white transition">
                            XL
                        </button>
                        <button className="bg-[#F9F1E7] px-4 py-2 rounded text-sm text-black hover:bg-[#B88E2F] hover:text-white transition">
                            XS
                        </button>
                    </div>
                </div>


                <div className="mt-6">
                    <h4 className="font-semibold mb-2">Color</h4>
                    <div className="flex gap-3">
                        <span
                            className="w-6 h-6 rounded-full border border-gray-300"
                            style={{ backgroundColor: '#7e22ce' }}
                        ></span>
                        <span
                            className="w-6 h-6 rounded-full border border-gray-300"
                            style={{ backgroundColor: '#000000' }}
                        ></span>
                        <span
                            className="w-6 h-6 rounded-full border border-gray-300"
                            style={{ backgroundColor: '#d4af37' }}
                        ></span>
                    </div>

                </div>

                <div className="mt-6">
                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className="bg-[#fff] text-black font-semibold border border-black rounded-full hover:bg-black hover:text-white transition duration-200 px-[48px] py-[17px]"
                    >
                        Add to Cart
                    </button>


                </div>

                <div className="mt-8 space-y-2 text-sm text-gray-600">
                    <p><strong>Brand:</strong> {brand}</p>
                    <p ><strong>Category:</strong> {category}</p>
                    <p><strong>Discount:</strong> {discountPercentage}%</p>
                    <p><strong>Left:</strong> {stock}</p>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Productdetail);
