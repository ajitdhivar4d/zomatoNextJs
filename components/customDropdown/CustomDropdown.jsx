import React, { useState } from "react"
import Image from "next/image"
import styles from "./CustomDropdown.module.scss"

const restaurantDataForDropdown = [
  {
    name: "1135 AD, Jaipur",
    location: "Amer Fort, Jaipur, Rajasthan",
  },
  {
    name: "Suvarna Mahal",
    location: "Taj Rambagh Palace, Jaipur, Rajasthan",
  },
  {
    name: "Cinnamon",
    location: "Taj Jai Mahal Palace, Civil Lines, Jaipur, Rajasthan",
  },
  {
    name: "Laxmi Mishthan Bhandar",
    location: "Johari Bazaar, Jaipur, Rajasthan",
  },
  {
    name: "Rawat Mishthan Bhandar",
    location: "Sindhi Camp, Jaipur, Rajasthan",
  },
  {
    name: "Spice Court",
    location: "Achrol House, Civil Lines, Jaipur, Rajasthan",
  },
  {
    name: "Chokhi Dhani",
    location: " Tonk Road, Jaipur, Rajasthan",
  },
  {
    name: "Shri Thaal Village",
    location: "Rathore Nagar, Queens Road, Vaishali Nagar, Jaipur, Rajasthan",
  },
  {
    name: "Surya Mahal",
    location: "MI Road and Tonk Road",
  },
]

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.customDropdown}>
      <button onClick={toggleDropdown}>
        <Image
          src={"/nav-arrow-drop-down.svg"}
          width={100}
          height={100}
          alt="location logo png"
          className={styles.arrowDropImg}
        />
      </button>
      {isOpen && (
        <ul className={styles.customDropdownMenu}>
          {restaurantDataForDropdown.map((restaurant) => (
            <li key={restaurant.name}>
              <a>
                <h1 className="font-medium">{restaurant.name}</h1>
                <p className="font-normal">{restaurant.location}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CustomDropdown
