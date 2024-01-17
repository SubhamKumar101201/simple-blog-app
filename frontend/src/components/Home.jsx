import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Home() {
    const location = useLocation()

  return (
    <div>
        <h1> Hello {location.state.name} and welcome to the home!! with email {location.state.email}</h1>
    </div>
  )
}

export default Home