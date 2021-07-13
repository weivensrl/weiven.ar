import styles from "@/components/Heros/Hero.module.css"
import AboutWave from "@/components/Plugs/AboutWave"
import Image from "next/image"

export default function HeroContact() {
  return (
    <div className={styles.container}>
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-6 py-32 mx-auto text-left md:py-64 md:px-0">
        <h1 className="w-full mx-auto mb-3 text-3xl font-bold tracking-wider text-center text-gray-100 md:text-6xl ">
          Contacto
        </h1>
        <div className="pt-6 text-center ">
          <a className="text-2xl duration-200 transform border-b-2 border-transparent hover:border-white" href="mailto:info@weiven.ar">
            info@weiven.ar
          </a>
          <div className="pt-6 text-2xl">Florida 141 - 2do piso</div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-gray-800 bg-opacity-50 ">
        <div className="opacity-10 ">
          <Image
            src="/static/images/servicios.jpg"
            layout="fill"
            objectFit="cover"
            alt="Diseño de servicios"
          />
        </div>
      </div>
      <AboutWave />
    </div>
  )
}
