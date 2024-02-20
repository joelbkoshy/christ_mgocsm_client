import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MainCard from '../components/MainCard/MainCard'
import '../styles/Home.css'
import GlassCard from '../components/GlassCard/GlassCard'
import CarouselCard from '../components/CarouselCard/CarouselCard'
import SlickSlider from '../components/Slider/SlickSlider'

const Home = () => {

  type carousel_data = {
    img_src: string,
    mainHeading: string,
    subHeading: string
  }

  const value: carousel_data[] = [
    {
      img_src: "assets/home/test.jpg",
      mainHeading: "CHRIST MGOCSM",
      subHeading: "Establishing an association aimed at enhancing the spiritual growth of CHRIST University students and fostering a stronger sense of camaraderie among them."
    }, {
      img_src: "assets/home/3.jpg",
      mainHeading: "THADAGAM CHARITY TRIP",
      subHeading: "Visited and contributed ₹38000 to paliative care unit at Christa Shishya Ashramam, Thadagam, Coimbatore on 21 January 2024"
    },
    {
      img_src: "assets/home/2.jpg",
      mainHeading: "ORTHODOX THEOLOGY SEMINARY STUDENTS VISIT",
      subHeading: "A group of 27 deacons from Orthodox Theological Seminary ✝ visited and graced CHRIST MGOCSM on 11th January 2024 "
    },
    {
      img_src: "assets/home/4.jpg",
      mainHeading: "WEEKLY EVENING PRAYERS",
      subHeading: "Conducting Saturday Sandhya Namaskaram at St.Thomas Forane Church, followed by meetings."
    }
  ]

  const motto_data: any[] = [
    {
      img_src: "assets/motto/worship.png",
      mainHeading: "WORSHIP",
    }, {
      img_src: "assets/motto/study.png",
      mainHeading: "STUDY",
    }, {
      img_src: "assets/motto/service.png",
      mainHeading: "SERVICE",
    }
  ]

  const latestNews: any[] = [
    {
      img_src: "assets/home/test.jpg",
      dateTime: "November 29-30, 2023",
      mainTitle: "test1",
      news: "Conducted monthly Holy Qurbana at Precious Blood Chapel"
    }, {
      img_src: "assets/home/test.jpg",
      dateTime: "November 29-30, 2023",
      mainTitle: "test2",
      news: "Conducted monthly Holy Qurbana at Precious Blood Chapel"
    }, {
      img_src: "assets/home/test.jpg",
      dateTime: "November 29-30, 2023",
      mainTitle: "test3",
      news: "Conducted monthly Holy Qurbana at Precious Blood Chapel"
    }, {
      img_src: "assets/home/test.jpg",
      dateTime: "November 29-30, 2023",
      mainTitle: "test4",
      news: "Conducted monthly Holy Qurbana at Precious Blood Chapel"
    }, {
      img_src: "assets/home/test.jpg",
      dateTime: "November 29-30, 2023",
      mainTitle: "test5",
      news: "Conducted monthly Holy Qurbana at Precious Blood Chapel"
    }, {
      img_src: "assets/home/test.jpg",
      dateTime: "November 29-30, 2023",
      mainTitle: "test6",
      news: "Conducted monthly Holy Qurbana at Precious Blood Chapel"
    }
  ]


  return (
    <div >
      <Navbar />
      <div className="home-container">
        <MainCard carousel_data={value} />
        <div className="motto-container">
          <h3 className='tex fw-bold img-shadow-light'>OUR MOTTO</h3>
          <div className="motto-cards">
            {
              motto_data?.map((motto) => {
                return (
                  <>
                    <GlassCard data={motto} />
                  </>
                )
              })
            }
          </div>
        </div>
        <div className="latestEvents-container">
          <div className="textContainer">
            <h1>LATEST NEWS</h1>
            <span><p>Whether it's a thought-provoking seminar, an engaging workshop, a vibrant cultural event, or any other inspiring gathering, our passionate team at Christ MGOCSM is committed to crafting memorable experiences and fostering meaningful connections.</p></span>
          </div>
          <div className="carouselContainer">
            <SlickSlider data={latestNews} />
            {/* <PauseOnHover /> */}
            {/* <h1>jiijeio</h1> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home