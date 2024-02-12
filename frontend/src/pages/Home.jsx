import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import { Grid } from '@mui/material'

function Home() {

  const location = useLocation()

  return (
    <div>
      <Navbar />
      <Banner />
      <Grid container>
        <Grid item lg={2} sm={2} xs={12}>
          <Categories />
        </Grid>
        <Grid item lg={10} sm={10} xs={12}>
          Posts
        </Grid>
      </Grid>
    </div>
  )
}

export default Home