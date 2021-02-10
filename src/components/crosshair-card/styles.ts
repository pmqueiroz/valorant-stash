import styled from 'styled-components';

export const Container = styled.div`
   width: 32rem;
   height: 32rem;
   background: #192d3e;

   display: flex;
   justify-content: start;
   align-items: center;
   flex-direction: column;
   padding: 0 2rem;

   h1 {
      font: 700 6rem Tungsten;
      color: #FF4655;
      width: 100%;
      z-index: 2;
   }

   img {
      width: 100%;
      margin-top: -2rem;
      z-index: 1;
   }
   
   button {
      margin-top: 5rem;
      width: 15rem;
      height: 5rem;
      border: none;
      color: #fff;
      background: #FF4655;
      font: 700 2rem Tungsten;
      text-transform: uppercase;
   }
`;