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
                     />
                  ))}
               </CardsWrappers>
         </Container>   
      </>
   )
 }
 