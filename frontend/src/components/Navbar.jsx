import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-[100%] flex items-center justify-between py-4 border-b bg-slate-200 border-solid border-gray-200'>
            <Link to="/home">
                <img src="../../resource/blog.png" alt="logo" className='h-8 ml-6 cursor-pointer' />
            </Link>
            <ul className='flex mr-6'>
                <Link to="/home" className='mr-4 cursor-pointer text-blue-500' >Home</Link>
                <Link to="/contact" className='mr-4 cursor-pointer text-blue-500' >Contact</Link>
                <Link to="/about" className='mr-4 cursor-pointer text-blue-500' >About</Link>
                <Link to="/" className='mr-4 cursor-pointer text-blue-500' >Logout</Link>
            </ul>
        </div>

    )
}

export default Navbar
