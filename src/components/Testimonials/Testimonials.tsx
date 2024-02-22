
import React from 'react'
import '../../styles/Testimonials.css'


const Testimonials = () => {
  return (
    <div className='testimonialsContainer'>
      <div className="testimonialContentContainer">
        <div className="aluminiContainer">
          <div className="imgContainer">
            <img src="assets/achans/jikku_achan.jpg" alt="" />
          </div>
          <div className="nameContainer">
            <span className='nameText'>
              <div className="firstLine">
                -&nbsp;<p>Rev. Fr. Jacob Varghese,
                  <br />
                  CHAPLAIN
                </p>
              </div>
              <p></p>
            </span>
          </div>
        </div>
        <div className="aluminiWordsContainer">
          "I HAD BEEN STRUGGLING TO FIND A JOB THAT MATCHED MY SKILLS AND ASPIRATIONS.
          BUT THANKS TO LINKR, I FOUND MY DREAM JOB WITHIN WEEKS.
          THE PERSONALIZED MATCHING SYSTEM AND COMPREHENSIVE COMPANY
          INFORMATION PROVIDED ME WITH VALUABLE INSIGHTS, AND THE USER-FRIENDLY
          INTERFACE MADE THE ENTIRE PROCESS EFFORTLESS."
        </div>
      </div>
    </div>
  )
}

export default Testimonials