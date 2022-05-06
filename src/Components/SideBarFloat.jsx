import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiMail } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
const SideBarFloat = _ => (
  <SideBarFloatStyle>
    <IconContext.Provider value={{ color:'#235789' }}>
      <a href=""><FiMail /></a>
      <a href=""><FiInstagram /></a>
      <a href=""><FaWhatsapp /></a> 
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