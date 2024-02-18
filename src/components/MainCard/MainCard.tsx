import React from 'react'
import '../../styles/MainCard.css'
import testImage from '../../assets/test.jpg'


const MainCard = () => {
    return (
        <div className='mainCard-container'>
            <div className='mainCard-secondaryContainer'>
               <div className="left  rounded-20 shadow-white-mid border-white-mid">
                   <img src={testImage} alt="" className='' />
               </div>
               <div className="right">
                <h1>CHRIST MGOCSM</h1>
               </div>
            </div>
        </div>
    )
}

export default MainCard