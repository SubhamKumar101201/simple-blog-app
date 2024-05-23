import { useState, useEffect } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Home, Login, Post } from './pages/share'
import './App.css'
import Signup from './pages/Signup'
import MyPostContext from './utility/MyPostContext'
import About from './pages/About'

const PrivateRoute = ({ isUserAuthenticated, ...props }) => {
  return isUserAuthenticated ? <><Outlet /></> : <Navigate replace to='/' />
}

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)

  return (
    <div>
      <MyPostContext>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Login setIsUserAuthenticated={setIsUserAuthenticated} />} />
            <Route path='/signup' element={<Signup />} />

            {/* <Route path='/home' element={<PrivateRoute isUserAuthenticated={isUserAuthenticated}/>} > */}
            <Route path='/home' element={<Home />} />
            {/* </Route> */}

            <Route path='/create/post' element={<Post />} />
            <Route path='/about' element={<About />} />

          </Routes>
        </BrowserRouter>
      </MyPostContext>
    </div>
  )
}

export default App
