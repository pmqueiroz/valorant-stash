import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100vh;
`;

export const CardsWrappers = styled.div`
   width: 100%;
   height: auto;
   overflow: scroll;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
`;