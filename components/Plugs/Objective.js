import styles from "@/components/Plugs/Objective.module.css"
import Image from "next/image"

export default function Objective() {
  return (
    <div className={styles.container}>
      <div className="py-24 text-gray-800 bg-fixed bg-gradient-to-b from-white to-gray-300">
        <div className="grid max-w-5xl gap-3 mx-auto md:grid-cols-2">
          <div>
            <Image
              src="/static/images/weiven-objectives.png"
              width="1800"
              height="1151"
              layout="responsive"
              alt="Cámara de la Industria del Software"
            />
          </div>
          <div className="px-6 text-center md:text-left ">
            <h3 className="pt-12 mb-6 text-3xl text-gray-800 ">Nuestro Objetivo</h3>
            <div className="max-w-xl mx-auto text-gray-800">
              <p>
                La misión de Weiven es brindar a sus clientes servicios y productos de
                excelente calidad en forma ágil y eficiente respaldados por extensos
                servicios de valor agregado.
              </p>
              <p>
                De la mano de nuestros socios, te acompañamos a innovar más rápido, ser
                más ágiles y agregar más valor a sus productos y servicios de manera
                segura y simplificada
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-12 bg-yellow-500 shadow-xl"></div>
    </div>
  )
}
