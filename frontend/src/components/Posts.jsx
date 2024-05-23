import React, { useContext, useEffect, useState } from 'react';
import Cards from './Cards';
import PostContext from '../utility/PostContext';

function Posts() {
  const { posts, category } = useContext(PostContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (category === 'all') {
      setData(posts);
    } else {
      const filteredPosts = posts.filter(post => post.category === category);
      setData(filteredPosts);
    }
  }, [posts, category]);

  return (
    <div className='h-[130vh] m-2 overflow-auto scroll-smooth hide-scroll'>
      {data.length > 0 ? (
        data.map((item, index) => (
          <Cards key={index} data={item} />
        ))
      ) : (
        <div className='flex items-center justify-center h-screen border shadow-xl m-4 rounded-md text-black font-medium'>
          There is no such posts in this category...
        </div>
      )}
    </div>
  );
}

export default Posts;
