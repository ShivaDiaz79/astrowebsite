import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title> Astro Web - {pagina} </title>
        <meta name='description' content='Sitio Web de Academias de Baile'/>
        </Head>
        <Header />

      {children}
      <Footer  />
    </div>
  )
}

export default Layout
