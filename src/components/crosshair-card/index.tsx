import React from 'react';
import { Container, Button } from './styles';

interface CrosshairsCardData {
   name: string;   
}

const CrosshairsCard: React.FunctionComponent<CrosshairsCardData> = ({ name, ...rest}) => {
   return (
    <Container>
       <h1>{name}</h1>
       <img src="ascent.png" alt="Ascent"/>

       <Button>
         <button>
            Usar Esta
         </button>
       </Button>
       <span>{name.replace(/\s/g,'')}</span>
    </Container>    
   )
 };

 export default CrosshairsCard;