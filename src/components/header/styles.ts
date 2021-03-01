import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 5.5rem;
   padding: 0 2rem;
   background: var(--color-background-darker);

   img {
      width: 3.5rem;
      color: var(--color-text-in-primary);
   }

   button {
      background: var(--color-primary);
      cursor: pointer;
      border: none;
      width: 12rem;
      height: 3.5rem;
      font: 700 1.3rem Roboto;
      border-radius: 0.2rem;
      color: var(--color-text-in-primary);
      text-transform: uppercase;
   }

   nav {
      padding: 0 3rem;
      height: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      margin-right: auto;

      div {
         display: flex;
         justify-content: center;
         align-items: center;
         height: 5.5rem;
         width: calc(100% + 2rem);
         border-bottom: 0.3rem transparent solid;
         transition: border-color .2s;

         &:hover {
            border-color: var(--color-primary);
         }

         &.active {
            border-color: var(--color-primary);
         }

         & + div {
            margin-left: 3rem;
         }
            
         a {
            text-decoration: none;
            font: 700 1.5rem Roboto;
            text-transform: uppercase;
            color: var(--color-text-in-primary);
         }
      } 
   }
`;