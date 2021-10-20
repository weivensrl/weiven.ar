import styles from "@/components/Plugs/Agile.module.css"
import Fade from "react-reveal/Fade"
import Image from "next/image"

export default function Agile() {
  return (
    <div className={styles.container}>
      <div className="px-4 py-10  bg-gray-100 bg-opacity-90">
        <Fade delay={200} duration={1200}>
          <h3 className="mb-2 text-3xl text-center text-white "></h3>
          <div className="max-w-xl mx-auto flex gap-10">
            <div className="flex-1">
              <Image
                src="/static/images/dell.png"
                width="288"
                height="80"
                alt="Dell"
              />
            </div>
            <div className="flex-1">
              <Image
                src="/static/images/fortinet.png"
                width="288"
                height="80"
                alt="Fortinet"
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}
