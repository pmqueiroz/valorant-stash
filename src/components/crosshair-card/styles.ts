import styled from 'styled-components';

export const Container = styled.div`
   width: 32rem;
   height: 32rem;
   background: var(--color-background-boxes);
   position: relative;
   display: flex;
   justify-content: start;
   align-items: center;
   flex-direction: column;
   padding: 0 2rem;
   overflow: hidden;

   h1 {
      font: 700 6rem Tungsten;
      color: var(--color-primary);
      width: 100%;
      z-index: 2;
      text-transform: uppercase;
   }

   img {
      width: 100%;
      margin-top: -2rem;
      z-index: 1;
   }

   span {
      font: 700 13rem Tungsten;
      text-transform: uppercase;
      margin-top: -10rem;
      bottom: 0rem;
      color: transparent;
      -webkit-text-stroke: 1px rgba(189, 188, 183, 0.3);
      transform: rotate(-5deg);
      z-index: 0;
      user-select: none;
   }
`;

export const Button = styled.div`
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