import React from 'react'

function Fileupload(props) {
  return (
    <div className='w-[75vw] h-[50vh] flex object-cover justify-center mt-10'>
        <img src={props.imgUrl}
             alt=""
             className='object-contain w-[75vw]'
              />
    </div>
  )
}

export default Fileupload