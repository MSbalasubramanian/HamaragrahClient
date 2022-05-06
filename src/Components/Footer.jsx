import FooterStyle from "../Styles/Footer.styles";
import logo from '../images/logo.png';
const Footer = () => (
  <FooterStyle>
    <img src={logo} alt="HamaragrahLogo"/>
    <p>Copywrite 2022, All Rights are reserved</p>
    <div>
      <a href="#head">Home</a>
        <a href="#au">About us</a>
        <a href="#os">Our Services</a>
        <a href="#ow">Our Works</a>
    </div>
  </FooterStyle>
);

export default Footer;