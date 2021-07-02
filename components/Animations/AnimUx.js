import lottie from "lottie-web"
import AnimateDev from "./userexp-animation.json"
import React, { useEffect } from "react"

const AnimUx = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#animUx"),
      animationData: AnimateDev,
    })
  }, [])
  return (
    <div>
      <div id="animUx" style={{ width: 150, height: 150 }} />
    </div>
  )
}

export default AnimUx