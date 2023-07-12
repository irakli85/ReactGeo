
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      border: none;
      font-family: 'Noto Sans Georgian', sans-serif;
      font-size: 62.5%;
    }

    body{
      width: 100%;
      height: auto;      
    }  
`;

export default GlobalStyles;