import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "@/components/Layout"
import Intro from "@/components/Heros/HeroIntro"
import About from "@/components/Plugs/About"
import Services from "@/components/Plugs/Services"
import Security from "@/components/Plugs/Security"
import Partners from "@/components/Plugs/Partners"
import Objective from "@/components/Plugs/Objective"
import Solutions from "@/components/Plugs/Solutions"
import Agile from "@/components/Plugs/Agile"
import HeroContact from "@/components/Heros/HeroContact"
import Fade from "react-reveal/Fade"
import Image from "next/image"

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Weiven - Simplificamos la tecnología.</title>
          <meta name="description" content="Simplificamos la tecnología." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Intro />
          <About />
          <div className="relative z-30 h-12 text-gray-200 bg-white border-b-2 border-blue-500 md:-mt-12 pattern-diagonal-lines-sm"></div>
          <div className="bg-white">
            <Fade delay={200} duration={1200}>
              <h2 className={styles.Title}>Servicios</h2>
            </Fade>
          </div>
          <Services />
          <Security />
          <Solutions />
          <Agile />
          <Partners />
          <Objective />
          <HeroContact />
        </main>
      </div>
    </Layout>
  )
}
