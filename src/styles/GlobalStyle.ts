import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{ 
      margin: 0;
      padding: 0;
      scroll-behavior: auto;
     
   }
   :focus {
      outline:0;
      box-shadow:none;
   }
   html {
      scroll-behavior: smooth;
}
   body{
      font-family: 'Montserrat';
      font-size: 1rem;
      -webkit-font-smoothing: antialiased;
         scroll-behavior: smooth;
         background-color: ${({ theme }) => theme["black-800"]};
   }
   input, button, h1, p, span {
      font-family: 'Montserrat';
      color: white;
      border: 0;
      box-shadow: none;
   }
`;
