import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Link from 'next/link'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Layout>
        <Component {...pageProps} />
      </Layout>    
    </>
  )
}
