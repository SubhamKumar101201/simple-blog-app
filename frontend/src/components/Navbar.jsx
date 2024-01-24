import React from 'react'
import { Navigate } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-[100%] flex items-center justify-between border border-blue-700 bg-gradient-to-br from-blue-500 via-blue-800 to-cyan-400 py-4'>
            <img src="../../resource/blog.png" alt="logo" className='h-8 ml-6 cursor-pointer' />
            <ul className='flex'>
                <li className='mr-4 cursor-pointer text-blue-200'>Home</li>
                <li className='mr-4 cursor-pointer text-blue-200'>Contact</li>
                <li className='mr-4 cursor-pointer text-blue-200'>About</li>
                <li className='cursor-pointer text-blue-200'>Logout</li>
            </ul>
                <input type="text" placeholder="Search" className='flex items-center h-8 px-4 bg-transparent border-none outline-none bg-slate-200 rounded-3xl mr-6'/>
        </div>

    )
}

export default Navbar

//w-full flex items-center h-16 