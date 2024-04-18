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
            <div className="enchristoTitleContainer">
              <div className="mainHeadingContainer">
                <h1>Enchristo'24 : Faith and Friendship</h1>
              </div>
              <div className="subHeadingContainer">
                <h6 className='dateText'>March 17,2024</h6>
                <h6 className='venueText'>St Gaspar Bhavan, Precious Blood Missionaries</h6>
              </div>
            </div>
            <div className="enchristoImgContainer ">
              <img src={enchristo} className='rounded-20 shadow-white-mid border-white-mid' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enchristo