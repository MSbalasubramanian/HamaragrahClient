import styled, { keyframes } from 'styled-components';
import HeroImage from '../images/HeroImage.jpeg'

const jumpAnimation = keyframes`
  0%   {transform: translate3d(0,0,0) scale3d(1,1,1);}
  40%  {transform: translate3d(0,30%,0) scale3d(.7,1.5,1);}
  100% {transform: translate3d(0,100%,0) scale3d(1.5,.7,1);}
`;

const HeaderStyle = styled.header`
  grid-column:1/-1;
  grid-row:1/2;
  background-image:url(${HeroImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size:cover;
  padding:4rem 6rem;
  display:grid;
  grid-template-columns:1fr min-content 1fr;
  grid-template-rows:8rem .6fr .5fr .5fr ;
  
  @media only screen and (max-width:67.5em) { /* break point 1080px*/
    background-size:contain;
  }
  @media only screen and (max-width:34.375em) { /* break point 600px*/
  grid-column:1/-1;
  }
  & > nav {
    background-color: var(--Color-3-10per);
    grid-column:1/-1;
    grid-row:1/2;
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    @media only screen and (max-width:46.875em) { /* break point 750px*/
      justify-content:space-evenly ;
      width:100% ;
    }
    @media only screen and (max-width:29.375em) { /* break point 470px*/
        display:none;  
      }

    & > img {
      margin : 0 0 0 2rem;
      width:20rem;
      height:8rem;
      cursor: pointer;
    }
    & > div {
      
      & > a {
        margin:3rem;
        color:var(--SecondaryColor);
        font-size:1.75rem;
        @media only screen and (max-width:60em) { /* break point 950px*/
        font-size:1.85rem;
        }

        @media only screen and (max-width:46.875em) { /* break point 750px*/
          font-size:1.98rem;
        }
        &:hover {
          color:var(--PrimaryColor);
        }
        &:last-child{
          background-color:var(--PrimaryColor);
          padding:1.1rem;
          border-radius:1rem;
          transition:all 250ms ease-in;
          @media only screen and (max-width:60em) { /* break point 950px*/
            padding:1.3rem;
          }
          &:hover{
            color:var(--SecondaryColor);
            background-color:var(--PrimaryColor-op);
            
          }
        }
      }
    }
  }

  & > div {
    color:var(--SecondaryColor);
    grid-column:1/2;
    grid-row:3/4;
    font-family:var(--SecondaryFont);
    font-size:5rem ;
    padding:4rem;
    & > p {
      @media only screen and (max-width:46.875em) { /* break point 750px*/
      font-size:4.8rem ;
      }
      @media only screen and (max-width:34.375em) { /* break point 550px*/
        font-size:3.8rem ;
      }
      & span {
        color:var(--PrimaryColor);
      }
      &+p {
        color:var(--PrimaryColor);
      }
    }

    & > a {
      font-size: 1.6rem;;
      color:var(--SecondaryColor);
      background-color:var(--PrimaryColor);
      padding:1.1rem;
      border-radius:1rem;
      transform-origin: 50% 5em;
      @media only screen and (max-width:60em) { /* break point 950px*/
        font-size:1.9rem;
        padding:1.4rem 2rem;
      }
      &:hover{
        color:var(--SecondaryColor);
        background-color:var(--PrimaryColor-op);
        
      }
    }
  }

  & > span {
    grid-column:2/3;
    grid-row:4/-1;
    align-self:flex-end ;
    & svg {
      width:4rem;
      height:4rem;
      animation: ${jumpAnimation} .5s linear alternate infinite ;
       @media only screen and (max-width:29.375em) { /* break point 470px*/ 
        z-index: -1;
        position: absolute;
      } 
    }
  }
  .burgerMenu {
    display:none;
    @media only screen and (max-width:29.375em) { /* break point 470px */
    grid-column:1/-1;
    grid-row:1/2;
     display:flex;
     justify-content:space-between ;
     align-items:center;
     padding:0 4rem;
    }
    & > img {
      width:20rem;
      height:8rem;
      cursor: pointer;
    }
    & > svg {
      width:4rem;
      height:4rem;
      cursor: pointer;
    }
    
    @media only screen and (max-width:25.625em) { /* break point 410px */
     margin-right:2rem;
     
    }
  }
`;



export default HeaderStyle;