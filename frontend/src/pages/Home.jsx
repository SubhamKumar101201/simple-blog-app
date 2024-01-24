import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Home() {

  const location = useLocation()

  return (
    <div>
        <Navbar/>
        <h1> Hello { location.state.name ? location.state.name : '??' } and welcome to the home!! with email { location.state.email ? location.state.email : "??" }</h1>
    </div>
  )
}

export default Home