import Crosshair from "../components/crosshair";

import crosshairData from '../assets/crosshairs.json';

export default function Teste () {
   return (
      <div>
            <Crosshair
               centerDot={false}
               centerDotOpacity={0}
               centerDotThickness={5}
               outlines={false}
               outlinesOpacity={0}
               outlinesthickness={0}
               innerLines={true}
               innerLinesOpacity={1}
               innerLinesLength={15}
               innerLinesThickness={2}
               innerLinesOffset={0}
               outerLinesOpacity={1}
               outerLinesLength={20}
               outerLinesThickness={10}
               outerLinesOffset={0}
            />
      </div>
   )
}