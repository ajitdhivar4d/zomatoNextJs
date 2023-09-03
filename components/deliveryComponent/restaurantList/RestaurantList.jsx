"use client"
import React, { useState } from "react"
import styles from "./RestaurantList.module.scss"
import Image from "next/image"
import { useSelector } from "react-redux"
import Link from "next/link"

const RestaurantList = () => {
  const restaurants = useSelector((state) => state.deliRestaurant)
  const category = useSelector((state) => state.category)

  const filteredRestaurants = category
    ? restaurants.filter((restaurant) =>
        restaurant.categories.includes(category),
      )
    : restaurants
  if (!filteredRestaurants || filteredRestaurants.length === 0) {
    return <div>Loading...</div>
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const handleRestaurantClick = (restaurant) => {
    // Save OrderPageInfo to localStorage
    localStorage.setItem("orderPageInfo", JSON.stringify(restaurant))
  }

  function truncateAddress(address) {
    const parts = address.split(",")
    return parts.length > 0 ? parts[0] : address
  }

  return (
    <div className={styles.mainDiv}>
      <h1>Delivery Restaurants in Jaipur</h1>
      <div className={styles.restaurantGridDiv}>
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant._id} className={styles.restaurantCard}>
            <Link href={`${apiUrl}/order`}>
              <div className={styles.restaurantCardImgContainer}>
                <Image
                  src={restaurant.restroImgUrl}
                  alt={restaurant.name}
                  className={styles.restaurantCardImage}
                  width={300}
                  height={200}
                  loading="lazy"
                  onClick={() => handleRestaurantClick(restaurant)}
                />
              </div>
            </Link>
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
            <div className={styles.addressPriceDiv}>
              <p className={styles.addressP}>
                {truncateAddress(restaurant.location)}...
              </p>
              <div className={styles.priceDiv}>₹{restaurant.basePrice}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RestaurantList
