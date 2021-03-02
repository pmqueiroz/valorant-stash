import { Container } from './styles';



export default function Button({ children }) {
   return (
      <Container>
         <button>
            {children}
         </button>
      </Container>
   )
}