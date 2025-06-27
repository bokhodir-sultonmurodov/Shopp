import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeWishlist } from "@/redux/features/wishlist";
import { FaTrashAlt } from "react-icons/fa";
import Herro from "@/components/hero/Heroo";
import Features from "@/components/features/Features";
import emptyImg from "@/assets/like.svg";
import { NavLink } from "react-router-dom";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full">
      {/* <Herro title="Your Wishlist" /> */}

      {!wishlist.length ? (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 text-center">
          <img
            src={emptyImg}
            alt="Empty Wishlist"
            className="w-[120px] mb-4 opacity-80"
          />
          <h2 className="text-[#B88E2F] text-lg sm:text-xl font-semibold mb-2">
            Your wishlist is empty.
          </h2>
          <NavLink
            to="/shop"
            className="mt-2 inline-block px-4 py-1 text-sm bg-[#B88E2F] text-white font-medium rounded hover:bg-[#b88f2fdb] transition"
          >
            Go to Shopping
          </NavLink>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-between gap-10 px-4 sm:px-8 lg:px-16 py-10">
          <div className="w-full">
            <div className="grid grid-cols-3 bg-[#F9F1E7] px-6 py-4 rounded-t-md">
              <p className="col-span-2 text-sm font-semibold text-[#333]">Product</p>
              <p className="text-sm font-semibold text-[#333] text-right">Remove</p>
            </div>

            {wishlist.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-3 items-center border-b border-[#ccc] px-6 py-6 bg-white"
              >
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-[80px] h-[80px] rounded-md object-cover bg-[#F9F1E7]"
                  />
                  <p className="text-[#898989] text-sm font-medium">
                    {product.title}
                  </p>
                </div>

                <div className="flex items-center justify-end">
                  <button
                    onClick={() => dispatch(removeWishlist(product))}
                    className="cursor-pointer text-[#B88E2F]"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Features />
    </div>
  );
};

export default React.memo(Wishlist);
