import React from "react"
import styles from "./ClickHamburgerMenuComponent.module.scss"

const ClickHamburgerMenuComponent = () => {
  return (
    <div className={styles.hamMenuMainDiv}>
      <ul>
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </div>
  )
}

export default ClickHamburgerMenuComponent
