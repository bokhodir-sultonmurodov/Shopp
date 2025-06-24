import Features from "@/components/features/Features";
import Herro from "@/components/hero/Herro";
import {
  decrementCart,
  incrementCart,
  removeCart,
} from "@/redux/features/cart";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

 

  return (
    <div className="w-full">
      <Herro />

      <div className="w-full flex flex-col lg:flex-row justify-between gap-10 px-4 sm:px-8 lg:px-16 py-10">
        <div className="w-full lg:w-[70%]">
          <div className="grid grid-cols-4 bg-[#F9F1E7] px-6 py-4 rounded-t-md">
            <p className="col-span-2 text-sm font-semibold text-[#333]">Product</p>
            <p className="text-sm font-semibold text-[#333]">Price</p>
            <p className="text-sm font-semibold text-[#333] text-right">Quantity</p>
          </div>

          {cart.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-4 items-center border-b border-[#ccc] px-6 py-6 bg-white"
            >
              <div className="col-span-2 flex items-center gap-4">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-[80px] h-[80px] rounded-md object-cover bg-[#F9F1E7]"
                />
                <p className="text-[#898989] text-sm font-medium">{product.title}</p>
              </div>

              <p className="text-[#898989] text-sm font-medium">
                {product.price}
              </p>

              <div className="flex items-center justify-end gap-4">
                <button
                  className="px-2 py-1 text-lg font-bold border cursor-pointer rounded-md disabled:opacity-40"
                  disabled={product.quantity <= 1}
                  onClick={() => dispatch(decrementCart(product))}
                >
                  −
                </button>
                <span className="min-w-[32px] text-center">{product.quantity}</span>
                <button
                  className="cursor-pointer px-2 py-1 text-lg font-bold border rounded-md"
                  onClick={() => dispatch(incrementCart(product))}
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeCart(product))}
                  className=" cursor-pointer text-[#B88E2F]"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-[30%] bg-[#F9F1E7] p-8 rounded-md shadow-sm h-fit">
          <h2 className="text-xl font-bold text-[#333] mb-6 text-center">Cart Totals</h2>

          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-semibold text-[#333]">Subtotal</p>
            <p className="text-sm text-[#898989]"></p>
          </div>

          <div className="flex justify-between items-center mb-8">
            <p className="text-sm font-semibold text-[#333]">Total</p>
            <p className="text-sm font-bold text-[#B88E2F]">{cart.reduce((sum, item) => sum + (item.price * item.quantity) , 0)}</p>
          </div>

          <button className="w-full py-3 border border-black rounded-md text-sm font-medium hover:bg-black hover:text-white transition duration-200">
            Check Out
          </button>
        </div>
      </div>

      <Features />
    </div>
  );
};

export default Cart;
