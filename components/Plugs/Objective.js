import styles from "@/components/Plugs/Objective.module.css"

export default function Objective() {
  return (
    <div className={styles.container}>
      <h3 className="mb-6 text-3xl text-center text-gry-800 ">Nuestro Objetivo</h3>
      <div className="max-w-xl mx-auto">
        <p>
          La misión de Weiven es brindar a sus clientes servicios y productos de excelente
          calidad en forma ágil y eficiente respaldados por extensos servicios de valor
          agregado.
        </p>
        <p>
          De la mano de nuestros socios, te acompañamos a innovar más rápido, ser más
          ágiles y agregar más valor a sus productos y servicios de manera segura y
          simplificad
        </p>
      </div>
    </div>
  )
}
