import styles from "@/components/Plugs/Security.module.css"
import Fade from "react-reveal/Fade"
import { IoIosArrowDown } from "react-icons/io"
import AnchorLink from "react-anchor-link-smooth-scroll"

export default function Security() {
  return (
    <div className={styles.container}>
      <div className="px-4 py-24 text-gray-900 bg-fixed bg-black bg-opacity-90 pattern-diagonal-lines-lg">
        <Fade delay={200} duration={1200}>
          <h3 className="mb-2 text-3xl text-yellow-500 ">Seguridad informática</h3>
          <div className="max-w-2xl mx-auto text-xl text-white">
            Contamos con los mejores profesionales del sector en Seguridad.
            Realizamos auditorias e implementaciones en Ciberseguridad.
          </div>
          <AnchorLink
            className="flex items-center justify-center py-1 mx-auto mt-6 font-sans text-lg font-bold text-gray-800 transition-all duration-500 transform bg-white border-b-2 border-transparent rounded shadow-md w-60 hover:border-yellow-500 hover:text-yellow-600"
            href="#contact"
          >
            <span className="mr-3">Consultar</span>
            <IoIosArrowDown className="animate-pulse "/>
          </AnchorLink>
        </Fade>
      </div>
    </div>
  )
}
