import React , { useState } from 'react';
import { imagesBanner } from '../../resource/Banner';

function Banner() {

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const handlePreviousClick = () => {
    console.log(activeImageIndex);
    setActiveImageIndex(
      !activeImageIndex ?  imagesBanner.length - 1 : activeImageIndex - 1
    )
  }

  const handleNextClick = () => {
    console.log(activeImageIndex);
    setActiveImageIndex((activeImageIndex + 1) % imagesBanner.length)
  }
  
  return (
    <div className='flex justify-center'>
      <button className='absolute left-10 top-[35%]'
        onClick={handlePreviousClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-100">
          <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
      </button>
      {imagesBanner.map((item, index) => (
        <img
          src={item}
          alt="img"
          key={index}
          className={`w-full h-[60vh] object-cover ${activeImageIndex === index ? "" : "hidden"}`}
        />
      ))}
      <button className='absolute right-10 top-[35%]'
        onClick={handleNextClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-100">
          <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

export default Banner;
