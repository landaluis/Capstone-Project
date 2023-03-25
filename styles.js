import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@font-face {
  font-family: 'Bahnschrift';
  src: url('/Font /BAHNSCHRIFT1.TTF') format('truetype');
  font-weight: normal;
  font-style: normal;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family:  "Bahnschrift", sans-serif; 
  background-color: grey; 
/*   background: #09182f; */
  }
`;
