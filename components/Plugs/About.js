import styles from "@/components/Plugs/About.module.css"
import AboutWave from "@/components/Plugs/AboutWave"
// import HeroSlider from "@/components/HeroSlider/HeroSlider"
import Image from "next/image"

export default function About() {
  return (
    <div className={styles.container}>
      <div className="mt-24 kush-center">
        <Image
          src="/static/images/weiven-vertical.png"
          width="150"
          height="70"
          alt="Weiven"
        />
      </div>
      <p className="w-full max-w-2xl py-12 mx-auto text-2xl text-center">
        Somos una empresa argentina de tecnología que brinda soluciones estratégicas para
        problemas complejos. Trabajamos en múltiples sectores, incluyendo salud, finanzas,
        educación y sector público.
      </p>
      <AboutWave />
    </div>
  )
}
