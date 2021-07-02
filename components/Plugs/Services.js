import styles from "@/components/Plugs/Services.module.css"
import Image from "next/image"
import { FcServices, FcIdea, FcConferenceCall } from "react-icons/fc"

export default function Services() {
  return (
    <div className={styles.container}>

      <div className="bg-fixed bg-white text-gray-50 pattern-diagonal-lines-lg">
        <div className={styles.services}>
          <div className={styles.item}>
            <Image
              src="/static/images/icono-servicios.png"
              width="100"
              height="100"
              alt="Diseño de servicios"
            />
            <h3 className={styles.itemTitle}>Diseño de servicios</h3>
            <h4 className={styles.subtitle}>Service Design</h4>
            <p>
              Tenemos la capacidad de transformar todos los procesos y servicios de una
              empresa u organismo rediseñándolos en función de los usuarios internos y
              externos a partir de la implementación tecnológica.{" "}
            </p>
          </div>
          <div className={styles.item}>
            <Image
              src="/static/images/icono-desarrollo.png"
              width="100"
              height="100"
              alt="Desarrollo de Software"
            />
            <h3 className={styles.itemTitle}>Desarrollo de Software</h3>
            <h4 className={styles.subtitle}>Software Factory</h4>
            <p>
              Brindamos soluciones en software y aplicaciones móviles. Somos partner de
              las empresas líderes del mercado del en el mercado pudiendo dar soluciones
              con software licenciatario o software libre ofreciendo el soporte y
              desarrollo de software propietario de manera personalizada.
            </p>
          </div>
          <div className={styles.item}>
            <Image
              src="/static/images/icono-uxui.png"
              width="100"
              height="100"
              alt="UX/UI"
            />
            <h3 className={styles.itemTitle}>UX/UI</h3>
            <h4 className={styles.subtitle}>Experiencia de usuario</h4>
            <p>
              Diseñamos experiencias de calidad según estándares internacionales y buenas
              prácticas UX/IU. Contamos con servicios de aseguramiento de la calidad: QA
              Web (CMS, aplicaciones web, diseño, etc.), QA Mobile (aplicaciones móviles,
              responsive, user experience, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
