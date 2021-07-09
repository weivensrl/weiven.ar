import styles from "@/components/Plugs/Agile.module.css"

export default function Agile() {
  return (
    <div className={styles.container}>
      <div className="py-24 text-blue-600 bg-fixed bg-blue-500 bg-opacity-90 pattern-diagonal-lines-lg">
        <h3 className="mb-2 text-3xl text-center text-white ">Metodologías Ágiles</h3>
        <div className="max-w-xl mx-auto text-2xl text-center text-white">
          En Weiven usamos métodos ágiles como SCRUM o Kanban{" "}
          <b> para que cada proyecto tenga el ritmo y la eficiencia máxima.</b>
        </div>
      </div>
    </div>
  )
}
