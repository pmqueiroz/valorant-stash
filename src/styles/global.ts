import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      background: #ECE8E1;
      color: #fff;
      font-family: Tungsten, Arial, sans-serif;
   }

   @media (min-width: 850px) {
      :root{
         font-size: 62.5%
      }
   }

   @font-face {
      font-family: "Tungsten";
      src: url('../assets/fonts/Tungsten-Bold.ttf');
      font-style: bold;
      font-weight: 700;
      font-display: swap;
   }
`;