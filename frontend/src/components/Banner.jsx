import React, { useState, useEffect } from 'react';
import BannerImgs from '../../resource/BannerImgs';

function Banner() {

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const imgUrls = BannerImgs();

  const handlePreviousClick = () => {
    setActiveImageIndex(
      !activeImageIndex ? imgUrls.length - 1 : activeImageIndex - 1
    )
  }

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % imgUrls.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick()
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div className='flex justify-center mb-2 mx-2'>
      <button className='absolute left-10 top-[50%]'
        onClick={handlePreviousClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-200 hover:rounded-full hover:border-zinc-400 hover:border hover:bg-zinc-300 hover:text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <div className='w-full h-[70vh]'>
        {imgUrls.map((item, index) => (
          <img
            src={item}
            alt="img"
            key={index}
            className={`w-full h-[70vh] rounded-sm shadow-xl object-cover ${activeImageIndex === index ? "" : "hidden"}`}
          />
        ))}
      </div>
      <button className='absolute right-10 top-[50%]'
        onClick={handleNextClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-200 hover:rounded-full hover:border-zinc-400 hover:border hover:bg-zinc-300 hover:text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

export default Banner;
