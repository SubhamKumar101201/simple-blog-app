import React, { useState } from 'react';

function Cards({ data }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className='flex border-2 rounded-lg shadow-lg w-auto h-[400px] mx-5 my-3 overflow-hidden'>
      <div className='w-1/3'>
        <img src={data.image_url} alt={data.title} className='w-full h-full object-cover rounded-l-lg' />
      </div>
      <div className='w-2/3 p-4 overflow-hidden'>
        <h2 className='text-xl font-bold mb-2'>{data.title}</h2>
        <p className='text-gray-600 mb-1'>Category: {data.category.charAt(0).toUpperCase() + data.category.slice(1)}</p>
        <p className='text-gray-600 mb-1'>
          Date of Posting: {new Date(data.createdAt).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
        </p>
        <div className={`h-[250px] overflow-y-auto ${showFullDescription ? 'overflow-y-scroll' : ''} custom-scroll`}>
          <p className='text-gray-600 mb-2'>
            {showFullDescription ? data.description : `${data.description.slice(0, 580)}...`}
            {data.description.length > 580 && (
              <button className="text-blue-600" onClick={toggleDescription}>
                {showFullDescription ? 'See less' : 'See more'}
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
