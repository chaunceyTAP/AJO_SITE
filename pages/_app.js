import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

console.log(process.env.ORG_ID)
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
