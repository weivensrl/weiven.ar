import React from "react"
import styles from "@/components/Heros/Hero.module.css"
import AboutWave from "@/components/Plugs/AboutWave"
import Image from "next/image"
import Fade from "react-reveal/Fade"

const copyToClipboard = (str) => {
  const el = document.createElement("textarea")
  el.value = str
  el.setAttribute("readonly", "")
  el.style.position = "absolute"
  el.style.left = "-9999px"
  document.body.appendChild(el)
  el.select()
  document.execCommand("copy")
  document.body.removeChild(el)
}

export default function HeroContact() {
  const [isCopied, setIsCopied] = React.useState(false)
  return (
    <div className={styles.container} id="contact">
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl min-h-screen px-6 pt-40 mx-auto text-left pb-96 md:px-0">
        <Fade delay={600} cascade duration={1200}>
          <h1 className="w-full mx-auto mb-3 text-4xl font-bold tracking-wider text-center text-gray-100 md:text-6xl ">
            Contacto
          </h1>
        </Fade>
        <div className="pt-6 text-center ">
          <Fade bottom delay={600} duration={1200}>
            <div className="py-6 text-2xl kush-center">Piedras 575</div>
          </Fade>
          <Fade bottom delay={600} duration={1200}>
            <button
              onClick={() => {
                copyToClipboard("info@weiven.ar")
                setIsCopied(true)
                setTimeout(() => setIsCopied(false), 3000)
              }}
              className={
                "relative w-64 mt-1 mx-2 rounded-md pb-1 font-bold font-sans text-white  transform duration-700 " +
                (isCopied
                  ? "bg-gray-800 " + isCopied
                  : "bg-opacity-10")
              }
            >
              <div className="relative overflow-hidden">
                <Fade bottom duration={700} delay={200}>
                  <span className="block p-2 mb-1 font-sans text-2xl font-light tracking-wider text-gray-100 duration-700 bg-blue-300 rounded-md cursor-pointer select-all hover:bg-opacity-25 bg-opacity-10">
                    info@weiven.ar
                  </span>
                </Fade>
              </div>
              <span className="mb-2 text-xs">
                {isCopied ? "Mail copiado" : "Click para copiar mail"}
              </span>
            </button>
          </Fade>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-gray-800 bg-opacity-50 ">
        <div className="opacity-10 ">
          <Image
            src="/static/images/servicios.jpg"
            layout="fill"
            objectFit="cover"
            alt="Diseño de servicios"
          />
        </div>
      </div>
      <AboutWave />
    </div>
  )
}
