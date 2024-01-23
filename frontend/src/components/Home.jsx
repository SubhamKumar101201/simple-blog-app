import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../context/DataProvider'

function Home() {
    const { account } = useContext( DataContext )
  return (
    <div>
        <h1> Hello { account.userData.name } </h1>
    </div>
  )
}

export default Home