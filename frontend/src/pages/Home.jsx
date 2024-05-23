import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import { Grid } from '@mui/material'
import Posts from '../components/Posts'
import { API } from '../services/api'
import PostContext from '../utility/PostContext'
import Footer from '../components/Footer'

function Home() {

  const location = useLocation()
  const { setPosts } = useContext(PostContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.getPosts({});
        if (response.isSuccess) {
          setPosts(response.data.posts);
        } else {
          console.log('Something went wrong!');
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <Grid container>
        <Grid item lg={2} sm={2} xs={12}>
          <Categories />
        </Grid>
        <Grid item lg={10} sm={10} xs={12}>
          <Posts />
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default Home