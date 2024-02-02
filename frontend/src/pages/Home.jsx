import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

function Home() {

  const location = useLocation()
  
  return (
    <div>
        <Navbar/>
        <Banner/>
        <h1> Hello { location.state ? location.state.name : '??' } and welcome to the home!! with email { location.state ? location.state.email : "??" }</h1>
    </div>
  )
}

export default Home