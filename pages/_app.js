import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <content>
      <Navbar />
      <Component {...pageProps} />
    </content>
  )
}

export default MyApp
