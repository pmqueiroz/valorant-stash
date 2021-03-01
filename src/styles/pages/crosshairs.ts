import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100vh;
`;

export const CardsWrappers = styled.div`
   width: 100%;
   height: auto;
   padding: 0 4rem 4rem 4rem 4rem;
   display: grid;
   justify-items: center;
   grid-template-columns: 1fr 1fr 1fr 1fr;

   div {
      margin-top: 5rem;
      div {
      margin-top: 0rem;
      }
   }

   @media (max-width: 1500px) {
      grid-template-columns: 1fr 1fr 1fr;
   }

   @media (max-width: 1080px) {
      grid-template-columns: 1fr 1fr;
   }

   @media (max-width: 805px) {
      grid-template-columns: 1fr;
   }
`;