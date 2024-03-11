import React from 'react'
import '../../styles/Footer.css'
import Logo from '../../assets/logos/christMgocsm-trans.png'
import Insta from '../../assets/logos/instagram.png'
import FB from '../../assets/logos/facebook.png'
import YT from '../../assets/logos/youtube.png'


const Footer = () => {
  return (
    <div className='footer-mainContainer'>
      <div className="christMgocsmLogoContainer">
        <img src={Logo} alt="" />
      </div>
      <div className="footerHeadingContainer">
        Let's Grow Together
      </div>
      <span>Make a difference today: Join us for a spiritual journey of compassion and worship.</span>
      <div className="JoinNowButtonContainer">
        <a href="https://chat.whatsapp.com/Gt29YrN2MSW2bIF39ilrtMj"><button className='button-5'>Join Now</button></a>
      </div>
      <div className="footerFinalBorderContainer">
        <div className="footerWrapper">
          <div className="NavItems">
            <a href=""><span>Home</span></a>
            <a href=""><span>Enchristo'24</span></a>
            <a href=""><span>About Us</span></a>
            <a href=""><span>Gallery</span></a>
            <a href=""><span>Contact</span></a>
          </div>
          <div className='socialMediaHandles'>
            <a href="https://www.instagram.com/christmgocsm?utm_source=qr&igsh=MWIxNDdjb3c5MWZkZA== "><img src={Insta} alt="" className='InstaLogo' /></a>
            <a href="https://m.facebook.com/christmqocsm"><img src={FB} alt="" /></a>
            <a href="https://youtube.com/@CHRlSTMGOCSM?si=xQVuQ3H12-UPWBZn"><img src={YT} alt="" /></a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer