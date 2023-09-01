import React from "react"
import styles from "./RestaurantList.module.scss"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"
import { setOrderPageInfo } from "@/redux/features/orderPageInfoSlice"

const RestaurantList = () => {
  const dispatch = useDispatch()
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

  const handleOrderPageInfo = (restaurant) => {
    dispatch(setOrderPageInfo(restaurant))
  }
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  return (
    <div className={styles.mainDiv}>
      <h1>Delivery Restaurants in Jaipur</h1>
      <div className={styles.restaurantGridDiv}>
        {filteredRestaurants.map((restaurant) => (
          <Link href={`${apiUrl}/order`} key={restaurant._id}>
            <div
              className={styles.restaurantCard}
              onClick={() => handleOrderPageInfo(restaurant)}
            >
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
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RestaurantList
