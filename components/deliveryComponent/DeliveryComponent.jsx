"use client"
import React, { useState } from "react"
import TopBrandsImageCarousel from "./topBrandsImageCarousel/TopBrandsImageCarousel"
import RestaurantList from "./restaurantList/RestaurantList"
import FoodImageCarousel from "./foodImageCarousel/FoodImageCarousel"

const DeliveryComponent = () => {
  const [category, setCategory] = useState("")

  return (
    <div>
      <FoodImageCarousel category={category} setCategory={setCategory} />
      <TopBrandsImageCarousel />
      <RestaurantList category={category} />
    </div>
  )
}

export default DeliveryComponent
