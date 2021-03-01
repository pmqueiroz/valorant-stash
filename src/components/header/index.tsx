import { Container } from './styles';
import { useRouter } from 'next/router';

export default function Header() {
   const route = useRouter();

   const path = route.pathname;

   return (
      <Container>
         <img src="logo.svg" alt=""/>
         <nav>
            <div className={path === '/crosshairs' && 'active'}>
               <a href="/crosshairs">mirinhas</a>
            </div>
            <div className={path === '/skins' && 'active'}>
               <a href="">skins</a>
            </div>
         </nav>
         <button>
            Discord
         </button>
      </Container>
   )
}