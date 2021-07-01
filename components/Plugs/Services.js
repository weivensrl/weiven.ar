import styles from "@/components/Plugs/Services.module.css"
import Image from 'next/image'

export default function Services() {
  return (
    <div className={styles.container}>
      <p className="w-full max-w-2xl mx-auto mb-12 text-lg text-center">
        Somos una empresa argentina de tecnología que brinda soluciones estratégicas para
        problemas complejos. Trabajamos en múltiples sectores, incluyendo salud, finanzas,
        educación y sector público.
      </p>
      {/* <h2 className={styles.Title}>Servicios</h2> */}
      <div className={styles.services}>
        <div className={styles.item}>
          <Image src="/static/images/icono-servicios.png" width="150" height="150" alt="Diseño de servicios"/>
          <h3 className={styles.itemTitle}>Diseño de servicios</h3>
          <h4 className={styles.subtitle}>Service Design</h4>
          <p>
            Tenemos la capacidad de transformar todos los procesos y servicios de una
            empresa u organismo rediseñándolos en función de los usuarios internos y
            externos a partir de la implementación tecnológica.{" "}
          </p>
        </div>
        <div className={styles.item}>
          <Image src="/static/images/icono-desarrollo.png" width="150" height="150" alt="Desarrollo de Software"/>
          <h3 className={styles.itemTitle}>Desarrollo de Software</h3>
          <h4 className={styles.subtitle}>Software Factory</h4>
          <p>
            Brindamos soluciones en software y aplicaciones móviles. Somos partner de las
            empresas líderes del mercado del en el mercado pudiendo dar soluciones con
            software licenciatario o software libre ofreciendo el soporte y desarrollo de
            software propietario de manera personalizada.
          </p>
        </div>
        <div className={styles.item}>
          <Image src="/static/images/icono-uxui.png" width="150" height="150" alt="UX/UI"/>
          <h3 className={styles.itemTitle}>UX/UI</h3>
          <h4 className={styles.subtitle}>Experiencia de usuario</h4>
          <p>
            Diseñamos experiencias de calidad según estándares
            internacionales y buenas prácticas UX/IU. Contamos con servicios de
            aseguramiento de la calidad: QA Web (CMS, aplicaciones web, diseño, etc.), QA
            Mobile (aplicaciones móviles, responsive, user experience, etc.
          </p>
        </div>
      </div>
    </div>
  )
}
