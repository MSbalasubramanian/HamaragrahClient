import styled from 'styled-components';

const AboutUsStyle = styled.section`
  grid-column:2/3;
  grid-row:2/3;
  display: grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr ;
  align-items:center ;
  @media only screen and (max-width:46.875em) { /* break point 750px*/
    grid-template-columns:max-content 1fr;
  }
  @media only screen and (max-width:40.625em) { /* break point 650px*/
    /* margin-top: -5rem; */
  }
  @media only screen and (max-width:34.375em) { /* break point 550px*/
    display:flex;
  }
  @media only screen and (max-width:34.375em) { /* break point 600px*/
  grid-column:1/-1;
  }
  @media only screen and (max-width:31.25em) { /* break point 500px*/
    overflow-x:hidden ;
  }
  @media only screen and (max-width:25em) { /* break point 400px */
    display: flex;
    justify-content: center;
    align-items:center ;
  }
  & img {
    width:62.5rem;
    height:62.5rem;/* change height to alter the illustration */
    grid-column:1/2 ;
    grid-row:1/-1 ;
    justify-self:flex-end ;
    @media only screen and (max-width:60em) { /* break point 950px*/
      height:40rem;
    }
    @media only screen and (max-width:34.375em) { /* break point 550px*/
      height:30rem;
    }
    @media only screen and (max-width:31.25em) { /* break point 500px*/
      height:35rem;
    }
    @media only screen and (max-width:25em) { /* break point 400px */
      display:none;
    }

  }
  &>section {
    grid-column:2/3 ;
    grid-row:1/-1 ;
    padding:5rem 4rem;
    @media only screen and (max-width:34.375em) { /* break point 550px*/
      width:50rem;
      height:64rem;
      padding:5rem 10rem 5rem 0;
    }
    @media only screen and (max-width:25.625em) { /* break point 410px */
     margin-right:10rem;
    }
    
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
        @media only screen and (max-width:31.25em) { /* break point 500px*/
          font-size:3.6rem;
          letter-spacing:.45rem ;
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