import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi"
import { FiPhone, FiInfo } from "react-icons/fi"
import Image from "next/image"
import makeCarousel from "react-reveal/makeCarousel"
import Fade from "react-reveal/Fade"
import Link from "next/link"

export default function HeroHomeCarousel(props) {
  const CarouselUI = ({ position, total, handleClick, children }) => (
    <div className="relative w-full h-full mb-0 overflow-hidden">
      {props.arrows ? (
        <div>
          <div
            className="absolute left-0 z-50 items-center justify-center hidden w-12 h-12 text-5xl text-center text-white cursor-pointer hover:opacity-90 md:flex top-1/2"
            onClick={handleClick}
            data-position={position - 1}
          >
            <AiOutlineArrowLeft />
          </div>
          <div
            className="absolute right-0 z-50 items-center justify-center hidden w-12 h-12 text-5xl text-center text-white cursor-pointer hover:opacity-90 md:flex top-1/2"
            right="true"
            onClick={handleClick}
            data-position={position + 1}
          >
            <AiOutlineArrowRight />
          </div>
          <div className="absolute left-0 right-0 z-50 flex items-center justify-center bg-red-500 bg-opacity-50 top-8">
            {Array(...Array(total)).map((val, index) => (
              <div
                className="mx-1 text-4xl cursor-pointer"
                key={index}
                onClick={handleClick}
                data-position={index}
              >
                {index === position ? <BiRadioCircleMarked /> : <BiRadioCircle />}
              </div>
            ))}
          </div>
          <div>{children}</div>
        </div>
      ) : (
        <div>
          <div>{children}</div>
        </div>
      )}
    </div>
  )
  const Carousel = makeCarousel(CarouselUI)
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden text-center text-white bg-gray-900">
      <div className="absolute inset-0 z-0">
        <Carousel defaultWait={4000} maxTurns={99} /*wait for 1000 milliseconds*/>
          <Fade>
            <div>
              <Image
                src="/static/images/contacto.jpg"
                layout="fill"
                objectFit="cover"
                alt="Diseño de servicios"
              />
            </div>
          </Fade>
          <Fade>
            <div>
              <Image
                src="/static/images/data-center.jpg"
                layout="fill"
                objectFit="cover"
                alt="Diseño de servicios"
              />
            </div>
          </Fade>
          <Fade>
            <div>
              <Image
                src="/static/images/socios.jpg"
                layout="fill"
                objectFit="cover"
                alt="Diseño de servicios"
              />
            </div>
          </Fade>
        </Carousel>
      </div>
    </div>
  )
}
