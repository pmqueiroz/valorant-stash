import { Container, CardsWrappers, Header } from '../../styles/pages/crosshairs';
import CrosshairCard from '../../components/crosshair-card';
import logo from '../../assets/logo.svg';
import crosshairs from '../../assets/source/crosshairs.json';

export default function Crosshairs() {
   return (
    <Container>
         <Header>
            <img src={logo} alt=""/>
            <nav>
               <div>
                  <a href="/crosshairs">mirinha</a>
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
   )
 }
 