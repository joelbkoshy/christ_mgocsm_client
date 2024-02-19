import React from 'react'
import '../../styles/GlassCard.css'
import test from '../../assets/test.jpg'

const GlassCard = () => {
    return (
        <div className="container1">
            <div className="wrapper">
                <div className="banner-image" style={{backgroundImage:test}}> </div>
                {/* <img src="/assets/home/3.jpg" alt="" /> */}
                <h1>Worship</h1>
                <p>Lorem ipsum dolor sit amet, <br />
                    consectetur adipiscing elit.</p>
            </div>
        </div>

    )
}

export default GlassCard