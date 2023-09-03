"use client"
import React from "react"
import styles from "./TopBrandsImageCarousel.module.scss"
import Image from "next/image"
import { useSelector } from "react-redux"
import Link from "next/link"

const TopBrandsImageCarousel = () => {
  const restaurants = useSelector((state) => state.topBrandRestaurant)
  // console.log("restaurants", restaurants)

  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const handleRestaurantClick = (restaurant) => {
    // Save OrderPageInfo to localStorage
    localStorage.setItem("orderPageInfo", JSON.stringify(restaurant))
  }

  return (
    <div className={styles.mainDiv}>
      <h2>Top brands for you</h2>
      <div className={styles.gridDiv}>
        {restaurants.map((restaurant, index) => (
          <div key={index} className={styles.gridItemDiv}>
            <Link
              href={`${apiUrl}/order`}
              onClick={() => handleRestaurantClick(restaurant)}
            >
              <div className={styles.ItemImgDiv}>
                <Image
                  src={restaurant.restroImgUrl}
                  width={150}
                  height={50}
                  style={{ width: "auto", height: "auto" }}
                  alt=""
                  className={styles.ItemImg}
                  loading="lazy"
                />
              </div>
            </Link>
            <h1>{restaurant.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBrandsImageCarousel
