import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import christMgocsm from '../../assets/logos/christMgocsm-trans.png'
import '../../styles/Navbar.css'

const Navbar = () => {


    //Refs
    const nav = useRef(null);

    //Hide Nav on Scroll
    let scrollY = window.scrollY;
    useEffect(() => {
        const hideNav = () => {
            if (window.scrollY > scrollY) {
                (nav.current as unknown as HTMLElement)?.classList.add("hide");
            } else {
                (nav.current as unknown as HTMLElement)?.classList.remove("hide");
            }
            scrollY = window.scrollY;
        }
    
        window.addEventListener("scroll", hideNav);
    
        return () => window.removeEventListener("scroll", hideNav);
    }, [])
    

    return (
        <div className='nav-container' ref={nav}>
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