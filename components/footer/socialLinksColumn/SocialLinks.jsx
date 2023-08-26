import Image from "next/image"
import Link from "next/link"
import React from "react"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa"
import styles from "./SocialLinks.module.scss"

const SocialLinks = () => {
  return (
    <div className={styles.socialLinksMainDiv}>
      <h1 className={styles.socialLinksHeading}>SOCIAL LINKS</h1>
      <ul className={styles.socialLinksUl}>
        <li>
          <Link href="#">
            <FaFacebook />
          </Link>
        </li>
        <li>
          <Link href="#">
            <FaTwitter />
          </Link>
        </li>
        <li>
          <Link href="#">
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link href="#">
            <FaLinkedin />
          </Link>
        </li>
        <li>
          <Link href="#">
            <FaYoutube />
          </Link>
        </li>
      </ul>
      <Image
        src={"/app-store-play-store-badge-png.png"}
        width={100}
        height={100}
        alt="app store"
        className={styles.appPlayStoreImg}
        priority={true}
      />
    </div>
  )
}

export default SocialLinks
