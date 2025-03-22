import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import menu_icon from "../../assets/menu-icon.png"
import { Link } from 'react-scroll';
export const Navbar = () => {
  const [sticky,setsticky] = useState(false);
  useEffect (()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY >500 ? setsticky(true) : setsticky(false);
    })
    },
    []);
  const [mobilemenu, setmobilemenu]= useState(false);
  const togglemenu=()=>{
    setmobilemenu(!mobilemenu);
    // mobilemenu ? setmobilemenu(false) : setmobilemenu(true);
  }
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
<img src={logo} className='logo' />

<ul className={mobilemenu ? "" : "hide-mobile-menu"}>
<li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
<li><Link to="programs-container" smooth={true} offset={-260} duration={500}>Programme</Link></li>
<li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
<li><Link to="campus" smooth={true} offset={-250} duration={500}>Campus</Link></li>
<li><Link to="testimonials" smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
<li> <Link to="contact" smooth={true} offset={-220} duration={500} className='btn'>Contact Us</Link> </li>
</ul>
<img onClick={togglemenu} src={menu_icon} alt=""  className='menu-icon'/>
    </nav>
  )
}
