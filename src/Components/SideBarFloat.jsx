import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiMail } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
const SideBarFloat = _ => (
  <SideBarFloatStyle>
    <IconContext.Provider value={{ color:'#235789' }}>
      <a href="mailto:info@hamaraghar.co.in
"><FiMail /></a>
      <a href="#"><FiInstagram /></a>
      <a href="https://wa.me/918971744523?text=Hai%20Sir%2C%20I%20like%20to%20know%20the%20details%20about%20what%20you%20mention%20in%20the%20website" target='_blank'><FaWhatsapp /></a> 
    </IconContext.Provider>
  </SideBarFloatStyle>
);
const SideBarFloatStyle = styled.aside`
  grid-column:1/2;
  grid-row:2/3;
  font-size:3rem ;
  position:sticky ;
  top:0;
  left:0;
  display: flex;
  flex-direction:column ;
  justify-content:center ;
  align-items:center ;
  margin: 3rem;
  & svg {
    width:3rem;
    height:3rem;
    margin:2rem;
  }

`;
export default SideBarFloat;