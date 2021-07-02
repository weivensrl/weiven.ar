import styles from "@/components/Plugs/Security.module.css"

export default function Security() {
  return (
    <div className={styles.container}>
      <div className="py-24 text-gray-900 bg-fixed bg-black bg-opacity-90 pattern-diagonal-lines-lg">
        <h3 className="mb-2 text-3xl text-yellow-500 ">Seguridad en informatica</h3>
        <div className="max-w-xl mx-auto text-2xl text-white">
          Contamos con los mejores profesionales del sector de la Seguridad Informática.
          Realizamos auditorias e implementaciones en Ciberseguridad.
        </div>
      </div>
    </div>
  )
}
