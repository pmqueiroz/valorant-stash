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
      stroke: unset!important;
      transform: unset!important;
      z-index: 999999!important;
      margin-top: unset!important;
   }
`;

export const Wrapper = styled.div<CrosshairData>`
   display: flex;
   justify-content: center;
   align-items: center;
   height: ${props => props.centerDotThickness}px;
   width: ${props => props.centerDotThickness}px;

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

      ${props => props.outlines && css`
         outline: rgba(0, 0, 0, ${props.outlinesOpacity}) solid ${props.outlinesOpacity}px;
      `}
   }

   span.inner-lines-up {
      height: ${props => props.innerLinesLength}px;
      width: ${props => props.innerLinesThickness}px;
      opacity: ${props => props.innerLinesOpacity};
      top: -${props => props.innerLinesLength + props.innerLinesOffset}px;
      bottom: unset!important;

      ${props => !props.innerLines && css`
         height: 0px;
         width: 0px;
      `}

      ${props => props.outlines && css`
         outline: rgba(0, 0, 0, ${props.outlinesOpacity}) solid ${props.outlinesOpacity}px;
      `}

      span {
         height: ${props => props.outerLinesLength}px;
         width: ${props => props.outerLinesThickness}px;
         opacity: ${props => props.outerLinesOpacity};
         top: -${props => props.outerLinesLength + props.outerLinesOffset}px;
         bottom: unset!important;
         transform: translate(-50%)!important;
      }
   }

   span.inner-lines-bottom{
      height: ${props => props.innerLinesLength}px;
      width: ${props => props.innerLinesThickness}px;
      opacity: ${props => props.innerLinesOpacity};
      bottom: -${props => props.innerLinesLength + props.innerLinesOffset}px;

      ${props => !props.innerLines && css`
         height: 0px;
         width: 0px;
      `}

      ${props => props.outlines && css`
         outline: rgba(0, 0, 0, ${props.outlinesOpacity}) solid ${props.outlinesOpacity}px;
      `}

      span {
         height: ${props => props.outerLinesLength}px;
         width: ${props => props.outerLinesThickness}px;
         opacity: ${props => props.outerLinesOpacity};
         bottom: -${props => props.outerLinesLength + props.outerLinesOffset}px;
         transform: translate(-50%)!important;
      }
   }

   span.inner-lines-left{
      height: ${props => props.innerLinesThickness}px;
      width: ${props => props.innerLinesLength}px;
      opacity: ${props => props.innerLinesOpacity};
      left: -${props => props.innerLinesLength + props.innerLinesOffset}px;
      bottom: unset!important;

      ${props => !props.innerLines && css`
         height: 0px;
         width: 0px;
      `}

      ${props => props.outlines && css`
         outline: rgba(0, 0, 0, ${props.outlinesOpacity}) solid ${props.outlinesOpacity}px;
      `}

      span {
         height: ${props => props.outerLinesThickness}px;
         width: ${props => props.outerLinesLength}px;
         opacity: ${props => props.outerLinesOpacity};
         left: -${props => props.outerLinesLength + props.outerLinesOffset}px;
         bottom: unset!important;
         transform: translate(0, -50%)!important;
      }
   }

   span.inner-lines-right{
      height: ${props => props.innerLinesThickness}px;
      width: ${props => props.innerLinesLength}px;
      opacity: ${props => props.innerLinesOpacity};
      right: -${props => props.innerLinesLength + props.innerLinesOffset}px;
      bottom: unset!important;

      ${props => !props.innerLines && css`
         height: 0px;
         width: 0px;
      `}

      ${props => props.outlines && css`
         outline: rgba(0, 0, 0, ${props.outlinesOpacity}) solid ${props.outlinesOpacity}px;
      `}

      span {
         height: ${props => props.outerLinesThickness}px;
         width: ${props => props.outerLinesLength}px;
         opacity: ${props => props.outerLinesOpacity};
         right: -${props => props.outerLinesLength + props.outerLinesOffset}px;
         bottom: unset!important;
         transform: translate(0, -50%)!important;
      }
   }
`;
