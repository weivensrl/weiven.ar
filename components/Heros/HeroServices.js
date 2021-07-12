import styles from "@/components/Heros/Hero.module.css"
import AboutWave from "@/components/Plugs/AboutWave"
import Image from "next/image"

export default function HeroService() {
  return (
    <div className={styles.container}>
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-6 mx-auto text-left md:px-0">
        <h1 className="w-full mx-auto mb-3 text-3xl text-center text-gray-100 md:text-6xl ">
        Servicios
        </h1>
      </div>
      <div className="absolute inset-0 z-0 bg-blue-800 bg-opacity-50 ">
        <div className="opacity-20 ">
          <Image
            src="/static/images/data-center.jpg"
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
