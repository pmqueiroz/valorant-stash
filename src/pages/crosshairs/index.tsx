import Head from "next/head";
import { Container, CardsWrappers } from '../../styles/pages/crosshairs';
import CrosshairCard from '../../components/crosshair-card';
import crosshairs from '../../assets/crosshairs.json';

export default function Crosshairs() {
   return (
      <>
         <Head>
            <title>Valorant Stash | Crosshairs</title>
         </Head>
         <Container>
               <CardsWrappers>
                  {crosshairs.map(crosshair => (
                     <CrosshairCard 
                        key={crosshair.name}
                        name={crosshair.name}
                        centerDot={crosshair.general["center-dot"]}
                        centerDotOpacity={crosshair.general["center-dot-opacity"]}
                        centerDotThickness={crosshair.general["center-dot-thickness"]}
                        outlines={crosshair.general.outlines}
                        outlinesOpacity={crosshair.general["outline-opacity"]}
                        outlinesthickness={crosshair.general["outline-thickness"]}
                        innerLines={crosshair["inner-line"].shown}
                        innerLinesOpacity={crosshair["inner-line"].opacity}
                        innerLinesLength={crosshair["inner-line"].length}
                        innerLinesThickness={crosshair["inner-line"].thickness}
                        innerLinesOffset={crosshair["inner-line"].offset}
                        outerLinesOpacity={crosshair["outer-lines"].opacity}
                        outerLinesLength={crosshair["outer-lines"].length}
                        outerLinesThickness={crosshair["outer-lines"].thickness}
                        outerLinesOffset={crosshair["outer-lines"].offset}
                     />
                  ))}
               </CardsWrappers>
         </Container>   
      </>
   )
 }
 