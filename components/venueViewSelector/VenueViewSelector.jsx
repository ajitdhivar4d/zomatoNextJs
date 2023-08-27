"use client"
import React, { useState } from "react"
import styles from "./VenueViewSelector.module.scss"
import Image from "next/image"

const VenueViewSelector = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const options = [
    {
      darkImage: "/delivery-dark.png",
      colorImage: "/delivery-color.png",
      text: "Delivery",
    },
    {
      darkImage: "/dinner-svg-dark.svg",
      colorImage: "/dinner-svg-color.svg",
      text: "Dining Out",
    },
    {
      darkImage: "/nightlife-dark.png",
      colorImage: "/nightlife-color.png",
      text: "Nightlife",
    },
  ]

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className={styles.MainDiv}>
      {options.map((option, index) => (
        <div
          key={index}
          className={` ${styles.optionDiv} ${
            activeIndex === index ? styles.underline : ""
          }`}
          onClick={() => handleClick(index)}
        >
          <div className={styles.imgDiv}>
            <Image
              src={activeIndex === index ? option.colorImage : option.darkImage}
              width={150}
              height={50}
              alt=""
              priority
              className={styles.img}
            />
          </div>
          <h2 className={styles.textH2}>{option.text}</h2>
        </div>
      ))}
    </div>
  )
}

export default VenueViewSelector
