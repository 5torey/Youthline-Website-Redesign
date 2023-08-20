// Imports 
import React, {useState} from 'react'
import MobileMenu from './MobileMenu'
import {Link} from 'react-router-dom'
import {List, CartFill} from 'react-bootstrap-icons'
import Logo from '../../public/assets/ytlogoblack.svg'


const Header = () => {
    //declare on/off state for mobile menu
    const [menuIsOpen, openMenu] = useState(false);
    // toggle the state of openMenu
  const toggleMobileMenu = () => {
    openMenu(!menuIsOpen);
    document.body.classList.toggle('no-scroll');
  } 

  return (
  <>
      <div id='topnav'>
        <div id='logo'>
          <Link to="/">
            <img src={Logo} alt="Youthline Logo" id='navlogo' />
          </Link>
        </div>

        {/* Desktop Menu, only visible on large screens. */}
        <ul id='menu'>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
        </ul>
        <div id="nav-btn-container">
          <button id='navdonate'><Link to="/store"><p>Donate</p></Link></button>
          </div>
          <div id='cart-container'>
          <i className="fa-solid fa-cart-shopping" id='cart'></i>
          </div>
        {/* Hamburger icon, only shows up on small screens. */}
        <div id="menu-container">
          <button id="menu-button" className='show-mobile-menu-button' onClick={toggleMobileMenu}>
            <List id="hamburger-icon" />
          </button>
        </div>
      </div>

        {/* If menuIsOpen, show the mobile menu*/}
        {/* give the mobile menu our close method (toggleMobileMenu) too, as a prop, so you can close it by clicking on a link */}
        {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
        {/* If menuIsOpen, show the close button */}
    </>

  )
}

export default Header
