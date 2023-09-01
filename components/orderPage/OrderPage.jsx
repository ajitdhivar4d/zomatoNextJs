"use client"
import React, { useState } from "react"
import styles from "./OrderPage.module.scss"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { OrderPageDirectionBookMarkShareItems } from "../../constants/index"
import { useSelector } from "react-redux"

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
  const oderPageInfo = useSelector((state) => state.oderPageInfo)
  console.log("oderPageInfo", oderPageInfo)
  console.log("Categories:", oderPageInfo.categories)

  const handleItemClick = (index) => {
    setActiveIndex(index)
  }
  return (
    <div className={styles.orderPageMainDiv}>
      {/* ////imgContainer///// */}
      <div className={styles.imgContainer}>
        <div className={styles.bigImgDiv}>
          <Image
            src={oderPageInfo.restroImgUrl}
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
          <h1 className={styles.nameH1}>{oderPageInfo.name}</h1>
          <div className={styles.RatingDiv}>
            <div className={styles.diningRatingDiv}>
              {/* /// */}
              <div className={styles.outerGreenDiv}>
                <div className={styles.greenDiv}>
                  <div className={styles.rateNum}>
                    {oderPageInfo.diningRating}
                  </div>
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
                <div className={styles.totalReview}>
                  {oderPageInfo.numDiningReviews}
                </div>
                <div className={styles.reviewName}>Dining Reviews</div>
              </div>
            </div>
            <div className={styles.deliveryRatingDiv}>
              {/* /// */}
              <div className={styles.outerGreenDiv}>
                <div className={styles.greenDiv}>
                  <div className={styles.rateNum}>
                    {oderPageInfo.deliveryRating}
                  </div>
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
                <div className={styles.totalReview}>
                  {oderPageInfo.numDeliveryReviews}
                </div>
                <div className={styles.reviewName}>Delivery Reviews</div>
              </div>
            </div>
          </div>
        </div>
        {/* ///////////nameRatingDiv END/////// */}
        <div className={styles.categoryAddressDiv}>
          <div className={styles.categoryDiv}>
            {oderPageInfo?.categories?.map((category) => (
              <Link href="/" key={category} className={styles.categoryLink}>
                {category}
              </Link>
            ))}
          </div>
          <div className={styles.addressDiv}>{oderPageInfo.location}</div>
        </div>
        <div className={styles.restaurantOpenCloseTimeDiv}>
          <span>Open now</span>
          <div className={styles.timeDiv}>
            <span>-</span>
            {oderPageInfo.openingHours}
          </div>
          <div className={styles.iconDiv}>
            <AiOutlineQuestionCircle />
          </div>
        </div>
      </div>
      {/* ////restaurantInfoContainer END ///// */}
      {/* ////directionBookMarkShareContainer//// */}
      <div className={styles.directionBookMarkShareContainer}>
        {OrderPageDirectionBookMarkShareItems.map((item) => (
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
