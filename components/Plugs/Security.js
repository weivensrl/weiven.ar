import styles from "@/components/Plugs/Security.module.css"
import Fade from "react-reveal/Fade"

export default function Security() {
  return (
    <div className={styles.container}>
      <div className="px-4 py-24 text-gray-900 bg-fixed bg-black bg-opacity-90 pattern-diagonal-lines-lg">
        <Fade delay={200} bottom duration={1200}>
          <h3 className="mb-2 text-3xl text-yellow-500 ">Seguridad informática</h3>
          <div className="max-w-xl mx-auto text-xl text-white">
            Contamos con los mejores profesionales del sector de la Seguridad Informática.
            Realizamos auditorias e implementaciones en Ciberseguridad.
          </div>
        </Fade>
      </div>
    </div>
  )
}
