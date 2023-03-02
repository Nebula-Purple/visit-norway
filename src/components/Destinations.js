import React from 'react'
import aurora1 from '../assets/img/aurora1.jpg'
import aurora6 from '../assets/img/aurora6.jpg'
import aurora3 from '../assets/img/aurora3.jpg'
import aurora4 from '../assets/img/aurora4.jpg'
import aurora5 from '../assets/img/aurora5.jpg'



const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Aurora</h1>
        <p className='py-3'>On the Aurora Borealis Best in the World</p>
        <div className='border grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={aurora1} alt="/" />
            <img className='w-full h-full object-cover' src={aurora6} alt="/" />
            <img className='w-full h-full object-cover' src={aurora3} alt="/" />
            <img className='w-full h-full object-cover' src={aurora4} alt="/" />
            <img className='w-full h-full object-cover' src={aurora5} alt="/" />
        </div>
    </div>
  )
}

export default Destinations;