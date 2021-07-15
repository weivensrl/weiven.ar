import styles from "@/components/Plugs/Services.module.css"
import Image from "next/image"
import {
  FcDataProtection,
  FcMindMap,
  FcOrganization,
  FcSettings,
  FcMultipleDevices,
  FcSafe,
} from "react-icons/fc"
import Fade from "react-reveal/Fade"

export default function Services() {
  return (
    <div className={styles.container}>
      <div className="bg-white">
        <div className={styles.services}>
          <Fade delay={200} duration={1200}>
            <div className={styles.item}>
              <div className="absolute top-0 right-0 mx-3 mt-2 kush-center opacity-80">
                <FcMindMap className="mb-3 text-4xl" />
              </div>
              <h3 className={styles.itemTitle}>Diseño de servicios</h3>
              <h4 className={styles.subtitle}>Service Design</h4>
              <p>
                Tenemos la capacidad de transformar todos los procesos y servicios de una
                empresa u organismo rediseñándolos en función de los usuarios internos y
                externos a partir de la implementación tecnológica.{" "}
              </p>
            </div>
          </Fade>
          <Fade delay={400} duration={1200}>
            <div className={styles.item}>
              <div className="absolute top-0 right-0 mx-3 mt-2 kush-center opacity-80">
                <FcSettings className="mb-3 text-4xl" />
              </div>
              <h3 className={styles.itemTitle}>Desarrollo de Software</h3>
              <h4 className={styles.subtitle}>Software Factory</h4>
              <p>
                Brindamos soluciones en software y aplicaciones móviles. Somos partner de
                las empresas líderes en el mercado pudiendo dar soluciones
                con software licenciatario o software libre ofreciendo el soporte y
                desarrollo de software propietario de manera personalizada.
              </p>
            </div>
          </Fade>
          <Fade delay={600} duration={1200}>
            <div className={styles.item}>
              <div className="absolute top-0 right-0 mx-3 mt-2 kush-center opacity-80">
                <FcMultipleDevices className="mb-3 text-4xl" />
              </div>
              <h3 className={styles.itemTitle}>Experiencia de usuario</h3>
              <h4 className={styles.subtitle}>UX/UI</h4>
              <p>
                Diseñamos experiencias de calidad según estándares internacionales y
                buenas prácticas UX/IU. Contamos con servicios de aseguramiento de la
                calidad: QA Web (CMS, aplicaciones web, diseño, etc.), QA Mobile
                (aplicaciones móviles, responsive, user experience, etc.
              </p>
            </div>
          </Fade>
          <Fade delay={200} duration={1200}>
            <div className={styles.item}>
              <div className="absolute top-0 right-0 mx-3 mt-2 kush-center opacity-80">
                <FcDataProtection className="mb-3 text-4xl" />
              </div>
              <h3 className={styles.itemTitle}>Soluciones en infraestructura</h3>
              <p>
                Disponemos de las mejores soluciones tecnológicas del mercado para que
                nuestros clientes puedan desarrollarse y satisfacer todas sus necesidades.
              </p>
            </div>
          </Fade>
          <Fade delay={400} duration={1200}>
            <div className={styles.item}>
              <div className="absolute top-0 right-0 mx-3 mt-2 kush-center opacity-80">
                <FcSafe className="mb-3 text-4xl" />
              </div>
              <h3 className={styles.itemTitle}>
                Blockchain
              </h3>
              <p>
                Expertos en la aplicación y desarrollo de proyectos blockchain,
                criptomonedas e implementación de billeteras virtuales para gobiernos
                en todos sus niveles (Municipales, Provinciales y Nacionales). Abordaje tecnológico práctico con utilidad real para la gestión e implementación de políticas públicas.
              </p>
            </div>
          </Fade>
          <Fade delay={600} duration={1200}>
            <div className={styles.item}>
              <div className="absolute top-0 right-0 mx-3 mt-2 kush-center opacity-80">
                <FcOrganization className="mb-3 text-4xl" />
              </div>
              <h3 className={styles.itemTitle}>Smart Cities</h3>
              <p>
                Diseñamos planes estratégicos y desarrollamos productos para Smart Cities.
                Movilidad urbana y car parking. Transformación digital de organismos
                públicos (Municipales, provinciales y nacionales). Seguridad inteligente.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}
