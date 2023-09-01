"use client"
import React, { useEffect, useState } from "react"
import styles from "./VenueViewSelector.module.scss"
import Image from "next/image"
import DeliveryComponent from "../deliveryComponent/DeliveryComponent"
import DiningComponent from "../diningComponent/DiningComponent"
import NightLifeComponent from "../nightLifeComponent/NightLifeComponent"
import { useDispatch } from "react-redux"
import { setDeliRestaurants } from "@/redux/features/deliRestaurantSlice"
import { setDiningRestaurants } from "@/redux/features/diningRestaurantSlice"

const VenueViewSelector = ({ deliRestaurantData, diningRestaurantData }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDeliRestaurants(deliRestaurantData))
    dispatch(setDiningRestaurants(diningRestaurantData))
  }, [])

  const options = [
    {
      darkImage: "/delivery-dark.png",
      colorImage: "/delivery-color.png",
      text: "Delivery",
    },
    {
      darkImage: "/dinner-svg-dark.svg",
      colorImage: "/dinner-svg-color.svg",
      text: "Dining Out",
    },
    {
      darkImage: "/nightlife-dark.png",
      colorImage: "/nightlife-color.png",
      text: "Nightlife",
    },
  ]

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  let activeComponent = null

  switch (activeIndex) {
    case 0:
      activeComponent = <DeliveryComponent />
      break
    case 1:
      activeComponent = <DiningComponent />
      break
    case 2:
      activeComponent = <NightLifeComponent />
      break
    default:
      activeComponent = <DeliveryComponent />
      break
  }

  return (
    <>
      <div className={styles.MainDiv}>
        {options.map((option, index) => (
          <div
            key={index}
            className={` ${styles.optionDiv} ${
              activeIndex === index ? styles.underline : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <div className={styles.imgDiv}>
              <Image
                src={
                  activeIndex === index ? option.colorImage : option.darkImage
                }
                width={150}
                height={50}
                alt=""
                priority
                className={styles.img}
              />
            </div>
            <h2 className={styles.textH2}>{option.text}</h2>
          </div>
        ))}
      </div>
      {/* <DeliveryComponent /> */}
      {/* <DiningComponent /> */}
      {/* <NightLifeComponent /> */}
      {activeComponent}
    </>
  )
}

export default VenueViewSelector
