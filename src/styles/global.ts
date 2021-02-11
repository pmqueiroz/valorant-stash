import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   *:focus {
      outline: none;
   }

   body {
      background: var(--color-background);
      color: var(--color-text-in-primary);
      font-family: Tungsten, Arial, sans-serif;
   }
   
   :root{
      --color-primary: #FF4655;
      --color-background-darker: #111111;
      --color-text-in-primary: #FFFFFF;
      --color-background: #ECE8E1;
      --color-background-boxes: #192D3E;
   }

   ::-webkit-scrollbar {
      width: 0.7rem;
   }
   ::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 0.5rem;
   }
   ::-webkit-scrollbar-thumb {
      background: var(--color-primary);
      border-radius: 0.5rem;
   }
   ::-webkit-scrollbar-corner { background: transparent; }

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