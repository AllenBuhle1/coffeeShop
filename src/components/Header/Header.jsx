import React from 'react'
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div>
          <h1>Get Me Something <br /> To Drink</h1>
          <span>
              <a href='#coffeeSec'>
                Coffee 
              </a>
              <a href='#drinksSec'>
                Drinks
              </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header