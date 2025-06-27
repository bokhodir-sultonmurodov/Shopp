import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Drawer } from 'antd';
import logo from "@/assets/vite.svg";
import { useSelector } from 'react-redux';
import { useProduct } from '@/api/hooks/useProduct';
import useDebounce from '@/hooks/useDebounce';

const Header = () => {
  const { getSearchPdroduct } = useProduct();
  const [value, setValue] = useState("");
  const text = useDebounce(value);
  const { data } = getSearchPdroduct({ q: text.trim() });
  const [open, setOpen] = useState(false);
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <header className="bg-white z-[999] w-full shadow">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-6 flex items-center justify-between flex-wrap gap-y-3">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-[40px] sm:w-[50px] h-auto" />
          <NavLink to="/" className="text-[24px] sm:text-[30px] md:text-[34px] font-bold text-[#000]">Furniro</NavLink>
        </div>

        <nav className="hidden md:flex gap-[30px] lg:gap-[75px] text-[14px] sm:text-[16px] font-medium text-[#000000]">
          <NavLink to="/" className="hover:text-yellow-700">Home</NavLink>
          <NavLink to="/shop" className="hover:text-yellow-700">Shop</NavLink>
          <NavLink to="/contact" className="hover:text-yellow-700">Contact</NavLink>
        </nav>

        <div className="relative hidden md:block w-[180px] sm:w-[220px] lg:w-[250px]">
          <input
            value={value}
            onChange={handleChange}
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded px-3 pr-10 py-[6px] outline-none text-sm"
          />
          <SearchOutlined
            style={{ fontSize: '18px' }}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
          />

          {
            data?.data?.products.length ?
              <div className="absolute top-full mt-2 bg-white w-full max-h-[300px] overflow-y-auto shadow-lg rounded-lg z-50 border border-gray-200 p-3">
                {
                  data?.data?.products.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 py-2 border-b last:border-b-0">
                      <img
                        onClick={() => {
                          navigate(`/product/${item.id}`);
                          setValue("");
                        }}
                        src={item.thumbnail}
                        width={50}
                        height={50}
                        className="rounded object-cover cursor-pointer"
                        alt={item.title}
                      />
                      <div className="text-sm font-medium">{item.title}</div>
                    </div>
                  ))
                }
              </div>
              : value ?
                <p className="absolute top-full mt-2 text-gray-500 text-sm bg-white shadow px-4 py-2 rounded">Not Found</p>
                :
                <></>
          }
        </div>

        <div className="hidden md:flex items-center gap-4 sm:gap-6 lg:gap-[45px] text-black text-lg relative">
          <button><UserOutlined style={{ fontSize: '22px' }} /></button>

          <div className="relative">
            <NavLink onClick={() => setOpen(false)} to="/wishlist">
              <HeartOutlined />
            </NavLink>
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full px-[6px] h-[16px] flex items-center justify-center">
              {wishlist.length}
            </span>
          </div>

          <div className="relative">
            <NavLink onClick={() => setOpen(false)} to="/cart">
              <ShoppingCartOutlined />
            </NavLink>
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full px-[6px] h-[16px] flex items-center justify-center">
              {cart.length}
            </span>
          </div>
        </div>

        <div className="md:hidden">
          <MenuOutlined onClick={() => setOpen(true)} style={{ fontSize: '18px' }} />
          <Drawer
            title="Menu"
            placement="left"
            onClose={() => setOpen(false)}
            open={open}
          >
            <div className="flex flex-col gap-4 text-lg font-medium ">
              <NavLink onClick={() => setOpen(false)} to="/">Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/shop">Shop</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/wishlist">Wishlist</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/cart">Cart</NavLink>

              <div className="flex items-center gap-6 mt-6 text-xl text-black relative">
                <button><UserOutlined /></button>

                <div className="relative">
                  <NavLink onClick={() => setOpen(false)} to="/wishlist">
                    <HeartOutlined />
                  </NavLink>
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] rounded-full px-[6px] h-[16px] flex items-center justify-center">
                    {wishlist.length}
                  </span>
                </div>

                <div className="relative">
                  <NavLink onClick={() => setOpen(false)} to="/cart">
                    <ShoppingCartOutlined />
                  </NavLink>
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] rounded-full px-[6px] h-[16px] flex items-center justify-center">
                    {cart.length}
                  </span>
                </div>
              </div>
            </div>
          </Drawer>

        </div>

        <div className="block md:hidden w-full mt-2 px-1">
          <div className="relative w-full">
            <input
              value={value}
              onChange={handleChange}
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded px-3 pr-10 py-[6px] outline-none text-sm"
            />
            <SearchOutlined
              style={{ fontSize: '18px' }}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
            />

            {
              data?.data?.products.length ?
                <div className="absolute top-full mt-2 bg-white w-full max-h-[300px] overflow-y-auto shadow-lg rounded-lg z-50 border border-gray-200 p-3">
                  {
                    data?.data?.products.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 py-2 border-b last:border-b-0">
                        <img
                          onClick={() => {
                            navigate(`/product/${item.id}`);
                            setValue("");
                          }}
                          src={item.thumbnail}
                          width={50}
                          height={50}
                          className="rounded object-cover cursor-pointer"
                          alt={item.title}
                        />
                        <div className="text-sm font-medium">{item.title}</div>
                      </div>
                    ))
                  }
                </div>
                : value ?
                  <p className="absolute top-full mt-2 text-gray-500 text-sm bg-white shadow px-4 py-2 rounded">Not Found</p>
                  :
                  <></>
            }
          </div>
        </div>

      </div>
    </header>
  );
};

export default React.memo(Header);
