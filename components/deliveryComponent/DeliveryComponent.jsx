import React from "react"
import TopBrandsImageCarousel from "./topBrandsImageCarousel/TopBrandsImageCarousel"
import RestaurantList from "./restaurantList/RestaurantList"
import FoodImageCarousel from "./foodImageCarousel/FoodImageCarousel"

const DeliveryComponent = () => {
  return (
    <div>
      <FoodImageCarousel />
      <TopBrandsImageCarousel />
      <RestaurantList />
    </div>
  )
}

export default DeliveryComponent
