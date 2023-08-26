import React from "react"
import styles from "./Footer.module.scss"
import Image from "next/image"
import CustomButton from "../common/custombutton/customButton"
import FooterColumn from "./footerColumn/FooterColumn"
import SocialLinks from "./socialLinksColumn/SocialLinks"

const columns = [
  {
    title: "About Zomato",
    items: [
      "Who We Are",
      "Blog",
      "Work With Us",
      "Investor Relations",
      "Report Fraud",
      "Contact Us",
    ],
  },
  {
    title: "Zomaverse",
    items: ["Zomato", "Blinkit", "Feeding India", "Hyperpure", "Zomaland"],
  },
  {
    title: "For Restaurants",
    items: ["Partner With Us", "Apps For You"],
  },

  {
    title: "Learn More",
    items: ["Privacy", "Security", "Terms", "Sitemap"],
  },
]

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerHead}>
        <div className={styles.logoDiv}>
          <Image
            src={"/zomato.png"}
            width={150}
            height={50}
            alt="zomato logo png"
            className={styles.logoImage}
            priority={true}
          />
        </div>
        <div className={styles.CustomButtonDiv}>
          <CustomButton
            name={"India"}
            png={"/india-svg.svg"}
            icon={"/dropdown-arrow-svg.svg"}
          />
          <CustomButton
            name={"English"}
            png={"/global-svg.svg"}
            icon={"/dropdown-arrow-svg.svg"}
          />
        </div>
      </div>
      <div className={styles.gridSection}>
        <div className={styles.footerGridDiv}>
          {columns.map((column, index) => (
            <div className={styles.FooterColumn} key={index}>
              <FooterColumn title={column.title} items={column.items} />
            </div>
          ))}
          <div className={styles.socialLinksComponentDiv}>
            <SocialLinks />
          </div>
        </div>
      </div>
      <hr className="mt-11 mb-2" />
      <h1 className={styles.footerCopyRightText}>
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners. 2008-2023 © Zomato™ Ltd. All
        rights reserved.
      </h1>
    </div>
  )
}

export default Footer
