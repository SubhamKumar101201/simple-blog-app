import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { API } from '../services/api'
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

function Signup() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
                <h1 className='text-2xl mb-4 m-[8px]'>Signup</h1>

                <form action="POST" className='flex flex-col gap-3'>
                    <TextField
                        type='text'
                        label='Name'
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        placeholder='Enter your name here'
                        value={name}
                        sx={{ m: 1, width: '35ch' }}
                    />
                    <TextField
                        type='email'
                        label='Email'
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        placeholder='Enter your email here'
                        value={email}
                        sx={{ m: 1, width: '35ch' }}
                    />
                    <FormControl sx={{ m: 1, width: '35ch' }} variant='outlined'>
                        <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
                        <OutlinedInput
                            id='outlined-adornment-password'
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            placeholder='Enter your password here'
                            value={password}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label='toggle password visibility'
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge='end'
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label='Password'
                        />
                    </FormControl>
                    {error && <Typography className='!m-[8px] !text-xs text-red-600 !leading-none font-semibold'> {error} </Typography>}
                    <Button
                        variant="contained"
                        onClick={onButtonClick}
                        className='!m-[8px]'
                    >
                        Signup
                    </Button>
                </form>
                <br />
                <p className='text-gray-600 flex flex-col items-center mb-1'>OR</p>
                <Link to='/' className='text-blue-500 hover:underline flex flex-col items-center'>
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Signup
