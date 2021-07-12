import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "@/components/Layout"
import Services from "@/components/Plugs/Services"
import Security from "@/components/Plugs/Security"
import Solutions from "@/components/Plugs/Solutions"
import Agile from "@/components/Plugs/Agile"
import Hero from "@/components/Heros/HeroServices"
import HeroContact from "@/components/Heros/HeroContact"

export default function ServicesPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Weiven - Simplificamos la tecnología.</title>
          <meta name="description" content="Simplificamos la tecnología." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Hero />
          <div className="bg-gradient-to-br from-blue-500 to-blue-800">
            <Services />
            <Security />
            <Solutions />
            <Agile />
            <HeroContact/>
          </div>
        </main>
      </div>
    </Layout>
  )
}
