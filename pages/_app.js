import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <content>
      <Navbar />
      <Component {...pageProps} />
      < Footer />
    </content>
  )
}

export default MyApp
