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
          {services.map((service, i) => {
            return (
              <div key={i} className={styles.item}>
                <Fade delay={service.delay} duration={1200}>
                  <div className="absolute top-0 right-0 mx-3 mt-2 kush-center opacity-80">
                    <span className="mb-3 text-4xl">{service.icon}</span>
                  </div>
                  <h3 className={styles.itemTitle}>{service.title}</h3>
                  <p>{service.description}</p>
                </Fade>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


const services = [
  {
    title: "Diseño de servicios",
    description:
      "Tenemos la capacidad de transformar todos los procesos y servicios de una empresa u organismo rediseñándolos en función de los usuarios internos y externos a partir de la implementación tecnológica.",
    delay: 200,
    icon: <FcMindMap />,
  },
  {
    title: "Desarrollo de Software",
    description:
      "Brindamos soluciones en software y aplicaciones móviles. Somos partner de las empresas líderes en el mercado pudiendo dar soluciones con software licenciatario o software libre ofreciendo el soporte y desarrollo de software propietario de manera personalizada.",
    delay: 400,
    icon: <FcSettings />,
  },
  {
    title: "Experiencia de usuario",
    description:
      "Diseñamos experiencias de calidad según estándares internacionales y buenas prácticas UX/IU. Contamos con servicios de aseguramiento de la calidad: QA Web (CMS, aplicaciones web, diseño, etc.), QA Mobile (aplicaciones móviles, responsive, user experience, etc.",
    delay: 500,
    icon: <FcMultipleDevices />,
  },
  {
    title: "Soluciones en infraestructura",
    description:
      "Disponemos de las mejores soluciones tecnológicas del mercado para que nuestros clientes puedan desarrollarse y satisfacer todas sus necesidades.",
    delay: 800,
    icon: <FcDataProtection />,
  },
  {
    title: "Blockchain",
    description:
      "Expertos en la aplicación y desarrollo de proyectos blockchain, criptomonedas e implementación de billeteras virtuales para gobiernos en todos sus niveles (Municipales, Provinciales y Nacionales). Abordaje tecnológico práctico con utilidad real para la gestión e implementación de políticas públicas.",
    delay: 900,
    icon: <FcSafe />,
  },
  {
    title: "Smart Cities",
    description:
      "Diseñamos planes estratégicos y desarrollamos productos para Smart Cities. Movilidad urbana y car parking. Transformación digital de organismos públicos (Municipales, provinciales y nacionales). Seguridad inteligente.",
    delay: 1000,
    icon: <FcOrganization />,
  },
]