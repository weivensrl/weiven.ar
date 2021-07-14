import styles from "@/components/Plugs/Agile.module.css"
import Fade from "react-reveal/Fade"

export default function Agile() {
  return (
    <div className={styles.container}>
      <div className="px-4 py-24 text-blue-700 bg-fixed bg-blue-600 bg-opacity-90 pattern-diagonal-lines-lg">
        <Fade delay={200} bottom duration={1200}>
          <h3 className="mb-2 text-3xl text-center text-white ">Metodologías Ágiles</h3>
        
          <div className="max-w-xl mx-auto text-xl text-center text-white">
            En Weiven usamos métodos ágiles como SCRUM o Kanban{" "}
            <b> para que cada proyecto tenga el ritmo y la eficiencia máxima.</b>
          </div>
        </Fade>
      </div>
    </div>
  )
}
