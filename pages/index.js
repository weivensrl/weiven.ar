import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "@/components/Layout"
import Intro from "@/components/Plugs/Intro"
import About from "@/components/Plugs/About"
import Services from "@/components/Plugs/Services"
import Security from "@/components/Plugs/Security"
import Partners from "@/components/Plugs/Partners"
import Objective from "@/components/Plugs/Objective"
import Solutions from "@/components/Plugs/Solutions"
import Agile from "@/components/Plugs/Agile"
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
          <div className="bg-white">
          <h2 className={styles.Title}>Servicios</h2>
          </div>
          <Services />
          <Security />
          <Solutions />
          <Agile/>
          <Partners />
          <Objective />
        </main>
      </div>
    </Layout>
  )
}
