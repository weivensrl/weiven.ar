import styles from "@/components/Plugs/Solutions.module.css"
import Image from "next/image"

export default function Solutions() {
  return (
    <div className={styles.container}>
      <div className="py-24 text-gray-800 bg-white">
        <div className="grid max-w-5xl gap-3 mx-auto md:grid-cols-2">
          <div className="px-6 text-center md:text-left ">
            <div className="">
              <Image src="/static/images/icono-servicios.png" width="150" height="150" alt="Diseño de servicios"/>
            </div>
            <h3 className="pt-2 mb-6 text-3xl font-bold text-gray-800 ">
              Soluciones a medida
            </h3>
            <div className="max-w-xl mx-auto text-gray-800">
              <p>
                Ofrecemos soluciones innovadoras con velocidad y agilidad. Nuestra
                independencia tecnológica, combinada con un amplio ecosistema de socios y
                el talento de nuestros profesionales nos posiciona para ofrecer un valor
                diferencial a nuestros clientes.
              </p>
            </div>
          </div>
          <div className="px-6 text-center md:text-left ">
            <div className="">
            <Image src="/static/images/icono-desarrollo.png" width="150" height="150" alt="Diseño de servicios"/>
            </div>
            <h3 className="pt-2 mb-6 text-3xl font-bold text-gray-800 ">Data Centers</h3>
            <div className="max-w-xl mx-auto text-gray-800">
              <p>
                Diseñamos y construimos datas centers llave en mano. Realizamos el
                análisis y la planificación, la arquitectura, la flexibilidad, los
                sistemas de enfriamiento, energía, seguridad física e informática,
                redundancia y su escalabilidad. Trabajamos bajo los estándares TIER del
                Uptime Institute, ICREA, CEEDA e ISO 9001.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
