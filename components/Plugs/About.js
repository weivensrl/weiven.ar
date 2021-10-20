import styles from "@/components/Plugs/About.module.css"
import AboutWave from "@/components/Plugs/AboutWave"
// import HeroSlider from "@/components/HeroSlider/HeroSlider"
import Image from "next/image"
import Fade from "react-reveal/Fade"
export default function About() {
  return (
    <div className={styles.container}>
      <div className="mt-12 kush-center" id="about">
        <Fade delay={200} duration={1200}>
          <Image
            src="/static/images/weiven-vertical.png"
            width="150"
            height="70"
            alt="Weiven"
          />
        </Fade>
      </div>
      <Fade delay={400} duration={1200}>
        <p className="w-full max-w-2xl px-4 pb-12 mx-auto text-lg text-center md:text-2xl">
          Somos una empresa argentina de tecnología que brinda soluciones estratégicas
          para problemas complejos. Trabajamos en múltiples sectores, incluyendo salud,
          finanzas, educación y sector público.
        </p>
      </Fade>

      <div className="hidden md:block">
        <AboutWave />
      </div>
    </div>
  )
}
