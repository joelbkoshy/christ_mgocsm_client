import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MainCard from '../components/MainCard/MainCard'
import '../styles/Home.css'

const Home = () => {
  return (
    <div >
        <Navbar />
        <div className="home-container">
        <MainCard />
        </div>
    </div>
  )
}

export default Home