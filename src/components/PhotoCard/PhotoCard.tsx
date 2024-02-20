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
                {
                    data?.h2_fontSize ? <h2 style={{ fontSize: `${data?.h2_fontSize}` }}>{data?.mainHeading}</h2>
                        : <h2>{data?.mainHeading}</h2>
                }
                {
                    data?.h5_fontSize ? <h5 style={{ fontSize: `${data?.h5_fontSize}` }}>{data?.subHeading}</h5>
                        : <h5>{data?.subHeading}</h5>
                }
            </div>
        </div>
    )
}

export default PhotoCard