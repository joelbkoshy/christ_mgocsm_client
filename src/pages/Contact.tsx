import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/Contact.css'; 

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contactMainContainer">
        <h1>Contact US</h1>
      <div className="contactUs-Container">
        <div className="contactSection">
          <h2>MGOCSM Student Centre Bangalore</h2>
          <p>Email: mgocsmstudentcenterbangalore@gmail.com</p>
          <p>Phone: +919633738360</p>
          <p>Fr. Jacob Varghese (Jikku achen)</p>
        </div>
        <div className="contactSection">
          <h2>CHRIST MGOCSM</h2>
          <p>Email: mgocsmchrist@gmail.com</p>
          <p>Phone: 9747913779</p>
          <p>Dn. Dennis Reji</p>
          <p>Phone: +918078517439</p>
          <p>Kripa Rachel Joji (Secretary)</p>
          <p>Phone: +918547243014</p>
          <p>Johan V Jacob</p>
          <p>Phone: +918602255041</p>
          <p>Rincy Aniyan Theshmeshtho (Choir)</p>
        </div>
      </div>

      </div>
      <Footer />
    </div>
  );
}

export default Contact;
