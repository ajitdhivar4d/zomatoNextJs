import React from "react"
import styles from "./FoodImageCarousel.module.scss"
import Image from "next/image"

const gridItems = [
  {
    img: "/food-selection-pizza-carousel.webp",
    name: "Pizza",
  },
  {
    img: "/food-selection-dosa-carousel.webp",
    name: "Dosa",
  },
  {
    img: "/food-selection-kachori-carousel.webp",
    name: "kachori",
  },
  {
    img: "/food-selection-idli-carousel.webp",
    name: "Idli",
  },
  {
    img: "/food-selection-sandwich-carousel.webp",
    name: "Sandwich",
  },
  {
    img: "/food-selection-cake-carousel.webp",
    name: "Cake",
  },
]

const FoodImageCarousel = () => {
  return (
    <div className={styles.mainDiv}>
      <h2>Inspiration for your first order</h2>
      <div className={styles.gridDiv}>
        {gridItems.map((item, index) => (
          <div key={index} className={styles.gridItemDiv}>
            <Image
              src={item.img}
              width={150}
              height={50}
              alt={`${item.name} carousel image`}
              className={styles.gridItemImg}
              priority="true"
            />
            {item.name && <h1>{item.name}</h1>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodImageCarousel
