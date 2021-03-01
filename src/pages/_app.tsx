import GlobalStyle from '../styles/global';
import Header from '../components/header';

function MyApp({ Component, pageProps }) {
  return (
     <>
        <GlobalStyle/>
        <Header />
        <Component {...pageProps} />
     </>
  );
}

export default MyApp
