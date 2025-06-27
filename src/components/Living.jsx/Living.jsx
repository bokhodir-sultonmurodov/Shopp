import React from 'react'
import mask from "@/assets/mask.svg"
import living from "@/assets/living.svg"
import bedroom from "@/assets/bedroom.svg"


const Living = () => {
  return (
    <div className='mt-[56px]  mb-[62px]'>
        <div className=' text-center ' >

        <h3 className='text-[32px] font-bold'>Browse The Range</h3>
        <br />
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </div>
        <div className='container mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
            <div className='flex flex-col items-center  text-center  gap-4 p-4'>
                <img src={mask} alt="" />
                <h4 className='text-[24px] font-semibold'>Dining</h4>
            </div>
            <div className='flex flex-col items-center  text-center gap-4 p-4 '>
                <img src={living} alt="" />
                <h4 className='text-[24px] font-semibold'>Living</h4>
            </div>
           <div className='flex flex-col items-center  text-center  gap-4 p-4'>
                <img src={bedroom} alt="" />
                <h4 className='text-[24px] font-semibold'>Bedroom</h4>
            </div>
           
        </div>
    </div>
  )
}

export default React.memo(Living)