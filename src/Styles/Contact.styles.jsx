import styled from 'styled-components';

const ContactStyle = styled.section`
  grid-column:2/3;
  grid-row:5/6;
  background-color: var(--SecondaryColor);
  margin: 5rem 0 0 0;
  display:grid;
  grid-template-columns:1fr max-content .8fr;
  grid-template-rows:max-content 1fr ;

  & > div {
    grid-column:1/-1 ;
    grid-row:1/2 ;
    justify-self:center ;
    display: flex;
    flex-direction:column ;
    justify-content:center ;
    align-items:center ;
    @media only screen and (max-width:60em) { /* break point 950px*/
      margin-top:3rem;
      margin-bottom:-5rem;
    }
    & > span {
      font-size:1.7rem;
    }

    & > p {
       font-size:2.1rem;
       color:var(--PrimaryColor);
    }
  }

  & > form {
    grid-column:1/2 ;
    grid-row:2/3 ;
    
    margin:10rem;
    padding:4rem;

    display:grid;
    grid-template-columns:1fr 1fr ;
    grid-template-rows:1fr 1fr 1fr 1fr ;
    grid-column-gap:8rem ;
    justify-content:center ;
    align-items:center ;
    & > div{
      display: flex;
      flex-direction: column;
      @media only screen and (max-width:60em) { /* break point 950px*/
        margin-bottom:5rem;
      }
    }

        
    &  label {
      font-size:1.8rem;
      @media only screen and (max-width:60em) { /* break point 950px*/
        margin-bottom:2rem;
      }
    }

    & input {
      border:none;
      outline:none;
      background-color: rgba(238, 238, 238, 0.27);
      width:25rem;
      height:3rem;
      transition:all 250ms ease-in-out;
      &:focus {
        border-bottom:0.375rem solid var(--PrimaryColor);
      }

    }

    & textarea {
      border:none;
      outline:none;
      width:25rem;
      height:10rem;
      background-color: rgba(238, 238, 238, 0.27);
      transition:all 250ms ease-in-out;
      &:focus {
        border-bottom:0.375rem solid var(--PrimaryColor);
      }
    }
    & .name {
      grid-column:1/2 ;
      grid-row:1/2 ;
    }
    & .email {
      grid-column:2/3 ;
      grid-row:1/2 ;
    }
    & .location {
      grid-column:1/2 ;
      grid-row:2/3 ;
      margin-top:-8rem;
    }
    & .subject {
      grid-column:2/3 ;
      grid-row:2/3 ;
      margin-top:-8rem;
    }
    & .message {
      grid-column:1/2 ;
      grid-row:3/4 ;
      margin-top:-8rem;
    }
    & .submit {
      grid-column:1/2 ;
      grid-row:4/5 ;
      border:none;
      background-color: var(--PrimaryColor);
      padding:0.625rem 1.75rem;
      border-radius:1rem;
      margin-top:-8rem;
      width:15rem;
      height:5rem;
      font-size:1.6rem;
      transition:all 250ms ease-in-out;
      &:hover{
        background-color:var(--PrimaryColor-op);
        
      }
      @media only screen and (max-width:81.25em) { /* break point 1300px*/
        width:20rem;
      }
      @media only screen and (max-width:67.5em) { /* break point 1300px*/
        height:4rem;
      }
    }
  }

  & > img {
    width:43.75rem;
    height:62.5rem;
    grid-column:2/3 ;
    grid-row:2/3 ;
    margin:10rem 0;
    @media only screen and (max-width:60em) { /* break point 950px*/
      width:37.5rem;
      height:50rem;
      /* margin:6rem 0; */
    }
  }
`;

export default ContactStyle;