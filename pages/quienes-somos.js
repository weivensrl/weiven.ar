import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "@/components/Layout"
import About from "@/components/Plugs/About"
import Partners from "@/components/Plugs/Partners"

export default function AboutPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Weiven - Simplificamos la tecnología.</title>
          <meta name="description" content="Simplificamos la tecnología." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className="min-h-screen bg-white">
            <About />
            <Partners />
          </div>
        </main>
      </div>
    </Layout>
  )
}
