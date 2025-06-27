import { useProduct } from "@/api/hooks/useProduct";
import Features from "@/components/features/Features";
import Heroo from "@/components/hero/Heroo";
import Products from "@/components/products/Products";
import { Pagination } from "antd";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate()
  const { getProduct } = useProduct();

  const [params, setParams] = useSearchParams()
  // const [page, setPage] = useState(1);
  const page = params.get("page") || 1
  const pageSize = params.get("pageSize") || 16
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [page, pageSize]);


  const { data, isLoading } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  const handleChangePage = (page, pageS) => {
    // setPage(page);
    if(pageS !== pageSize){
      params.set("pageSize", pageS)
      params.set("page", "1")
    }else{
      params.set("page", page)
    }
    setParams(params)
  };

  return (
    <div>
      {/* <h2>Shop</h2> */}
      <Heroo/>
      <Products data={data?.data?.products} loading={isLoading} count={16}/>
      <div className="flex justify-center my-6 ">
        <Pagination
          current={page}
          onChange={handleChangePage}
          total={data?.data?.total}
          pageSize={pageSize}
        />
      </div>
      <Features/>
    </div>
  );
};

export default React.memo(Shop);
