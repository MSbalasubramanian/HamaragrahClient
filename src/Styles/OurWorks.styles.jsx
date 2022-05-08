import styled from 'styled-components';

const OurWorksStyle = styled.section`
  grid-column:2/3;
  grid-row:4/5;
  display:grid;
  grid-template-columns :1fr ;
  grid-template-rows:max-content max-content ;
  padding:2rem 0;
  @media only screen and (max-width:34.375em) { /* break point 600px*/
  grid-column:1/-1;
  }
  &>p {
    grid-column:1/-1;
    grid-row:1/2;
    margin-bottom:3rem ;
    font-size:3rem ;
    color:var(--PrimaryColor);
    letter-spacing:-4.5% ;
    justify-self:center ;
  }
  & > div {
    grid-column:1/-1;
    grid-row:2/-1;
    justify-self:center ;
    display:grid;
    grid-template-columns :repeat(4,1fr) ;
    grid-template-rows:repeat(3,1fr) ;
    grid-gap:5rem; 
    align-items:center;
    @media only screen and (max-width:60em) { /* break point 950px*/
     grid-gap:3rem; 
     margin-left:6rem;
    }
    @media only screen and (max-width:40.625em) { /* break point 650px*/
      margin-left:0;
    }
    @media only screen and (max-width:34.375em) { /* break point 550px*/
      grid-template-columns :repeat(3,1fr) ;
      grid-template-rows:repeat(4,1fr) ;
      grid-gap:6rem; 
    }
    @media only screen and (max-width:25em) { /* break point 400px */
      grid-template-columns :repeat(2,1fr) ;
      grid-template-rows:repeat(6,1fr) ;
      grid-gap:8rem; 
    }
    & > img {
      border-radius:.8rem;
      width:30rem;
      height:30rem;
      box-shadow: 10px 20px 31px 0px rgba(242, 175, 41, 0.15);
      @media only screen and (max-width:46.875em) { /* break point 750px*/
        width:28rem;
        height:28rem;
      }
       
      &:hover {
        outline: 10px solid var(--PrimaryColor);
        padding:.5rem;
        box-shadow: 10px 15px 31px 0px rgba(242, 175, 41, 0.40);
        @media only screen and (max-width:60em) { /* break point 950px*/
          outline: 5px solid var(--PrimaryColor);
        }
      }
    }
  }
`;

export default OurWorksStyle;