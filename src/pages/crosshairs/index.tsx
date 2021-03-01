import Head from "next/head";
import { Container, CardsWrappers, Header } from '../../styles/pages/crosshairs';
import CrosshairCard from '../../components/crosshair-card';
import logo from '../../assets/logo.svg';
import crosshairs from '../../assets/source/crosshairs.json';

export default function Crosshairs() {
   return (
      <>
         <Head>
            <link
               rel="preload"
               href="../../assets/fonts/Tungsten-Bold.ttf"
               as="font"
               crossOrigin=""
            />
         </Head>
         <Container>
               <Header>
                  <img src={logo} alt=""/>
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
 