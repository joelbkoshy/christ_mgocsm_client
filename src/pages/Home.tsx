import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MainCard from '../components/MainCard/MainCard'
import '../styles/Home.css'
import GlassCard from '../components/GlassCard/GlassCard'
import SlickSlider from '../components/Slider/SlickSlider'
import PhotoCard from '../components/PhotoCard/PhotoCard'
import ServantsSlider from '../components/ServantsSlider/ServantsSlider'
import Testimonials from '../components/Testimonials/Testimonials'
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
      img_src: "assets/home/vivek.jpg",
      dateTime: "March 16, 2024",
      mainTitle: "CAMPUS TOUR",
      news: "Organised campus tour with Rev.Fr.Vivek Varghese after welcoming to Christ MGOCSM Family"
    },
    {
      img_src: "assets/home/nombu.jpg",
      dateTime: "March 13, 2024",
      mainTitle: "Holy Lent",
      news: "Conducting evening prayer during lent coordinated by Rev. Fr. Jacob Varghese"
    }, 
    {
      img_src: "assets/home/test.jpg",
      dateTime: "February 11, 2023",
      mainTitle: "Holy Qurbana",
      news: "Conducted monthly Holy Qurbana at Precious Blood Chapel"
    },
    {
      img_src: "assets/home/4.jpg",
      dateTime: "February 3,2024",
      mainTitle: "ANNUAL general Body meeting",
      news: "Conducted annual general body meeting at St Thomas Forane Church"
    }, {
      img_src: "assets/home/3.jpg",
      dateTime: "January 22, 2024",
      mainTitle: "THADAKAM CHARITY VISIT",
      news: "Visited  and contributed to Christu Shishya Ashramam at Thadakam, Coimbatore "
    }, {
      img_src: "assets/home/5.jpg",
      dateTime: "January 20, 2024",
      mainTitle: "Jamming Session",
      news: "Organised Jamming Session near Bird's Park "
    },  {
      img_src: "assets/home/2.jpg",
      dateTime: "January 11, 2023",
      mainTitle: "ORTHODOX THEOLOGY SEMINARY STUDENTS VISIT",
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
  }, {
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

  }, {
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


  const testimonialsData: any[] = [
    {
      img_src: "assets/servants/jeremy.jpg",
      name: "Jeremy Mathew Jose",
      position: "Sports Coordinator",
      testimony: "My journey with Christ MGOCSM has been transformative, fostering not only my academic resilience but also nurturing my character, guiding me through challenges and shaping me into a stronger individual."
    }, {
      img_src: "assets/servants/abin.jpg",
      name: "Abin Joshua Binu",
      position: "Secretary (Male)",
      testimony: "Within Christ Mgocsm, I found not just companionship, but a sacred bond of unity and understanding, illuminating our spiritual journey with the radiant light of enduring friendship."
    }, {
      img_src: "assets/servants/joel.jpg",
      name: "Joel B Koshy",
      position: "Vice President (Male)",
      testimony: "In Christ Mgocsm, I discovered more than a spiritual community, it became my sanctuary, my home away from home, where bonds of friendship flourish and souls find solace together."
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