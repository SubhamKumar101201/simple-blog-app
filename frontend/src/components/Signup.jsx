import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from '@mui/material'

function Signup() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onButtonClick = async (e) => {
        e.preventDefault()
        
        // try {
        //     await axios.post("http://localhost:9000/signup", {
        //         name, email, password
        //     }).then(res => {
        //         if (res.data === 'exist') {
        //             alert('user already exist')
        //         } else if (res.data === 'missing' ) {
        //             alert('fields are missing')
        //         } else if (res.data = 'resgistered') {
        //             navigate('/home', { state: { id: email } })
        //         }
        //     })
        //         .catch(e => {
        //             alert('wrong details')
        //             console.log(e)
        //         })
        // } catch (e) {
        //     console.log(e)
        // }
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
