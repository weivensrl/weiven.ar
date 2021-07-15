import "@/styles/globals.css"
import "@/styles/Offcanvas.css"
import "@/styles/Header.css"
import "@/styles/Pattern.css"
import "@fontsource/archivo"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
  
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route}/>
    </AnimatePresence>
  )
}

export default MyApp
