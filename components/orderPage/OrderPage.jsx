"use client"
import React, { useState } from "react"
import styles from "./OrderPage.module.scss"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineQuestionCircle } from "react-icons/ai"

const directionBookMarkShareItems = [
  {
    icon: "/directionRightIcon.svg",
    name: "Direction",
  },
  {
    icon: "/bookMarkIcon.svg",
    name: "Bookmakr",
  },
  {
    icon: "/shareIcon.svg",
    name: "Share",
  },
]

const featuresItems = [
  {
    name: "Overview",
  },
  {
    name: "Order Online",
  },
  {
    name: "Reviews",
  },
  {
    name: "Photos",
  },
  {
    name: "Menu",
  },
]

const OrderPage = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    setActiveIndex(index)
  }
  return (
    <div className={styles.orderPageMainDiv}>
      {/* ////imgContainer///// */}
      <div className={styles.imgContainer}>
        <div className={styles.bigImgDiv}>
          <Image
            src={
              "https://b.zmtcdn.com/data/pictures/chains/8/100148/df39feb89c843dde2260bd6a7b0dcf2d.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            }
            width={150}
            height={50}
            alt={"img"}
            className={styles.bigImg}
          />
        </div>
        <div className={styles.smallTwoImgDiv}>
          <div className={styles.topsmallImgDiv}>
            <Image
              src={
                "https://b.zmtcdn.com/data/pictures/chains/8/100148/dea1f8e1bc5b7fe258483f4641b20a47.jpg?fit=around|300:273&crop=300:273;*,*"
              }
              width={150}
              height={50}
              alt={"img"}
              className={styles.topsmallImg}
            />
          </div>
          <div className={styles.bottomSmallImgDiv}>
            <Image
              src={
                "https://b.zmtcdn.com/data/pictures/chains/8/100148/a2a2cc63da72ef44a515d4b3f409a174.jpg?fit=around|300:273&crop=300:273;*,*"
              }
              width={150}
              height={50}
              alt={"img"}
              className={styles.bottomSmallImg}
            />
          </div>
        </div>
        <div className={styles.viewGalleryImgDiv}>
          <Image
            src={
              "https://b.zmtcdn.com/data/pictures/chains/8/100148/bfdc584cc727cd8486988a0690fdad67.jpg?fit=around|300:273&crop=300:273;*,*"
            }
            width={150}
            height={50}
            alt={"img"}
            className={styles.viewGalleryImg}
          />
        </div>
      </div>
      {/* ////imgContainer END///// */}
      {/* ////restaurantInfoContainer ///// */}
      <div className={styles.restaurantInfoContainer}>
        {/* ///////////nameRatingDiv/////// */}
        <div className={styles.nameRatingDiv}>
          <h1 className={styles.nameH1}>Kanha</h1>
          <div className={styles.RatingDiv}>
            <div className={styles.diningRatingDiv}>
              {/* /// */}
              <div className={styles.outerGreenDiv}>
                <div className={styles.greenDiv}>
                  <div className={styles.rateNum}>4.3</div>
                  <Image
                    src={"/star-icno.svg"}
                    width={15}
                    height={10}
                    className={styles.starImg}
                    alt="star-icno"
                  />
                </div>
              </div>
              {/* //// */}
              <div className={styles.totalReviewDiv}>
                <div className={styles.totalReview}>872</div>
                <div className={styles.reviewName}>Dining Reviews</div>
              </div>
            </div>
            <div className={styles.deliveryRatingDiv}>
              {/* /// */}
              <div className={styles.outerGreenDiv}>
                <div className={styles.greenDiv}>
                  <div className={styles.rateNum}>4.3</div>
                  <Image
                    src={"/star-icno.svg"}
                    width={15}
                    height={10}
                    className={styles.starImg}
                    alt="star-icno"
                  />
                </div>
              </div>
              {/* //// */}
              <div className={styles.totalReviewDiv}>
                <div className={styles.totalReview}>50k</div>
                <div className={styles.reviewName}>Delivery Reviews</div>
              </div>
            </div>
          </div>
        </div>
        {/* ///////////nameRatingDiv END/////// */}
        <div className={styles.categoryAddressDiv}>
          <div className={styles.categoryDiv}>
            <Link href="/">Mithai, Street</Link>
            <Link href="/">Mithai, Street</Link>
            <Link href="/">Mithai, Street</Link>
            <Link href="/">Mithai, Street</Link>
            <Link href="/">Mithai, Street</Link>
            <Link href="/">Mithai, Street</Link>
          </div>
          <div className={styles.addressDiv}>C Scheme, Jaipur</div>
        </div>
        <div className={styles.restaurantOpenCloseTimeDiv}>
          <span>Open now</span>
          <div className={styles.timeDiv}>
            <span>-</span>7:30am – 10:45pm (Today)
          </div>
          <div className={styles.iconDiv}>
            <AiOutlineQuestionCircle />
          </div>
        </div>
      </div>
      {/* ////restaurantInfoContainer END ///// */}
      {/* ////directionBookMarkShareContainer//// */}
      <div className={styles.directionBookMarkShareContainer}>
        {directionBookMarkShareItems.map((item) => (
          <div key={item.name} className={styles.directionDiv}>
            <Image
              src={item.icon}
              width={150}
              height={50}
              alt={"img"}
              className={styles.directionRightIcon}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      {/* ////directionBookMarkShareContainer END//// */}
      <div className={styles.featureContainer}>
        <div className={styles.featuresDiv}>
          {featuresItems.map((item, index) => (
            <div
              key={item.name}
              className={`${styles.featureItemDiv} ${
                activeIndex === index ? styles.underlinTextColorChangeClass : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </div>
  )
}

export default OrderPage
