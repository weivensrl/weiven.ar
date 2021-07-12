import styles from "@/components/Plugs/Partners.module.css"
import Image from "next/image"

export default function Partners() {
  return (
    <div className={styles.container}>
      <div className="grid max-w-5xl gap-3 pt-24 mx-auto md:grid-cols-2">
        <div className="px-6 text-center md:text-left ">
          <h1 className="w-full mx-auto mb-6 text-4xl font-bold text-gray-900">Socios</h1>
          <div className="max-w-xl mx-auto text-gray-800">
            <h2 className="w-full mx-auto mb-3 text-xl text-gray-900">
              Nos respaldan las marcas líderes globales en soluciones de ciberseguridad,
              redes, cloud y manejo de datos. Trabajamos con más de 50 marcas líderes como
              <b>
                {" "}
                Hewlett Packard, Cisco, LG, Sony, APC, Epson, Motorola, Lenovo, Intel, AMD
              </b>
              , entre otras; esto les permite a nuestros clientes encontrar un portfolio
              completo para sus necesidades.
            </h2>
          </div>
        </div>
        <div className="shadow-xl">
          <Image
            src="/static/images/socios.jpg"
            width="1800"
            height="1151"
            layout="responsive"
            alt="Cámara de la Industria del Software"
          />
        </div>
      </div>
      <div className="max-w-xl p-6 mx-auto mt-12 text-center bg-white shadow-xl">
        <div className="mt-6">
          <Image
            src="/static/images/logo-cessi.png"
            width="100"
            height="63"
            alt="Cámara de la Industria del Software"
          />
        </div>
        <h3 className="mt-6 text-gray-600">
          Somos socios de la Cámara de la Industria del Software y tenemos alianzas con
          las empresas nacionales más importantes del sector. Somos socios de la Cámara de
          la Industria del Software y tenemos alianzas con las empresas nacionales más
          importantes del sector.
        </h3>
      </div>
    </div>
  )
}
