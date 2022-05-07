import styled from 'styled-components';

const FooterStyle = styled.footer`
  grid-column:1/-1;
  grid-row:6/7;
  background-color:var(--PrimaryColor);
  display: flex;
  flex-direction:column ;
  justify-content:center ;
  align-items:center ;
  @media only screen and (max-width:60em) { /* break point 950px*/
   padding:13rem 0;
  }
  & > img {
    width:25.25rem;
    height:10rem;
  &+p {
    color:var(--Color-5);
    font-family:var(--SecondaryFont) ;
    letter-spacing:.2rem ;
    font-size:1.4rem;
    margin-top:.5rem ;
    margin-bottom:2.5rem; 
    @media only screen and (max-width:60em) { /* break point 950px*/
      font-size:1.6rem;
    }
  &+div {
    
    & > a {
      font-size:1.2rem;
      color:var(--SecondaryColor);
      margin-right:1rem;
      @media only screen and (max-width:81.25em) { /* break point 1300px*/
        font-size:1.3rem;
      }
      @media only screen and (max-width:67.5em) { /* break point 1080px*/
        font-size:1.48rem;
      }
      @media only screen and (max-width:60em) { /* break point 950px*/
        font-size:1.5rem;
      }
      &:hover{
        color:var(--Color-5);
      }
    }
  }
  }

  }


`;

export default FooterStyle;