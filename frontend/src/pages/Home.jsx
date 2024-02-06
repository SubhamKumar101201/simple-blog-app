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
    </div>
  )
}

export default Home