// import Link from "next/link"
import styles from "@/styles/Footer.module.css"
import Image from "next/image"
import NextLink from "next/link"

const ExternalLink = ({ href, children }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className="w-full kush-center">
        <NextLink href="/">
          <a className="block mt-1 hover:opacity-80">
            <Image
              src="/static/images/weiven-vertical.png"
              width="150"
              height="70"
              alt="Weiven"
            />
          </a>
        </NextLink>
      </div>
    </footer>
  )
}
