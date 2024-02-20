import React from 'react'
import Slider from "react-slick";
import CarouselCard from '../CarouselCard/CarouselCard';
import '../../styles/SlickSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from '../Arrows/LeftArrow';
import RightArrow from '../Arrows/RightArrow';


type slickData = {
    data: any[]
}

const SlickSlider = ({ data }: slickData) => {

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        prevArrow:<LeftArrow/>,
        nextArrow:<RightArrow />
      };

    return (
        <div className='slickSliderContainer'>
            <Slider {...settings}>
            {
                data?.map((item: any) => {
                    return (
                        <>
                            <CarouselCard data={item} />
                        </>
                    )
                })
            }
            </Slider>
        </div>
    )
}

export default SlickSlider