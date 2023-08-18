// Imports
import React from 'react'
import { Link } from "react-router-dom";
import { X } from 'react-bootstrap-icons';

const MobileMenu = ({ closeMethod }) => {
    return (
        <>
            <button id="close-nav-menu" onClick={closeMethod}>
                <X />
            </button>
            <ul id='mobile-menu'>
                <li>
                    <Link to="/" onClick={closeMethod}>Home</Link>
                </li>
                <li>
                    <Link to="/services" onClick={closeMethod}>Services</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={closeMethod}>Contact Us</Link>
                </li>
                <li>
                    <Link to="/about" onClick={closeMethod}>About Us</Link>
                </li>
                <li>
                    <Link to="/advice" onClick={closeMethod}>Advice</Link>
                </li>
            </ul>
        </>
    )
}

export default MobileMenu