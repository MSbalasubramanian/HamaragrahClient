import styled from 'styled-components';

 const Container = styled.section`
  display:grid;
  grid-template-columns:11rem 1fr 11rem;
  grid-template-rows: max-content max-content max-content max-content max-content 20vh;
  @media only screen and (max-width:250em) { /* break point 4000px*/
    grid-template-rows: 90vh max-content max-content max-content max-content 20vh;
  }
  @media only screen and (max-width:67.5em) { /* break point 1080px*/
  grid-template-rows: 60vh max-content max-content max-content max-content 20vh;
  }
  
  @media only screen and (max-width:60em) { /* break point 950px*/
    grid-template-columns:8rem 1fr 2rem;
    grid-template-rows: 70vh max-content max-content max-content max-content 12vh;
  }

  @media only screen and (max-width:56.25em) { /* break point 800px*/
    grid-template-rows: 55vh max-content max-content max-content max-content 12vh;

  }
  @media only screen and (max-width:40.625em) { /* break point 650px*/
    grid-template-rows: 45vh max-content max-content max-content max-content 12vh;
  }
  @media only screen and (max-width:37.5em) { /* break point 600px*/
  grid-template-rows: 38vh max-content max-content max-content max-content 12vh;
  }
  @media only screen and (max-width:34.375em) { /* break point 550px*/
  grid-template-columns:1fr;
  }
  @media only screen and (max-width:25em) { /* break point 400px*/
  grid-template-rows: 32vh max-content max-content max-content max-content 12vh;
  }
  
  

`;

export default Container;



