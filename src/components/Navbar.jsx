import "./Navbar.css";
import React from 'react';
import {animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
      };
    
      const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId); 
            element.scrollIntoView({ behavior: "smooth" }); 
    };
  return (
     <nav className="nav-wrapper">
        <div className="nav-content">
            <ul>
                <li>
                    <p className="heading">SERENN BAKES</p>
                </li>
                <li>
                <a className="item" onClick={scrollToTop}>Home</a>
                </li>
                <li>
                    <a className="item" onClick={() => scrollToSection('moments')}>Our Story</a>
                </li>
                <li>
                    <a className="item" onClick={() => scrollToSection('products')}>Products</a>
                </li>
                <li>
                    <a className="item" onClick={() => scrollToSection('contact')}>Contact</a>
                </li>
                
            </ul>
        </div>
     </nav>
  )
}

export default Navbar