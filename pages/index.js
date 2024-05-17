import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    
    <div className="container">
      <Head>
        <title>onglet</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="styles.css">

      </Head>

      <main>
    
        <Header title="SITE" />
        <p className="description">
          va voir la <code>pages/index.js</code>
        </p>


      </main>

      <Footer />
    </div>
  )
}
