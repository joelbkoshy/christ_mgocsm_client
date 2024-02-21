import React from 'react'
import '../../styles/ServantsCard.css'

const ServantsCard = (props: any) => {

    const { data } = props
    return (
        <div className='servantsCard-Container'>
            <img src={data?.img_src} alt="Servant" />
            <div className="textContainer">
                <div className='hero-marquee-item__name'>Random Guy</div>
                <div className='hero-marquee-item__name'>Vice President</div>
                <div className='hero-marquee-item__name'>6 MCA B</div>
            </div>
        </div>
    )
}

export default ServantsCard