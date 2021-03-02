import styled from 'styled-components';

export const Container = styled.div`
   position: relative;
   cursor: pointer;
   z-index: 2;

   button {
      margin-top: 5rem;
      width: 15rem;
      height: 5rem;
      border: none;
      color: var(--color-text-in-primary);
      background: var(--color-primary);
      font: 700 2rem Tungsten;
      text-transform: uppercase;
      cursor: pointer;
      display: relative;
      transition: color 0.2s;
      user-select: none;

      &:hover{
         color: var(--color-background-boxes);
      }
   }


   &::after {
      content: "";
      width: 16rem;
      height: 2.3rem;
      position: absolute;
      bottom: 3.1rem;
      right: -.6rem;
      border: solid 1px white;
      border-bottom: 0;
      z-index: 0;
   }

   &::before {
      content: "";
      width: 16rem;
      height: 2.3rem;
      position: absolute;
      bottom: -0.6rem;
      right: -.6rem;
      border: solid 1px white;
      border-top: 0;
      z-index: 0;
   }
`;