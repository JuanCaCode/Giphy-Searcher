// import AppContext from '@context/AppContext
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    // <AppContext.Provider>
      <Component {...pageProps} />
    // </AppContext.Provider> 
  )
}
