import React from 'react'
import Slider from 'react-slick'
import ServantsCard from '../ServantsCard/ServantsCard';
import '../../styles/ServantsSlider.css'

const ServantsSlider = ({ data }: any) => {

  const settings: any = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover:false,
    prevArrow: <></>,
    nextArrow: <></>
  };

  return (
    <div className='servantsSliderContainer'>
      <Slider {...settings}>
        {
          data?.map((servant: any) => {
            return (
              <ServantsCard data={servant}/>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default ServantsSlider