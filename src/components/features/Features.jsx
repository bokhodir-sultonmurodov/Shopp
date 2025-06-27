import React from "react";
import {
  TrophyOutlined,
  SafetyCertificateOutlined,
  CarOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

const Features = () => {
  return (
    <section className="w-full bg-[#FAF3EA] py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        
        <div className="flex flex-col items-center">
          <TrophyOutlined style={{ fontSize: "32px", marginBottom: "8px" }} />
          <h3 className="font-semibold">High Quality</h3>
          <p className="text-sm text-gray-500">crafted from top materials</p>
        </div>

        <div className="flex flex-col items-center">
          <SafetyCertificateOutlined style={{ fontSize: "32px", marginBottom: "8px" }} />
          <h3 className="font-semibold">Warranty Protection</h3>
          <p className="text-sm text-gray-500">Over 2 years</p>
        </div>

        <div className="flex flex-col items-center">
          <CarOutlined style={{ fontSize: "32px", marginBottom: "8px" }} />
          <h3 className="font-semibold">Free Shipping</h3>
          <p className="text-sm text-gray-500">Order over 150 $</p>
        </div>

        <div className="flex flex-col items-center">
          <CustomerServiceOutlined style={{ fontSize: "32px", marginBottom: "8px" }} />
          <h3 className="font-semibold">24 / 7 Support</h3>
          <p className="text-sm text-gray-500">Dedicated support</p>
        </div>

      </div>
    </section>
  );
};

export default React.memo(Features);
