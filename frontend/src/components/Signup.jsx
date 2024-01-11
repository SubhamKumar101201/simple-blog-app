import React from 'react'

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [emailError, setEmailError] = useState("")
    // const [passwordError, setPasswordError] = useState("")

    const onButtonClick = async () => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:9000/signup",{
                email,password
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='flex flex-col border border-blue-400'>
            <h1>Signup</h1>

            <form action="POST">
                <input type="email"
                    onChange={(e) => { setEmail(e.target.value) }}
                    placeholder='Enter your email here'
                />
                <label >{emailError}</label>

                <input type="password"
                    onChange={(e) => { setPassword(e.target.value) }}
                    placeholder='Enter your password here'
                />
                <label >{passwordError}</label>

                <input type="submit" onClick={onButtonClick}/>
            </form>
            <br />
            <p>OR</p>
            <Link to='/'>Login Page</Link>
        </div>
    )
}

export default Signup