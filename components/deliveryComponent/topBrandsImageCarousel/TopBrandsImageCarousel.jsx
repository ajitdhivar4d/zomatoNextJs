import React from "react"
import styles from "./TopBrandsImageCarousel.module.scss"
import Image from "next/image"
import { TopbrandCarouselGridItems } from "../../../constants/index"

const TopBrandsImageCarousel = () => {
  return (
    <div className={styles.mainDiv}>
      <h2>Top brands for you</h2>
      <div className={styles.gridDiv}>
        {TopbrandCarouselGridItems.map((item, index) => (
          <div key={index} className={styles.gridItemDiv}>
            <div className={styles.ItemImgDiv}>
              <Image
                src={item.img}
                width={150}
                height={50}
                style={{ width: "auto", height: "auto" }}
                alt={`${item.name} carousel image`}
                className={styles.ItemImg}
                loading="lazy"
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
