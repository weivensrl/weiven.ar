// import Link from "next/link"
import styles from "@/styles/Footer.module.css"

const ExternalLink = ({ href, children }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <hr className={styles.Divider} />
    </footer>
  )
}
