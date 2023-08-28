"use client"

import React, { useEffect, useState } from "react"
import styles from "./RestaurantList.module.scss"
import Image from "next/image"

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState(null)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  useEffect(() => {
    fetch(`${apiUrl}/api/restaurants`)
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data.restaurants) // Update to access data.restaurants
      })
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  if (!restaurants) {
    return <div>Loading...</div>
  }

  const getShortenedAddress = (fullAddress) => {
    const addressParts = fullAddress.split(",")
    // Display the first two parts of the address
    return addressParts.slice(0, 2).join(",")
  }

  return (
    <div className={styles.mainDiv}>
      <h1>Trending dining restaurants in Jaipur</h1>
      <div className={styles.restaurantGridDiv}>
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className={styles.restaurantCard}>
            <div className={styles.restaurantCardImgContainer}>
              <Image
                src={restaurant.image_url}
                alt={restaurant.name}
                className={styles.restaurantCardImage}
                width={150}
                height={50}
                priority="true"
              />
            </div>
            <div className={styles.restroNameRatDiv}>
              <h4 className={styles.restroNameH4}>{restaurant.name}</h4>
              <div className={styles.restroRatDiv}>
                <div className={styles.ratGreenDiv}>
                  <div className={styles.ratTextDiv}>{restaurant.rating}</div>
                  <Image
                    src={"/star-icno.png"}
                    alt={""}
                    className={styles.starIcon}
                    width={150}
                    height={50}
                    priority="true"
                  />
                </div>
              </div>
            </div>
            {/* <div className={styles.addressPriceDiv}>
              <p className={styles.addressP}>
                {getShortenedAddress(restaurant.address)}
              </p>
              <div className={styles.priceDiv}>{restaurant.price}</div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RestaurantList
