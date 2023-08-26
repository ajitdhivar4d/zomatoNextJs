"use client"
import React from "react"
import styles from "./Navbar.module.scss"
import Image from "next/image"
import Link from "next/link"
import CustomDropdown from "../customDropdown/CustomDropdown"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hamburgerMenuDiv}>
        <GiHamburgerMenu />
      </div>
      <div className={styles.logoDiv}>
        <Image
          src={"/zomato.png"}
          width={100}
          height={100}
          alt="zomato logo png"
          className={styles.logoImg}
          priority={true}
        />
      </div>
      <div className={styles.LogoSiblingDiv}>
        <div className={styles.navigationDiv}>
          <div className={styles.dropdownLocationsDiv}>
            <Image
              src={"/location.svg"}
              width={100}
              height={100}
              alt="location logo png"
              className={styles.locationImg}
            />
            <input
              placeholder="Jaipur"
              className={styles.expandingInput}
              type="text"
              name="city"
            />
            <CustomDropdown />
          </div>

          <div className={styles.searchIconDiv}>
            <Image
              src={"/search.svg"}
              width={100}
              height={100}
              alt="search logo png"
              className={styles.searchImg}
            />
          </div>
          <input
            className={styles.expandingInput}
            type="text"
            placeholder="Search for restaurant"
            name="search"
          />
        </div>
        <div className={styles.loginLogoutDiv}>
          <ul>
            <li>
              <Link href="/">Login</Link>
            </li>
            <li>
              <Link href="/about">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
