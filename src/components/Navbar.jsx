import React from 'react';
import card1 from '../images/logo1.png';

const Navbar = () =>{
  
 const f = () =>{
  const navbarLinks = document.getElementsByClassName('navbar-links')[0];
  navbarLinks.classList.toggle('active');
 }

  return(
    <>
    <div className="container-fluid navbar">
      <div className="brand-title">
        <a href="#home" alt="brandName"><img src={card1} style={{width:42}}></img></a>
      </div>
      <a href="#" className="toggle-button" onClick = {f} >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar-links">
      <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#footer">Contact</a></li>
      </ul>
      </div>
    </div> 
    </>
  );
};
export default Navbar;