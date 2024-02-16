import React, { useState , useEffect } from 'react'
import Navbar from '../components/Navbar'
import BannerImgs from '../../resource/BannerImgs';
import { Button, Input, InputBase, TextField } from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';


function Post() {
  const imgUrls = BannerImgs();
  const [imgUrl, setImgUrl] = useState(0)

  useEffect(() => {
    setImgUrl(Math.floor(Math.random() * imgUrls.length+1))
  } ,[])

  return (
    <div>
        <Navbar />
        <div className='flex items-center flex-col'>
            <img src=
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
            // {imgUrls[imgUrl]}
             alt=""
             className='h-[75vh] w-[75vw] mt-10'
              />
              <div className='flex gap-4 mt-10 w-[75vw]'>
                <Input fullWidth placeholder="Title" />
                <button className='py-2 px-2 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded transition-colors duration-300'> PUBLISH </button>
              </div>
              <textarea className="hover:border-2 hover:border-gray-800 focus:border-none focus:outline-blue-600 mt-10 mb-12 w-[75vw] border border-gray-500 p-2 min-h-20" placeholder="Empty" />
        </div>
    </div>
  )
}

export default Post