// import AppContext from '@context/AppContext
import '../styles/globals.scss'
import AppContext from '@context/AppContext';
import useSearchImage from '@hooks/useSearchImage';

export default function App({ Component, pageProps }) {
  const gettingSearch = useSearchImage();
  return (
    <AppContext.Provider value={gettingSearch}>
      <Component {...pageProps} />
    </AppContext.Provider> 
  )
}
