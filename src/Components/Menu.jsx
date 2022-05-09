import React, { useContext } from 'react';
import { ClickContext } from '../Helper/Context';
import { IconContext } from 'react-icons';
import { ImCross } from 'react-icons/im';
import { FiMail } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
const Menu = _ => {
  const { click, setClick } = useContext(ClickContext);
  return (    
    <MenuDesign>
      <Slide left>
        <div>
          <div className="cross">
            <IconContext.Provider value={{ color: '#Fff' }}  >
              <ImCross onClick={() => setClick(false)}></ImCross>
            </IconContext.Provider>
          </div>
          <div className='menus'>
            <a href="#head" onClick={() => setClick(false)}>Home</a>
            <a href="#au" onClick={() => setClick(false)}>About us</a>
            <a href="#os" onClick={() => setClick(false)}>Our Services</a>
            <a href="#ow" onClick={() => setClick(false)}>Our Works</a>
            <a href="#con" onClick={() => setClick(false)}>Contact us</a>
          </div>
          <div className="social">
            <IconContext.Provider value={{ color:'#7A9E9F' }}>
              <a href="mailto:info@hamaraghar.co.in" onClick={() => setClick(false)}><FiMail /></a>
              <a href="#" onClick={() => setClick(false)}><FiInstagram /></a>
              <a href="https://wa.me/918971744523?text=Hai%20Sir%2C%20I%20like%20to%20know%20the%20details%20about%20what%20you%20mention%20in%20the%20website" target='blank' onClick={() => setClick(false)}><FaWhatsapp /></a> 
            </IconContext.Provider>
          </div>
        </div>
      </Slide>
    </MenuDesign>
  )
};

const MenuDesign = styled.div`
  background-color: var(--PrimaryColor);
  position:absolute ;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  z-index: 200;
  margin-top:-35rem;
  margin-left:-6rem;
  padding:15rem 0;
  .cross { 
    display: flex;
    justify-content:flex-end ;
    align-items:center ;
    margin:5rem;
    cursor: pointer;
  }
  .menus {
    display: flex;
    flex-direction:column ;
    justify-content:space-between ;
    align-items:center ;
    height:50vh;
    padding:15rem;
     & > a {
      &:hover {
      color:var(--Color-5);
      }
      &:last-child{
        background-color:var(--Color-5);
        padding:1.1rem;
        border-radius:1rem;
        transition:all 250ms ease-in;
        @media only screen and (max-width:60em) { /* break point 950px*/
          padding:1.3rem;
        }
        &:hover{
          color:var(--PrimaryColor);
          background-color:var(--Color-5-op);
          
        }
      }
     }

  }

  .social{
    display: flex;
    justify-content:space-around ;
    align-items:center ;
    padding:15rem;
  }
`

export default Menu;