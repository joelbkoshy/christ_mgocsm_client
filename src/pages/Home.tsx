import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MainCard from '../components/MainCard/MainCard'
import '../styles/Home.css'
import GlassCard from '../components/GlassCard/GlassCard'
import CarouselCard from '../components/CarouselCard/CarouselCard'
import SlickSlider from '../components/Slider/SlickSlider'
import PhotoCard from '../components/PhotoCard/PhotoCard'
import ServantsCard from '../components/ServantsCard/ServantsCard'
import ServantsSlider from '../components/ServantsSlider/ServantsSlider'
import Testimonials from '../components/Testimonials/Testimonials'
import TestimonialsSlider from '../components/TestimonialsSlider/TestimonialsSlider'
import Footer from '../components/Footer/Footer'

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

  const patronData: any = {
    img_src: "assets/thirumenis/parumala_thirumeni.jpg",
    mainHeading: "Our Patron",
    subHeading: "St. Gregorios of Parumala"
  }

  const bishopsData: any[] = [{
    img_src: "assets/thirumenis/bava.jpg",
    mainHeading: "His Holiness Moron Mar Baselius Marthoma Mathews III ",
    subHeading: "Catholicose of the East and The Malankara Metropolitan",
    h2_fontSize: "18px",
    h5_fontSize: "12px"
  }, {
    img_src: "assets/thirumenis/seraphim_thirumeni.jpg",
    mainHeading: "His Grace Abraham Mar Seraphim Metropolitan",
    subHeading: "President of MGOCSM",
    h2_fontSize: "18px",
    h5_fontSize: "12px"
  }, {
    img_src: "assets/thirumenis/philexinos_thirumeni.jpg",
    mainHeading: "His Grace Geevarghese Mar Philoxenos Metropolitan",
    subHeading: "Assistant Metropolitan of Bangalore Diocese",
    h2_fontSize: "18px",
    h5_fontSize: "12px"
  }
  ]

  const achansData: any[] = [
    {
      img_src: "assets/achans/vivek_achan.jpg",
      mainHeading: "Rev. Fr. Dr. Vivek Varghese",
      subHeading: "MGOCSM GENERAL SECRETARY",
      h2_fontSize: "15px",
      h5_fontSize: "12px"
    }, {
      img_src: "assets/achans/jikku_achan.jpg",
      mainHeading: "Rev. Fr. Jacob Varghese",
      subHeading: "DIRECTOR & CHAPLAIN OF BANGALORE MGOCSM ",
      h2_fontSize: "15px",
      h5_fontSize: "12px"
    }
  ]

  const servantsData: any[] = [{
    img_src: "assets/servants/dn_dennis.jpg",
    name: "Dn. Dennis Reji",
    position: "Mentor",
    class: "2 MSW CCP"
  },
  {
    img_src: "assets/servants/joel.jpg",
    name: "Joel B Koshy",
    position: "Vice President(Male)",
    class: "6 MCA B"
  } , {
    img_src: "assets/servants/lisa.jpg",
    name: "Lisa Shibu George",
    position: "Vice President(Female)",
    class: "6 BCA B"
  }, {
    img_src: "assets/servants/abin.jpg",
    name: "Abin Joshua Binu",
    position: "Secretary(Male)",
    class: "4 BCOM F&A B"
  }, {
    img_src: "assets/servants/alivi .jpg",
    name: "Alivi Susan Kurian",
    position: "Secretary(Female)",
    class: "4 BA PEP B"
  }
    , {
    img_src: "assets/servants/ninon.jpg",
    name: "Ninon Thomas Chittadathu",
    position: "Treasurer",
    class: "4 MSAS"
  }
    , {
    img_src: "assets/servants/chris.jpg",
    name: "Cris Mariam Saj",
    position: "Interpersonal Head",
    class: "4 BBA F"

  }, {
    img_src: "assets/servants/sandra.jpg",
    name: "Sandra Sara Luke",
    position: "Media Head",
    class: "6 PSECO"

  }, {
    img_src: "assets/servants/saniya.jpg",
    name: "Saniya Sunil Jacob",
    position: "Theshmeshtho Head (Choir)",
    class: "6 BCOM IF"

  } ,{
    img_src: "assets/servants/joel_johnson.jpg",
    name: "Joel Varghese Johnson",
    position: "Magazine Head",
    class: "4 CME"

  }, {
    img_src: "assets/servants/jeremy.jpg",
    name: "Jeremy Mathew Jose",
    position: "Sports Coordinator",
    class: "4 CMS"

  },
  ]


  const testimonialsData : any[] = [
    {
      img_src:"assets/servants/jeremy.jpg",
      name:"Jeremy Mathew Jose",
      position :"Sports Coordinator",
      testimony:"Working With Event AGENCY WAS AN ABSOLUTE DELIGHT! FROM CONCEPT TO EXECUTION, THEY WERE PROFESSIONAL, ORGANIZED, AND TRULY WENT ABOVE AND BEYOND TO ENSURE OUR EVENT WAS A SUCCESS. THE ATTENTION TO DETAIL, CREATIVE IDEAS, AND SEAMLESS COORDINATION MADE ALL THE DIFFERENCE. OUR ATTENDEES WERE THRILLED, AND WE RECEIVED RAVE REVIEWS FOR THE FLAWLESS EXECUTION."
    },{
      img_src:"assets/servants/abin.jpg",
      name:"Abin Joshua Binu",
      position:"Secretary(Male)",
      testimony:"COLLABORATING WITH THE EVENT AGENCY WAS AN INCREDIBLY ENJOYABLE EXPERIENCE! THEY DISPLAYED UTMOST PROFESSIONALISM AND EXCELLENT ORGANIZATION THROUGHOUT THE ENTIRE PROCESS, GOING THE EXTRA MILE TO GUARANTEE THE SUCCESS OF OUR EVENT. THEIR METICULOUS ATTENTION TO DETAIL, INNOVATIVE CONCEPTS, AND FLAWLESS COORDINATION TRULY SET THEM APART"
    },    {
      img_src:"assets/servants/joel.jpg",
      name:"Joel B Koshy",
      position:"Vice President(Male)",
      testimony:"WORKING WITH EVENT AGENCY WAS AN ABSOLUTE DELIGHT! FROM CONCEPT TO EXECUTION, THEY WERE PROFESSIONAL, ORGANIZED, AND TRULY WENT ABOVE AND BEYOND TO ENSURE OUR EVENT WAS A SUCCESS. THE ATTENTION TO DETAIL, CREATIVE IDEAS, AND SEAMLESS COORDINATION MADE ALL THE DIFFERENCE. OUR ATTENDEES WERE THRILLED, AND WE RECEIVED RAVE REVIEWS FOR THE FLAWLESS EXECUTION."
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
          </div>
        </div>
        <div className="thirumenis-Container">
          <div className='main-thirumenisContainer'>
            <div className="patronContainer ">
              <div className='shadow-contrast-mid border-contrast-mid '>
                <PhotoCard data={patronData} style={{ backgroundColor: '#5b3116' }} />
              </div>
            </div>
            <div className="bishopsContainer">
              {
                bishopsData?.map((bishop: any) => {
                  return (
                    <div className='shadow-contrast-mid border-contrast-mid '>
                      <PhotoCard data={bishop} style={{ backgroundColor: '#5b3116', width: '20rem', height: '25rem', fontSize: '10px' }} />
                    </div>

                  )
                })
              }
            </div>
            <div className="achansContainer">
              {
                achansData?.map((achan: any) => {
                  return (
                    <div className='shadow-contrast-mid border-contrast-mid '>
                      <PhotoCard data={achan} style={{ backgroundColor: '#5b3116', width: '15rem', height: '18.75rem', fontSize: '10px' }} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="servants-Container">
          <div className="headingsContainer">
            <h3>MEET OUR OFFICIALS</h3>
          </div>
          <div className="servantsCarouselContainer">
            <ServantsSlider data={servantsData} />
          </div>
        </div>
        <div className="testimonialsHomeContainer">
          {/* <TestimonialsSlider data={testimonialsData} /> */}
          <Testimonials data={testimonialsData} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home