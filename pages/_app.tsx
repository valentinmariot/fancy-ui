import { FC } from 'react';
import '../styles/globals.scss'

interface IApp {
  Component: React.FC
  pageProps: any
}
/** @param {import('next/app').AppProps} props */
const MyApp:FC<IApp> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
