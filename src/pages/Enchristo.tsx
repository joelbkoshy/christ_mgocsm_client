import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import '../styles/Enchristo.css'
import poster from '../assets/enchristo/poster.jpg'
import enchristo from '../assets/enchristo/enchristo.jpg'

const Enchristo = () => {
  return (
    <div>
      <Navbar />
      <div className="mainRelativeEnchristoContainer">
        <div className="mainEnchristoContainer">
          <div className="imgPlusTitleContainer">
                <div className="enchristoImgContainer ">
                  <img src={enchristo} className='rounded-20 shadow-white-mid border-white-mid' alt="" />
                </div>
                <div className="enchristoTitleContainer">
                  <h2>hfrewfi</h2>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enchristo