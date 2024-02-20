import React from 'react'
import Slider from "react-slick";

type slickData = {
    data: any[]
}

const SlickSlider = ({ data }: slickData) => {


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    data?.map((item: any) => {
                        return (
                            <>
                                {item}
                            </>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default SlickSlider