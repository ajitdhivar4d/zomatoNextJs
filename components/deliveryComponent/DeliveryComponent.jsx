import React from "react"
import TopBrandsImageCarousel from "./topBrandsImageCarousel/TopBrandsImageCarousel"
import RestaurantList from "./restaurantList/RestaurantList"
import FoodImageCarousel from "./foodImageCarousel/FoodImageCarousel"

const DeliveryComponent = ({ restaurants }) => {
  return (
    <div>
      <FoodImageCarousel />
      <TopBrandsImageCarousel />
      <RestaurantList restaurants={restaurants} />
    </div>
  )
}

export default DeliveryComponent
