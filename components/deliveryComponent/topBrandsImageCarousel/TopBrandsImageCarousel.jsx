import React from "react"
import styles from "./TopBrandsImageCarousel.module.scss"
import Image from "next/image"

const gridItems = [
  {
    img: "/top-brand-kanha-sweet.webp",
    name: "kanha sweet",
  },
  {
    img: "/top-brand-Rominus-Pizza.webp",
    name: "Rominus Pizza",
  },
  {
    img: "/top-brand-Agarwal-Caterers.webp",
    name: "Agarwal Caterers",
  },
  {
    img: "/top-brand-Burger-King.webp",
    name: "Burger King",
  },
  {
    img: "/top-brand-McDonald's.webp",
    name: "McDonald's",
  },
  {
    img: "/top-brand-Roll-Express.webp",
    name: "Roll Express",
  },
]

const TopBrandsImageCarousel = () => {
  return (
    <div className={styles.mainDiv}>
      <h2>Top brands for you</h2>
      <div className={styles.gridDiv}>
        {gridItems.map((item, index) => (
          <div key={index} className={styles.gridItemDiv}>
            <div className={styles.ItemImgDiv}>
              <Image
                src={item.img}
                width={150}
                height={50}
                alt={`${item.name} carousel image`}
                className={styles.ItemImg}
                priority="true"
              />
            </div>

            {item.name && <h1>{item.name}</h1>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBrandsImageCarousel
