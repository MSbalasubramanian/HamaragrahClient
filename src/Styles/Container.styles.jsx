import styled from 'styled-components';

 const Container = styled.section`
  display:grid;
  grid-template-columns:11rem 1fr 11rem;
  grid-template-rows: max-content max-content max-content max-content max-content 20vh;
  @media only screen and (max-width:67.5em) { /* break point 1080px*/
  grid-template-rows: 60vh max-content max-content max-content max-content 20vh;
  }
  
  @media only screen and (max-width:60em) { /* break point 950px*/
    grid-template-columns:8rem 1fr 2rem;
    grid-template-rows: 70vh max-content max-content max-content max-content 12vh;
  }
`;

export default Container;



