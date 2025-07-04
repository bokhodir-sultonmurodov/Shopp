import React, { useState } from "react";
import { HeartOutlined, HeartFilled, EyeOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/redux/features/wishlist";
import { addToCart } from "@/redux/features/cart";
import { useNavigate } from "react-router-dom";

const ProductItem = (product) => {
  const { id, title, brand, price, thumbnail, category, discountPercentage } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.wishlist.value);
  return (
    <div key={id} className="relative group bg-white transition p-4 rounded-md">
      <div className="relative overflow-hidden rounded-md">
        <img
         onClick={() => navigate(`/product/${id}`)}
          src={thumbnail}
          alt={title}
          className="cursor-pointer rounded-md w-full h-48 object-cover group-hover:scale-105 duration-300"
        />
      </div>

      <button
        onClick={() => dispatch(toggleWishlist(product))}
        className="absolute top-4 right-4 cursor-pointer bg-white size-7 grid place-items-center rounded-full"
      >
        {wishlist.some((item) => item.id === product.id) ? (
          <HeartFilled />
        ) : (
          <HeartOutlined />
        )}
      </button>

      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{category}</p>
      <p className="text-black font-bold mt-2">Rp {discountPercentage} usd</p>
      <p className="text-sm line-through text-gray-400">Rp {price} usd</p>

      <span className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
        New
      </span>

      <div className="mt-4 relative flex justify-between items-center">
        
        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-[100%] py-2 bg-white text-[#B88E2F] cursor-pointer font-medium rounded hover:bg-[#B88E2F] hover:text-white transition duration-200"
        >
          Add to Cart
        </button>

    
      </div>
    </div>


  );
};

export default React.memo(ProductItem);
