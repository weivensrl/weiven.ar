import Head from "next/head"
import styles from "../styles/Home.module.css"
import Layout from "@/components/Layout"
import Objective from "@/components/Plugs/Objective"
import Solutions from "@/components/Plugs/Solutions"

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
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-700">
            <h1 className="py-24 text-4xl font-bold text-center text-gray-100">
              Contacto
            </h1>
            <div className="py-12 text-center bg-white">
              <div>Florida 141 2 piso</div>
              <a className="" href="mailto:info@weiven.ar">
                info@weiven.ar
              </a>
            </div>
            <Solutions />
            <Objective />
          </div>
        </main>
      </div>
    </Layout>
  )
}
