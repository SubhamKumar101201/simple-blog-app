import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { API } from '../services/api'
import { Button } from '@mui/material'

function Signup() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const onButtonClick = async (e) => {
        e.preventDefault()
        try {
            let response = await API.userSignup({ name, email, password })

            if (response.isSuccess) {
                navigate('/', { state: { email, password } });
            } else {
                setError('Something went error!')
            }
        } catch (err) {
            console.log(err)
            alert('Internal server error while feching data form API')
            setError('Internal server error while feching data form API')
        }


    }

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded shadow-md'>
                <h1 className='text-2xl mb-4'>Signup</h1>

                <form action="POST" className='flex flex-col gap-3'>
                    <input
                        type="text"
                        onChange={(e) => { setName(e.target.value) }}
                        placeholder='Enter your name here'
                        className='border p-2'
                    />
                    <input
                        type="email"
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder='Enter your email here'
                        className='border p-2'
                    />
                    <input
                        type="password"
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder='Enter your password here'
                        className='border p-2'
                    />
                    <Button
                        variant="contained"
                        onClick={onButtonClick}
                    >
                        Login
                    </Button>
                </form>
                <br />
                <p className='text-gray-600 flex flex-col items-center'>OR</p>
                <Link to='/' className='text-blue-500 hover:underline flex flex-col items-center'>
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Signup
