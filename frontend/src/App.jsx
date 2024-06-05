import { useState, useEffect } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Home, Login, Post } from './pages/share'
import './App.css'
import Signup from './pages/Signup'
import MyPostContext from './utility/MyPostContext'
import About from './pages/About'
import {jwtDecode} from 'jwt-decode'

const PrivateRoute = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      try {
        const accessToken = sessionStorage.getItem('accessToken');
        if (accessToken) {
          const decodedToken = jwtDecode(accessToken);
          if (decodedToken.id) {
            setIsUserAuthenticated(true);
          } else {
            setIsUserAuthenticated(false);
          }
        } else {
          setIsUserAuthenticated(false);
        }
      } catch (e) {
        setIsUserAuthenticated(false);
      } finally {
        setIsLoading(false); 
      }
    };

    checkAuth();
  }, []); 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isUserAuthenticated ? <Outlet /> : <Navigate replace to='/' />;
}

function App() {
  return (
    <div>
      <MyPostContext>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route element={<PrivateRoute />}>
              <Route path='/home' element={<Home />} />
              <Route path='/create/post' element={<Post />} />
              <Route path='/about' element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MyPostContext>
    </div>
  )
}

export default App;
