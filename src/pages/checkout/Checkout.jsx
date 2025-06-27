import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Button, Form, Input, Select } from 'antd';
import { PatternFormat } from 'react-number-format';
import axios from 'axios';
import { clearCart } from '@/redux/features/cart';
import Features from '@/components/features/Features';

const { Option } = Select;

const Checkout = () => {
  const cart = useSelector((state) => state.cart.value);
  const BOT_URL = "7873824231:AAFaca64wt2vIFgGK4CWDuhBBy-l7vjSnOs";
  const USER_ID = "8162873503";
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!cart.length) {
    return <Navigate replace to="/cart" />;
  }

  const onFinish = (values) => {
    let text = "";
    text += `Name: ${values.firstName} ${values.lastName} %0A`;
    text += `Country: ${values.country} %0A`;
    text += `Address: ${values.address} %0A`;
    text += `Phone: ${values.phone} %0A`;

    cart.forEach((product) => {
      text += `🛒 ${product.title} - ${product.quantity} x ${product.price} = ${product.quantity * product.price} %0A`;
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    text += `%0A💰 Total: ${total}`;

    axios.get(`https://api.telegram.org/bot${BOT_URL}/sendMessage?chat_id=${USER_ID}&text=${text}`)
      .then(() => dispatch(clearCart()));
  };

  return (
    <>
    
    <div className="container mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Billing details</h2>
          <Form layout="vertical" onFinish={onFinish} autoComplete="off">
            <div className="grid md:grid-cols-2 gap-4">
              <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </div>

            <Form.Item name="country" label="Country / Region" rules={[{ required: true }]}>
            <Input/>
            </Form.Item>

            <Form.Item name="address" label="Street address" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name="city" label="Town / City" rules={[{ required: true }]}>
              <Input />
            </Form.Item>


            <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
              <PatternFormat
                customInput={Input}
                format="+998 ## ### ## ##"
                allowEmptyFormatting
                mask="_"
              />
            </Form.Item>

            <Button
              htmlType="submit"
              className="bg-black text-white hover:bg-gray-800 border border-black rounded px-6 py-2 mt-4"
              style={{ width: '100%' }}
            >
              Place order
            </Button>
          </Form>
        </div>

        <div className=" p-6 rounded-md shadow-sm h-fit">
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2 text-sm">
              <span>{item.title} x {item.quantity}</span>
              <span>Rs. {item.price * item.quantity}</span>
            </div>
          ))}
          <div className="flex justify-between mt-4 font-medium text-base">
            <span>Subtotal</span>
            <span>Rs. {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
          </div>
          <div className="flex justify-between mt-2 font-bold text-lg">
            <span>Total</span>
            <span style={{ color: '#B88E2F' }}>
              Rs. {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
            </span>
          </div>
        </div>
      </div>
    </div>
      <Features/>
    </>
  );
};

export default Checkout;
