import { Container, Button } from './styles';
import backgroundMap from '../../assets/ascent.png';

export default function CrosshairsCard() {
   return (
    <Container>
       <h1>PONTINHO</h1>
       <img src={backgroundMap} alt="Ascent"/>

       <Button>
         <button>
            Usar Esta
         </button>
       </Button>
       <span>PONTINHO</span>
    </Container>    
   )
 }