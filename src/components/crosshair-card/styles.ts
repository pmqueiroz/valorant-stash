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

   .bg {
      margin-top: -2rem;
      width: 100%;
      height: 100%;
      z-index: 1;
      position: relative;
      background: url('ascent.png') no-repeat center;
      background: white;
   }

   h1 {
      font: 700 6rem Tungsten;
      color: var(--color-primary);
      width: 100%;
      z-index: 2;
      text-transform: uppercase;
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