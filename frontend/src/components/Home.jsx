import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Home() {
    const location = useLocation()
    const onButtonClick = () => {

    }

  return (
    <div>
        <h1> Hello {location.state.id} and welcome to the home!!</h1>
    </div>
  )
}

export default Home