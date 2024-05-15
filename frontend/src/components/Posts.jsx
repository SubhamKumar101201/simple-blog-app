import React from 'react'
import Cards from './Cards'

function Posts() {
  return (
    <div className='h-[130vh] m-2 overflow-auto scroll-smooth'>
    {/* <div className='flex flex-col items-center justify-center w-full'> */}
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
    {/* </div> */}
</div>

  )
}

export default Posts