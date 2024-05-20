import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { API } from '../services/api';
import { useSearchParams } from 'react-router-dom';

function Posts() {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  // const initialCategory = ;
  const [category, setCategory] = useState(searchParams.get('category') || '');

  useEffect(() => {
    const newCategory = searchParams.get('category') || '';
    setCategory(newCategory);
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(category);
        const response = await API.getPosts({ category: category.toLowerCase() });

        if (response.isSuccess) {
          setData(response.data.msg);
        } else {
          console.log('Something went wrong!');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className='h-[130vh] m-2 overflow-auto scroll-smooth hide-scroll'>
      {data.length > 0 ?
        data.map((item, index) => (
          <Cards key={index} data={item} />
        ))
        :
        <div className='flex items-center justify-center h-screen border shadow-xl m-4 rounded-md text-black font-medium'>
          There is no such posts in this category...
        </div>
      }
    </div>
  );
}

export default Posts;
