import React from "react"
import styles from "./customButton.module.scss"
import Image from "next/image"

const CustomButton = ({ name, png, icon }) => {
  return (
    <button className={styles.buttonContainer}>
      <div className={styles.customButton}>
        <Image
          className={styles.countryImg}
          src={png}
          width={100}
          height={100}
          alt="Country image"
          loading="lazy"
        />
        <div className={styles.textContainer}>{name}</div>
        <Image
          className={styles.globalImg}
          src={icon}
          width={100}
          height={100}
          alt="icon"
          loading="lazy"
        />
      </div>
    </button>
  )
}

export default CustomButton
