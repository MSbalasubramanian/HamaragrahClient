import HeaderStyle from "../Styles/Header.styles";
import { IconContext } from 'react-icons';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../images/logo.png';
import Menu from "./Menu";
import Slide from 'react-reveal/Slide';

import React, { useState } from 'react';
import { ClickContext } from "../Helper/Context";
const Header = _ => {
  const [click, setClick] = useState(false);
  
  return (
    <ClickContext.Provider value ={{click, setClick}}>
    <HeaderStyle id="head">
      <section className="burgerMenu" >
        <img src={logo} alt="HamaragrahLogo" />
        <IconContext.Provider value={{ color: '#F2AF29' }}  >
          <GiHamburgerMenu onClick={() => setClick(true)}></GiHamburgerMenu>
        </IconContext.Provider>
      </section>
      {click && ( <Slide right><Menu></Menu></Slide>)}
      <nav>
        <img src={logo} alt="HamaragrahLogo" />
        <div>
          <a href="#head">Home</a>
          <a href="#au">About us</a>
          <a href="#os">Our Services</a>
          <a href="#ow">Our Works</a>
          <a href="#con">Contact us</a>
        </div>
      </nav>
    
      <div>
        <p>Construction <span>Builds</span> the </p>
        <p>Future</p>
        <a href="#con">Get In Touch</a>
      </div>
      <span>
        <IconContext.Provider value={{ color: '#F2AF29' }}>
          <HiChevronDoubleDown></HiChevronDoubleDown>
        </IconContext.Provider>
      </span>
      </HeaderStyle>
    </ClickContext.Provider>
  )
};

export default Header;