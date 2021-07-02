// import Link from "next/link"
import styles from "@/styles/Footer.module.css"
import Image from "next/image"

const ExternalLink = ({ href, children }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <hr className={styles.Divider} />
      <div className="w-full kush-center">
        <Image
          src="/static/images/weiven-vertical.png"
          width="150"
          height="70"
          alt="Weiven"
        />
      </div>
    </footer>
  )
}
