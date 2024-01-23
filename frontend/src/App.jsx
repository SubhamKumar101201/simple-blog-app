import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Login } from './components/share'
import './App.css'
import Signup from './components/Signup'
import DataProvider from './context/DataProvider'

function App() {
  // const [loggedIn, setLoggedIn] = useState(false)
  // const [email, setEmail] = useState("")

  return (
    <DataProvider>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/home' element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
    </DataProvider>

  )
}

export default App
