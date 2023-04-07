import React from "react";
import styles from "./Product.module.css";

const Product = ({ Price, ImgUrl, DrinkName }) => {
  return (
    <div className={styles.product}>
      <div className={styles.content}>
        <div className={styles.thumbnail}>
          <span>
            <img src={ImgUrl} alt={DrinkName} />
          </span>
        </div>
        <div className={styles.nameAndPrice}>
          <div>
            <div className={styles.name}>{DrinkName}</div>
            <div className={styles.price}>${Price}</div>
          </div>
        </div>
      </div>
      <span className={styles.bgGradient}>&nbsp;</span>
    </div>
  );
};

export default Product;
