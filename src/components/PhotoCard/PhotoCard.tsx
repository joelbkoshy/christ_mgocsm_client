import React from 'react'
import '../../styles/PhotoCard.css'



const PhotoCard = (props: any) => {

    var tempStyle = {}
    const { data, style } = props

    tempStyle = style

    return (
        <div className='photoCard-Container' style={{ ...tempStyle }} >
            <img src={data?.img_src} alt={data?.mainHeading} />
            <div className="photoHeading-Container">
                <h2>{data?.mainHeading}</h2>
                <h5>{data?.subHeading}</h5>
            </div>
        </div>
    )
}

export default PhotoCard