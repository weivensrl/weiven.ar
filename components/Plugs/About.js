import styles from "@/components/Plugs/About.module.css"
import AboutWave from "@/components/Plugs/AboutWave"

export default function About() {
  return (
    <div className={styles.container}>
      <div className="flex flex-col items-center justify-center w-full max-w-3xl px-6 mx-auto text-center">
        <h1 className="w-full mx-auto mb-3 text-4xl font-bold text-gray-800">
          Simplificamos la tecnología
        </h1>
        <h2 className="w-full mx-auto mb-3 text-3xl text-gray-100">
          Expertos en tecnología para negocios y organizaciones gubernamentales.
        </h2>
      </div>
      <AboutWave/>
    </div>
  )
}
