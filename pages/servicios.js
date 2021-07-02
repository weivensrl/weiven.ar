import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "@/components/Layout"
import Services from "@/components/Plugs/Services"
import Security from "@/components/Plugs/Security"

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
          <Services />
          <Security />
        </main>
      </div>
    </Layout>
  )
}
