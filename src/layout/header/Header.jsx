import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  UserOutlined,
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Drawer } from 'antd';
import logo from "@/assets/vite.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-6 md:px-8 py-4 md:py-6 container mx-auto flex items-center justify-between">
     
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-[40px] sm:w-[50px] h-auto" />
        <h1 className="text-[24px] sm:text-[30px] md:text-[34px] font-bold text-[#000]">Furniro</h1>
      </div>

     
      <nav className="hidden md:flex gap-[30px] lg:gap-[75px] text-[14px] sm:text-[16px] font-medium text-[#000000]">
        <NavLink to="/" className="hover:text-yellow-700">Home</NavLink>
        <NavLink to="/shop" className="hover:text-yellow-700">Shop</NavLink>
        <NavLink to="/wishlist" className="hover:text-yellow-700">Wishlist</NavLink>
        <NavLink to="/cart" className="hover:text-yellow-700">Cart</NavLink>
      </nav>

     
      <div className="hidden md:flex items-center gap-4 sm:gap-6 lg:gap-[45px] text-black text-lg">
        <button ><UserOutlined style={{ fontSize: '22px'}}  /></button>
        <button ><SearchOutlined style={{ fontSize: '22px' }} /></button>
        <button ><HeartOutlined style={{ fontSize: '22px' }} /></button>
        <button ><ShoppingCartOutlined style={{ fontSize: '22px' }} /></button>
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
            <NavLink onClick={() => setOpen(false)}  to="/">Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/shop">Shop</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/wishlist">Wishlist</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/cart">Cart</NavLink>
            <div className="flex gap-4 mt-4 text-black">
              <UserOutlined />
              <SearchOutlined />
              <HeartOutlined />
              <ShoppingCartOutlined />
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default React.memo(Header);
