import React, {useState} from 'react'
import {BsArrowRightSquareFill, BsArrowLeftSquareFill} from 'react-icons/bs'

const SliderData = [
    {
        url: 'https://images.unsplash.com/photo-1554417063-60e738613596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2058&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1536683402757-75f8d0dfa419?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1487424439918-bc6b5bef0380?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1459695452562-46cc57bef5f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      },
      {
        url: 'https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      },
      {
        url: 'https://images.unsplash.com/photo-1518873890627-d4b177c06e51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      }
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = SliderData.length;

  const prevSlide = () =>{
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  const nextSlide = () => {
    setSlide (slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      <BsArrowLeftSquareFill 
      onClick={prevSlide}
      className='absolute top-[50%] text-4xl text-white cursor-pointer left-10'/>
      <BsArrowRightSquareFill 
      onClick={nextSlide}
      className='absolute top-[50%] text-4xl text-white cursor-pointer right-10'/>
        {SliderData.map((item, index) =>(
            <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
                {index === slide && (<img className='w-full rounded-md' src={item.url} alt='/'/>)}
            </div>
        ))}
    </div>
  );
};

export default Carousel