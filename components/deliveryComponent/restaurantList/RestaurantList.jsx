import React from "react"
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
  console.log(filteredRestaurants[0].basePrice)
  return (
    <div className={styles.mainDiv}>
      <h1>Delivery Restaurants in Jaipur</h1>
      <div className={styles.restaurantGridDiv}>
        {filteredRestaurants.map((restaurant) => (
          <Link href={`${apiUrl}/order`} key={restaurant._id}>
            <div
              className={styles.restaurantCard}
              onClick={() => handleRestaurantClick(restaurant)}
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
              <div className={styles.addressPriceDiv}>
                <p className={styles.addressP}>{restaurant.location}</p>
                <div className={styles.priceDiv}>₹{restaurant.basePrice}</div>
                {console.log(restaurant.basePrice)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RestaurantList
