import Head from "next/head";
import { Container, CardsWrappers, Header } from '../../styles/pages/crosshairs';
import CrosshairCard from '../../components/crosshair-card';
import logo from 'logo.svg';
import crosshairs from '../../assets/crosshairs.json';

export default function Crosshairs() {
   return (
      <>
         <Head>
            <title>Valorant Stash | Crosshairs</title>
         </Head>
         <Container>
               <Header>
                  <img src="logo.svg" alt=""/>
                  <nav>
                     <div>
                        <a href="/crosshairs">mirinhas</a>
                     </div>
                     <div>
                        <a href="">skins</a>
                     </div>
                  </nav>
                  <button>
                     Discord
                  </button>
               </Header>
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
 