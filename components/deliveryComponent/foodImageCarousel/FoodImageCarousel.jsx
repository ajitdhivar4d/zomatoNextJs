"use client"
import React from "react"
import styles from "./FoodImageCarousel.module.scss"
import Image from "next/image"
import { foodImgCarouselGridItems } from "../../../constants/index"

const FoodImageCarousel = ({ category, setCategory }) => {
  return (
    <div className={styles.mainDiv}>
      <h2>Inspiration for your first order</h2>
      <div className={styles.gridDiv}>
        {foodImgCarouselGridItems.map((item, index) => (
          <div
            key={index}
            className={styles.gridItemDiv}
            onClick={() => setCategory(item.name)}
          >
            <Image
              src={item.img}
              width={150}
              height={50}
              style={{ width: "auto", height: "auto" }}
              alt={`${item.name} carousel image`}
              className={styles.gridItemImg}
              loading="lazy"
            />
            {item.name && <h1>{item.name}</h1>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodImageCarousel
