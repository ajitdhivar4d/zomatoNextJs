import React from "react"
import styles from "./RestaurantList.module.scss"
import Image from "next/image"
import { useSelector } from "react-redux"

const RestaurantList = () => {
  const restaurants = useSelector((state) => state.diningRestaurant)
  if (!restaurants || restaurants.length === 0) {
    return <div>Loading...</div> // Handle the loading state or an empty state
  }

  return (
    <div className={styles.mainDiv}>
      <h1>Nightlife Restaurants in Jaipur</h1>
      <div className={styles.restaurantGridDiv}>
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className={styles.restaurantCard}>
            <div className={styles.restaurantCardImgContainer}>
              <Image
                src={restaurant.image_url}
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
            <div className={styles.addressPriceDiv}>
              <p className={styles.addressP}>{restaurant.address}</p>
              <div className={styles.priceDiv}>{restaurant.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RestaurantList
