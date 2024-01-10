import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const navigate = useNavigate()
  
    const onButtonClick = () => {
        setEmailError("")
        setPasswordError("")

        if ("" === email) {
            setEmailError("Please enter email")
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email")
            return
        }

        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }

        if (password.length < 7) {
            setPasswordError("The password must be 8 characters or longer")
            return
        }
    }

   return (
    <div className='flex flex-col border border-blue-400'>
        <div>
            <div>
                Login
            </div>
        </div>
        <br />
        <div className='flex flex-col'>
            <input 
            value={email}
            placeholder='Enter your email here'
            onChange={ev => setEmail(ev.target.value)}
            className='w-auto border border-gray-400'
            />
            <label className=''>{emailError}</label>
        </div>
        <br />
        <div className='flex flex-col'>
            <input
            value={password}
            placeholder='Enter your password here'
            onChange={ev => setPassword(ev.target.value)}
            className='w-auto border border-gray-400'
            />
            <label className=''>{passwordError}</label>
        </div>
        <br />
        <div>
            <input 
            type="button"
            onClick={onButtonClick}
            value={"Log in"}
            />
        </div>
    </div>
  )
}

export default Login