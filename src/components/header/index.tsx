import { Container } from './styles';
import { useRouter } from 'next/router';

export default function Header() {
   const route = useRouter();

   const path = route.pathname;

   return (
      <Container>
         <img src="logo.svg" alt=""/>
         <nav>
            <a href="/crosshairs" className={path === '/crosshairs' && 'active'}>
               <span >mirinhas</span>
            </a>
            <a href="/skins" className={path === '/skins' && 'active'}>
               <span >skins</span>
            </a>
         </nav>
         <button>
            Discord
         </button>
      </Container>
   )
}