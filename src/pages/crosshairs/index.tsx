import { Container, CardsWrappers, Header } from '../../styles/pages/crosshairs';
import CrosshairCard from '../../components/crosshair-card';
import logo from '../../assets/logo.svg';

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
            <CrosshairCard/>
            <CrosshairCard/>
            <CrosshairCard/>
            <CrosshairCard/>
            <CrosshairCard/>
            <CrosshairCard/>
            <CrosshairCard/>
            <CrosshairCard/>
            <CrosshairCard/>
            <CrosshairCard/>
            <CrosshairCard/>
            <CrosshairCard/>
            <CrosshairCard/>
            <CrosshairCard/>
         </CardsWrappers>
    </Container>    
   )
 }
 