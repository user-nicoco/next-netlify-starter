import '@styles/globals.css'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'

function Application({ Component, pageProps }) {
    useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return <Component {...pageProps} />
}

export default Application


