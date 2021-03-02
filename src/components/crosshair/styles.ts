import styled, { css } from 'styled-components';
import { CrosshairData } from '../../utils/types';


export const Container = styled.div`
   position: absolute;
   top: 50%; 
   left: 50%;
   transform: translate(-50%, -50%);

   span {
      margin: unset;
      bottom: unset;
      stroke: unset;
      transform: unset;
      z-index: 999999;
   }
`;

export const Wrapper = styled.div<CrosshairData>`
   span {
      display: flex;
      background: red;
      position: absolute;
   }

   span.center-dot {
      height: ${props => props.centerDotThickness}px;
      width: ${props => props.centerDotThickness}px;
      opacity: ${props => props.centerDotOpacity};

      ${props => !props.centerDot && css`
         display: none;
      `}
   }

   span.inner-lines-up {
      height: 3px;
      width: 9px;
   }

   span.inner-lines-bottom{
      height: 9px;
      width: 3px;
   }

   span.inner-lines-bottom{
      height: 9px;
      width: 3px;
   }

   span.inner-lines-bottom{
      height: 9px;
      width: 3px;
   }
`;
