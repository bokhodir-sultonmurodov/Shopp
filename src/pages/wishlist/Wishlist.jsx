import Products from '@/components/products/Products';
import React from 'react';
import { useSelector } from 'react-redux';
import { Empty } from 'antd'; // ⬅️ Antd dan Empty import qilingan

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  console.log(wishlist);

  return (
    <div>
      {wishlist.length ? (
        <Products data={wishlist} />
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <span className="text-gray-500 text-sm">
              Wish List hozircha bo‘sh
            </span>
          }
        />
      )}
    </div>
  );
};

export default Wishlist;
