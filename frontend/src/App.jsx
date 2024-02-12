import { useState, useEffect } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Home, Login, Post } from './pages/share'
import './App.css'
import Signup from './pages/Signup'

const PrivateRoute = ({ isUserAuthenticated,...props }) => {
  return isUserAuthenticated ? <><Outlet/></> : <Navigate replace to = '/' />
}

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)

  return (
        <div>
          <BrowserRouter>
            <Routes>

              <Route path='/' element={<Login setIsUserAuthenticated = { setIsUserAuthenticated } />} />
              <Route path='/signup' element={<Signup />} />

              {/* <Route path='/home' element={<PrivateRoute isUserAuthenticated={isUserAuthenticated}/>} > */}
              <Route path='/home' element={<Home />} />
              {/* </Route> */}

              <Route path='/create/post' element={<Post />} />              

            </Routes>
          </BrowserRouter>
        </div>
  )
}

export default App
