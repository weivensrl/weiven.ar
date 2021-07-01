import styles from "@/components/Plugs/Security.module.css"

export default function Security() {
  return (
    <div className={styles.container}>
      <h3 className="mb-2 text-3xl text-blue-300 ">Seguridad en informatica</h3>
      <div className="max-w-xl mx-auto">
        Contamos con los mejores profesionales del sector de la Seguridad Informática.
        Realizamos auditorias e implementaciones en Ciberseguridad.
      </div>
    </div>
  )
}
