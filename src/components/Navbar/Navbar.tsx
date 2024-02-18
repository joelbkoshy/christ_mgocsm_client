import React from 'react'
import { Link } from 'react-router-dom'
import christMgocsm from '../../assets/logos/christMgocsm-trans.png'
import '../../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className="left">
                <Link to={"/"}>
                    <img className='christ-logo' src={christMgocsm} alt="" />
                </Link>
            </div>
            <div className="middle">
                <ul>
                    <li><Link className='mid-text-font fw-bold' to={"/"}>Home</Link></li>
                    <li><Link className='mid-text-font fw-bold' to={"/enchristo"}>Enchristo'24</Link></li>
                    <li><Link className='mid-text-font fw-bold' to={"/about"}>About Us</Link></li>
                    <li><Link className='mid-text-font fw-bold' to={"/gallery"}>Gallery</Link></li>
                    <li><Link className='mid-text-font fw-bold' to={"/contact"}>Contact</Link></li>
                </ul>
            </div>
            <div className="right">
                <a href="https://chat.whatsapp.com/Gt29YrN2MSW2bIF39ilrtMj"><button className='button-5'>Join Now</button></a>
            </div>
        </div>
    )
}

export default Navbar