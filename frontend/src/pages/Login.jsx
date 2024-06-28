import React, { useState, useContext } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { API } from '../services/api';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState(location.state?.email || '');
    const [password, setPassword] = useState(location.state?.password || '');
    const [error, setError] = useState('');


    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onButtonClick = async (e) => {
        e.preventDefault();
        try {
            let response = await API.userLogin({ email, password });

            if (response.isSuccess) {

                sessionStorage.setItem('accessToken', `Bearer ${response.data.tokensObject.accessToken}`);

                navigate('/home', { state: { email: email, name: response.data.data.name } });
                
            } else {
                setError('Something went wrong!');
            }
        } catch (err) {
            console.log(err)
            setError(err.data.data.msg);
        }
    };

    return (
        <>
            <div className='flex flex-row bg-gradient-to-br from-blue-500 via-blue-800 to-cyan-500'>
                <div className='flex flex-col items-center  justify-center  h-screen w-[50%]'>
                    <img src="/content-writer.png" alt="Logo" />
                </div>
                <div className='flex flex-col items-center  justify-center  h-screen w-[50%]'>
                    <div className='bg-white p-8 rounded shadow-md'>
                        <h1 className='text-2xl mb-4 m-[8px]'>Login</h1>

                        <form action='POST' className='flex flex-col gap-3'>
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
                                variant='contained'
                                onClick={onButtonClick}
                                className='!m-[8px]'
                            >
                                Login
                            </Button>
                        </form>
                        <br />
                        <p className='text-gray-600 flex flex-col items-center mb-1'>OR</p>
                        <Link to='/signup' className='text-blue-500 hover:underline flex flex-col items-center'>
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
