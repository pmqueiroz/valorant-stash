import { type } from 'os';
import { Container, Wrapper } from './styles';
import { CrosshairData } from '../../utils/types';

export default function Crosshair({
   centerDot,
   centerDotOpacity,
   centerDotThickness,
   outlines,
   outlinesOpacity,
   outlinesthickness,
   innerLines,
   innerLinesOpacity,
   innerLinesLength,
   innerLinesThickness,
   innerLinesOffset,
   outerLinesOpacity,
   outerLinesLength,
   outerLinesThickness,
   outerLinesOffset
}: CrosshairData) {
   return (
      <Container>
         <Wrapper 
            centerDot={centerDot}
            centerDotOpacity={centerDotOpacity}
            centerDotThickness={centerDotThickness}
            outlines={outlines}
            outlinesOpacity={outlinesOpacity}
            outlinesthickness={outlinesthickness}
            innerLines={innerLines}
            innerLinesOpacity={innerLinesOpacity}
            innerLinesLength={innerLinesLength}
            innerLinesThickness={innerLinesThickness}
            innerLinesOffset={innerLinesOffset}
            outerLinesOpacity={outerLinesOpacity}
            outerLinesLength={outerLinesLength}
            outerLinesThickness={outerLinesThickness}
            outerLinesOffset={outerLinesOffset}
         >
            {/* <span className="inner-lines-up" />
            <span className="inner-lines-right" />
            <span className="inner-lines-bottom" />
            <span className="inner-lines-left" /> */}
            <span className="center-dot" />
         </Wrapper>
      </Container>
   );
}