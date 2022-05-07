import styled from 'styled-components';

const AboutUsStyle = styled.section`
  grid-column:2/3;
  grid-row:2/3;
  display: grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr ;
  align-items:center ;
  & img {
    width:62.5rem;
    height:62.5rem;/* change height to alter the illustration */
    grid-column:1/2 ;
    grid-row:1/-1 ;
    justify-self:flex-end ;
    @media only screen and (max-width:60em) { /* break point 950px*/
      height:40rem;
    }

  }
  &>section {
    grid-column:2/3 ;
    grid-row:1/-1 ;
    padding:5rem 4rem;
    &>p:first-child {
      /* about us */
      font-size:2rem;
      letter-spacing:.8rem ;
      font-family:var(--SecondaryFont) ;
      @media only screen and (max-width:60em) { /* break point 950px*/
        letter-spacing:.5rem ;
        margin-top:3rem;
      }
      & + p {
      /* we are */
      font-size:4rem;
      color:var(--Color-4);
      font-family:var(--PrimaryFont) ;
      letter-spacing:.5rem ;
        @media only screen and (max-width:81.25em) { /* break point 1300px*/
          margin-bottom:3rem;
        }
        @media only screen and (max-width:60em) { /* break point 950px*/
          letter-spacing:.25rem ;
          margin-bottom:3rem; 
        }
      }
      
    }
    & > section {
      
      & > section{
        margin:0;
        & >  div{ /* card */
          margin-bottom:1rem;
          display: grid;
          grid-template-columns:min-content max-content 1fr;
          justify-content:center ;
          align-items:center ;
          width:50rem;
          box-shadow: 2px 4px 8px 0px rgba(0,0,0,0.15);
          transition: all 250ms ease-in-out;
          & > span {
            color:var(--Color-5);
            font-size: 4rem;
            padding:0 .4rem 2rem 2rem;
            &+p {
              font-size: 2rem;
            }
          }         
          &:hover {
            background-color: var(--PrimaryColor);
          }
          @media only screen and (max-width:60em) { /* break point 950px*/
            width:48rem;
          }
        }   
      }  
    }
  }
`;

export default AboutUsStyle;