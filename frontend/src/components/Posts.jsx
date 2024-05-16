import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { API } from '../services/api';

function Posts() {

  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.getPosts();

        if (response.isSuccess) {
          setData(response.data.msg)
        } else {
          console.log('Something went wrong!');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  return (
    <div className='h-[130vh] m-2 overflow-auto scroll-smooth hide-scroll'>
      {/* <div className='flex flex-col items-center justify-center w-full'> */}
      {data.map((item, index) => (
        <Cards key={index} data={item} />
      ))}
      {/* </div> */}
    </div>

  )
}

export default Posts