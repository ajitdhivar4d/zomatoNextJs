import React from "react"
import styles from "./FooterColumn.module.scss"

const FooterColumn = ({ title, items }) => {
  return (
    <div className={styles.column}>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {title === "For Restaurants" && (
        <div className={styles.ConditionColumn}>
          <ul>
            <h2>For Enterprises</h2>
            <li>Zomato For Enterprise</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default FooterColumn
