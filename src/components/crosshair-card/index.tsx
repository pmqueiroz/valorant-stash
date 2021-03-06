import React from 'react';
import Crosshair from '../crosshair';
import { Container } from './styles';
import Button from '../button'
import { CrosshairData } from '../../utils/types';

interface CrosshairsCardData extends CrosshairData{
   name: string;   
}

const CrosshairsCard: React.FunctionComponent<CrosshairsCardData> = ({ 
   name, 
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
   outerLinesOffset,
}) => {
   return (
    <Container>
       <h1>{name}</h1>
       <div className="bg">
         <Crosshair
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
         />
       </div>

       <Button>
            Usar Esta
       </Button>
       <span>{name.replace(/\s/g,'')}</span>
    </Container>    
   )
 };

 export default CrosshairsCard;