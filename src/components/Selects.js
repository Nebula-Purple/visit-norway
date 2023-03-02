import React from 'react'
import rives from '../assets/rives.jpg';
import rives2 from '../assets/rives2.jpg'; 
import snow from '../assets/snow.jpg'; 
import waterfall from '../assets/waterfall.jpg'; 
import city from '../assets/city.jpg'; 
import lake from '../assets/lake.jpg'; 


const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid lg:grid-cols-2 md:grid-cols-3 gap-4'>

      <div className='relative object-cover'>
        <img src={rives} alt="" />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
          <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Waijarang</p>
      </div>
      </div>
      <div className='relative object-cover'>
        <img src={rives2} alt="" />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
          <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Rives</p>
        </div>
      </div>
      <div className='relative object-cover'>
        <img src={snow} alt="" />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
          <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Snow</p>
        </div>
      </div>
      <div className='relative object-cover'>
        <img src={waterfall} alt="" />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
          <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Waterfall</p>
        </div>
      </div>
      <div className='relative object-cover'>
        <img className='h-full w-full' src={lake} alt="" />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
          <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Lake</p>
        </div>
      </div>
      <div className='relative object-cover'>
        <img src={city} alt="" />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
          <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>City</p>
        </div>
      </div>
    </div>
  )
}

export default Selects