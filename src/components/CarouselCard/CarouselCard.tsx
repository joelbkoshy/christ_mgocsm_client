import React from 'react'
import '../../styles/CarouselCard.css'
import test from '../../assets/test.jpg'

const CarouselCard = () => {
    return (
        <div className='carouselCard-container'>
            <div className="imageContainer">
                <img src={test} alt="" />
            </div>
            <div className="contentContainer">
                <h6 className='date-titleContainer'>November 29-30, 2023</h6>
                <h3 className="mainTitle">Holy Qurbana</h3>
                <p>Conducted monthly Holy Qurbana at Precious Blood Chapel </p>
            </div>
            <div className="carouselCardBottom"></div>
        </div>
    )
}

export default CarouselCard