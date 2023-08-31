"use client"

import React, { useEffect, useState } from "react"
import styles from "./RestaurantList.module.scss"
import Image from "next/image"

const RestaurantList = ({ category }) => {
  const [restaurants, setRestaurants] = useState(null)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${apiUrl}/api/deliveryRestaurantApi`)
        const data = await response.json()

        const filteredRestaurants = data.restaurants.filter((restaurant) => {
          return restaurant.categories.includes(category)
        })

        category
          ? setRestaurants(filteredRestaurants)
          : setRestaurants(data.restaurants)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [category])

  if (!restaurants) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.mainDiv}>
      <h1>Delivery Restaurants in Jaipur</h1>
      <div className={styles.restaurantGridDiv}>
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className={styles.restaurantCard}>
            <div className={styles.restaurantCardImgContainer}>
              <Image
                src={restaurant.restroImgUrl}
                alt={restaurant.name}
                className={styles.restaurantCardImage}
                width={300}
                height={200}
                loading="lazy"
              />
            </div>
            <div className={styles.restroNameRatDiv}>
              <h4 className={styles.restroNameH4}>{restaurant.name}</h4>
              <div className={styles.restroRatDiv}>
                <div className={styles.ratGreenDiv}>
                  <div className={styles.ratTextDiv}>{restaurant.rating}</div>
                  <Image
                    src={"/star-icno.svg"}
                    alt={""}
                    className={styles.starIcon}
                    width={150}
                    height={50}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RestaurantList
