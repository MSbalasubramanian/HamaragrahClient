import HeaderStyle from "../Styles/Header.styles";
import { IconContext } from 'react-icons';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../images/logo.png';
const Header = _ => (
  <HeaderStyle id="head">
    <section className="burgerMenu">
      <img src={logo} alt="HamaragrahLogo" />
      <IconContext.Provider value={{ color:'#F2AF29' }}>
        <GiHamburgerMenu></GiHamburgerMenu>
      </IconContext.Provider>
    </section>
    <nav>
      <img src={logo} alt="HamaragrahLogo"/>
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
      <IconContext.Provider value={{ color:'#F2AF29' }}>
        <HiChevronDoubleDown></HiChevronDoubleDown>
      </IconContext.Provider>
    </span>
  </HeaderStyle>
);

export default Header;