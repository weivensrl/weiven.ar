import styles from "@/components/Plugs/Services.module.css"
import Image from "next/image"
import {
  FcDataProtection,
  FcMindMap,
  FcOrganization,
  FcSettings,
  FcMultipleDevices,
  FcIdea,
  FcSafe,
} from "react-icons/fc"
import Fade from "react-reveal/Fade"

export default function Services() {
  return (
    <div className={styles.container}>
      <div className="bg-white">
        <div className={styles.services}>
          <Fade>
            <div className={styles.item}>
              <div className="kush-center">
                <FcMindMap className="mb-3 text-6xl" />
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
          <Fade>
            <div className={styles.item}>
              <div className="kush-center">
                <FcSettings className="mb-3 text-6xl" />
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
          <Fade>
            <div className={styles.item}>
              <div className="kush-center">
                <FcMultipleDevices className="mb-3 text-6xl" />
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
          <Fade>
            <div className={styles.item}>
              <div className="kush-center">
                <FcDataProtection className="mb-3 text-6xl" />
              </div>
              <h3 className={styles.itemTitle}>Soluciones en infraestructura</h3>
              <p>
                Disponemos de las mejores soluciones tecnológicas del mercado para que
                nuestros clientes puedan desarrollarse y satisfacer todas sus necesidades.
              </p>
            </div>
          </Fade>
          <Fade>
            <div className={styles.item}>
              <div className="kush-center">
                <FcSafe className="mb-3 text-6xl" />
              </div>
              <h3 className={styles.itemTitle}>
                Blockchain, criptomonedas y desarrollo de billeteras virtuales.
              </h3>
              <p>
                Somos expertos en la aplicación y desarrollo de proyectos en blockchain,
                criptomonedas e implementación de billeteras virtuales para gobiernos.
                Acompañamos a los Estados de todos los niveles (Municipales, Provinciales
                y Nacionales) en el abordaje tecnológico práctico basado en blockchain con
                utilidad real para la gestión e implementación de políticas públicas.
              </p>
            </div>
          </Fade>
          <Fade>
            <div className={styles.item}>
              <div className="kush-center">
                <FcOrganization className="mb-3 text-6xl" />
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
