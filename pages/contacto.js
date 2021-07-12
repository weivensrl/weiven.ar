import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "@/components/Layout"
import Objective from "@/components/Plugs/Objective"
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
          <HeroContact />
          <div className="bg-white">
            {/* <Objective /> */}
          </div>
        </main>
      </div>
    </Layout>
  )
}
