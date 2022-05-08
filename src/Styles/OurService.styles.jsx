import styled from 'styled-components';

const OurServiceStyle = styled.section`
  grid-column:2/3;
  grid-row:3/4;
  display: flex;
  flex-direction:column ;
  justify-content:center ;
  @media only screen and (max-width:60em) { /* break point 950px*/
     margin:5rem 0;
  }
  @media only screen and (max-width:34.375em) { /* break point 600px*/
  grid-column:1/-1;
  }
  
  
  & > p {
    font-size:2rem ;
    margin-left:6.5rem ;
    @media only screen and (max-width:34.375em) { /* break point 550px*/
      font-size:2.3rem ; 
    }
  }

  & > section {
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:1fr ;
    @media only screen and (max-width:34.375em) { /* break point 550px*/
      grid-template-columns:repeat(2,1fr);
      grid-template-rows:1fr 1fr;
      margin:0 15rem;
    }
    @media only screen and (max-width:25em) { /* break point 400px */
      grid-template-columns:1fr;
      grid-template-rows:1fr 1fr 1fr;
    }
    
    & div {
      margin:4rem 3rem;
      padding:3rem 6rem;
      border-radius:1rem;
      box-shadow: 2px 4px 24px 0px rgba(0,0,0,0.14) ;  
      transition:all 250ms ease-in-out;
      @media only screen and (max-width:60em) { /* break point 950px*/
        padding:3rem 5rem;
      }
      @media only screen and (max-width:46.875em) { /* break point 750px*/
        padding:5rem 4rem;
      }
      
      
      & > img {
        width:4rem;
        height:4rem;
        &+p {
          font-size:2.25rem;
          letter-spacing:.2rem ;
          margin: 2rem 0 3rem 0;
          &+span {
            font-size:1.55rem;
            letter-spacing:.2rem ;
            line-height:144% ;
            color:#000 !important;
            @media only screen and (max-width:60em) { /* break point 950px*/
              letter-spacing:.16rem ;
            } 
            @media only screen and (max-width:46.875em) { /* break point 750px*/
              font-size:1.8rem;
            } 
            @media only screen and (max-width:34.375em) { /* break point 550px*/
              color:#000000ab !important;
            } 
          }
        }
      }
      
      &:hover{
      box-shadow: 5px 10px 31px 0px rgba(0,0,0,0.15);
      transform:scale(1.05);
      color:var(--PrimaryColor);
      }
      
    }

  }
  .building {
    @media only screen and (max-width:34.375em) { /* break point 550px*/
      grid-column:1/2;
      grid-row:1/2; 
    }
    @media only screen and (max-width:25em) { /* break point 400px */
      grid-column:1/-1;
      grid-row:1/2;
      justify-self: center;
      width:80%;
    }
  }
  .cw {
    @media only screen and (max-width:34.375em) { /* break point 550px*/
      grid-column:2/3;
      grid-row:1/2;
      
    }
    @media only screen and (max-width:25em) { /* break point 400px */
      grid-column:1/-1;
      grid-row:2/3;
      justify-self: center;
      width:80%;
    }
  }
  .fuf {
    @media only screen and (max-width:34.375em) { /* break point 550px*/
      grid-column:1/-1;
      grid-row:2/3;
      justify-self: center;
      width:50%;
    }
    @media only screen and (max-width:25em) { /* break point 400px */
      grid-column:1/-1;
      grid-row:3/-1;
      width:80%;
      
    }
  }
`;

export default OurServiceStyle;