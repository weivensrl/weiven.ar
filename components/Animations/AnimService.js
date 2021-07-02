import lottie from "lottie-web"
import AnimateDev from "./services-animation.json"
import React, { useEffect } from "react"

const AnimServices = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#anim-services"),
      animationData: AnimateDev,
    })
  }, [])
  return (
    <div>
      <div id="anim-services" style={{ width: 300, height: 300 }} />
    </div>
  )
}

export default AnimServices