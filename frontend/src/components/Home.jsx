import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home(props) {
    const {loggedIn , email} = props

    const navigate = useNavigate()

    const onButtonClick = () => {

    }

  return (
    <div>
        <div>
            <div>
                Welcome to the Blog App!
            </div>
        </div>
        <div>
            This is the home page.
        </div>
        <div>
            <input type="button" 
            onClick={onButtonClick}
            value={loggedIn ? "Log Out" : "Log In"}
            />

            {( loggedIn ? <div> Your Email Address is {email} </div> : <div/> )}
        </div>
    </div>
  )
}

export default Home