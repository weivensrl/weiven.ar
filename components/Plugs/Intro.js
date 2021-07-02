import styles from "@/components/Plugs/Intro.module.css"
import AboutWave from "@/components/Plugs/AboutWave"
import Image from "next/image"

export default function About() {
  return (
    <div className={styles.container}>
      <div className="relative z-10 flex flex-col items-start justify-center w-full max-w-5xl px-6 mx-auto text-left md:px-0">
        <h1 className="w-full mx-auto mb-3 text-3xl text-gray-100 md:text-6xl ">
          Simplificamos <br/> la tecnología
        </h1>
        <h2 className="w-full max-w-md my-3 text-xl text-left text-gray-100 md:text-2xl">
          Expertos en tecnología para negocios y organizaciones gubernamentales.
        </h2>
      </div>
      <div className="absolute inset-0 z-0 opacity-50">
        <Image
          src="/static/images/about-weiven.jpg"
          layout="fill"
          objectFit="cover"
          alt="Diseño de servicios"
        />
      </div>
      <AboutWave />
    </div>
  )
}
