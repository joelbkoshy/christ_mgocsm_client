
import React from 'react'
import '../../styles/Testimonials.css'
import Slider from 'react-slick'


const Testimonials = ({ data }: any) => {

  const settings: any = {
    // fade: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoPlay :true,
    autoplaySpeed: 1000,
    // cssEase: "linear",
    pauseOnHover:false,
  };


  return (
    <div className='testimonialsContainer'>
      <div className="testimonialContentContainer">
        <Slider {...settings}>
          {
            data?.map((testimony: any) => {
              return (
                <div className="testimonyMapContainer" style={{ display: 'flex' }}>
                  <div className="aluminiContainer">
                    <div className="imgContainer">
                      <img src={testimony?.img_src} alt="" />
                    </div>
                    <div className="nameContainer">
                      <span className='nameText'>
                        <div className="firstLine">
                          -&nbsp;<p>{testimony?.name},
                            <br />
                            {testimony?.position}
                          </p>
                        </div>
                        <p></p>
                      </span>
                    </div>
                  </div>
                  <div className="aluminiWordsContainer">
                    "{testimony?.testimony}"
                  </div>
                </div>

              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials