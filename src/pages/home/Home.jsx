import { useProduct } from '@/api/hooks/useProduct'
import Carousel from '@/components/carousel/Carousel'
import Hero from '@/components/hero/Hero'
import Living from '@/components/Living.jsx/Living'
import Products from '@/components/products/Products'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { getProduct } = useProduct()
  const { data, isLoading } = getProduct({ limit: 8 })
  const navigate = useNavigate();
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className=''>
      {/* <h2>Home</h2> */}
      <Hero />
      <Living />
      <Products data={data?.data?.products} loading={isLoading} count={8} />
      <div className='text-center'>

        <button
          onClick={() => navigate("/shop")}
          className="mt-8 mb-8 px-[74px] py-[12px] bg-white text-black border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition duration-150 font-semibold cursor-pointer"
        >
          Show More
        </button>
      </div>
      <Carousel />
      <div>
      </div>
    </div>
  )
}

export default React.memo(Home)