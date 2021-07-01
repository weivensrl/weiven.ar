import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "@/components/Layout"
import About from "@/components/Plugs/About"
import Services from "@/components/Plugs/Services"
import Security from "@/components/Plugs/Security"
import Partners from "@/components/Plugs/Partners"
import Objective from "@/components/Plugs/Objective"

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
          <About />
          <Services />
          <Security />
          <Partners />
          <Objective />
        </main>
      </div>
    </Layout>
  )
}
