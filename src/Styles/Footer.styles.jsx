import styled from 'styled-components';

const FooterStyle = styled.footer`
  grid-column:2/3;
  grid-row:6/7;
  background-color:var(--PrimaryColor);
  display: flex;
  flex-direction:column ;
  justify-content:center ;
  align-items:center ;
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
  &+div {
    
    & > a {
      font-size:1.2rem;
      color:var(--SecondaryColor);
      margin-right:1rem;

      &:hover{
        color:var(--Color-5);
      }
    }
  }
  }

  }


`;

export default FooterStyle;