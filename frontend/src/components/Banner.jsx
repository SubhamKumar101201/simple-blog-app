import React, { useState, useEffect } from 'react';
// import BannerImgs from '../../resource/BannerImgs';
import { API } from '../services/api';

function Banner() {

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const [imgUrls,setImgUrls] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await API.getPosts({})
        if(response.isSuccess) {
          setImgUrls(response.data.msg)
        } else {
          console.log('Something went wrong!');
        }
      } catch (e) {
        console.error('Error fetching data:',e)
      }
    }  
    fetchPost();  
  },[])

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
    <div className='relative flex justify-center mb-2 mx-2'>
      <button className='absolute left-10 top-[50%] z-10'
        onClick={handlePreviousClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-200 hover:rounded-full hover:border-zinc-400 hover:border hover:bg-zinc-300 hover:text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <div className='w-full h-[70vh] relative'>
        {imgUrls.map((item, index) => (
          <div key={index} className={`w-full h-full relative ${activeImageIndex === index ? "" : "hidden"}`}>
            <div className='absolute top-5 left-5 text-white text-xl bg-black bg-opacity-50 p-2 rounded'>
              {item.title}
            </div>
            <img
              src={item.image_url}
              alt="img"
              className="w-full h-full rounded-sm shadow-xl object-cover"
            />
          </div>
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
