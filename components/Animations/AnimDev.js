import lottie from "lottie-web"
import AnimateDev from "./developer-animation.json"
import React, { useEffect } from "react"

const AnimDev = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#animDev"),
      animationData: AnimateDev,
    })
  }, [])
  return (
    <div>
      <div id="animDev" style={{ width: 150, height: 150 }} />
    </div>
  )
}

export default AnimDev