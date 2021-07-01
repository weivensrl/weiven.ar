import styles from "@/components/Plugs/Partners.module.css"

export default function Partners() {
  return (
    <div className={styles.container}>
      <div className="flex flex-col items-center justify-center w-full max-w-3xl px-6 mx-auto text-center">
        <h1 className="w-full mx-auto mb-3 text-4xl text-gray-900">
          Socios & Partners
        </h1>
        <h2 className="w-full mx-auto mb-3 text-xl text-gray-900">
          Nos respaldan las marcas líderes globales en soluciones de ciberseguridad,
          redes, cloud y manejo de datos. Trabajamos con más de 50 marcas líderes como
          Hewlett Packard, Cisco, LG, Sony, APC, Epson, Motorola, Lenovo, Intel, AMD, entre
          otras; esto les permite a nuestros clientes encontrar un portfolio completo para
          sus necesidades.
        </h2>
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
