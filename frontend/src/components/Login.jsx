import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onButtonClick = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:9000/", {
                email, password
            }).then(res => {
                if (res.data.response === 'exist') {
                    navigate('/home', { state: { id: email , name:res.data.data[0].name } })
                } else if (res.data === 'notexist') {
                    alert('user have not sign up')
                }
            })
                .catch(e => {
                    alert('wrong details')
                    console.log(e)
                })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded shadow-md'>
                <h1 className='text-2xl mb-4'>Login</h1>

                <form action="POST" className='flex flex-col gap-3'>
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
                    <button
                        type="submit"
                        onClick={onButtonClick}
                        className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer'
                    >
                        Login
                    </button>
                </form>
                <br />
                <p className='text-gray-600'>OR</p>
                <Link to='/signup' className='text-blue-500 hover:underline'>
                    Signup
                </Link>
            </div>
        </div>
    )
}

export default Login

