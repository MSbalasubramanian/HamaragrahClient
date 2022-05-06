import styled from 'styled-components';

const OurServiceStyle = styled.section`
  grid-column:2/3;
  grid-row:3/4;
  display: flex;
  flex-direction:column ;
  justify-content:center ;
  & > p {
    font-size:2rem ;
    margin-left:6.5rem ;
  }

  & > section {
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:1fr ;
    
    & div {

      margin:4rem 3rem;
      padding:3rem 6rem;
      border-radius:1rem;
      box-shadow: 2px 4px 24px 0px rgba(0,0,0,0.14) ;  
      transition:all 250ms ease-in-out;
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
`;

export default OurServiceStyle;