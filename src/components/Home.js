import React from 'react'
import Navbar from './Navbar'
import Products from './Products'
import '../css/home.css'

const Home = () => {
  return (
    <div className='wrapper'>
        <Navbar/> 
        <Products/>
    </div>
  )
}

export default Home