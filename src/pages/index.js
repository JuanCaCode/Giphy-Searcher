import Head from 'next/head'
import Header from '@components/Header';
import SearchingSection from '@containers/SearchingSection';

import { Henny_Penny, Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Giphy Searcher</title>
        <meta name="description" content="This application is for searching Giff animations, a personal proyect for web development practice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchingSection />
    </>
  )
}
