import React from "react";
import Product from "./Product/Product";
import DrinksHeader from "./Product/DrinksHeader";
import styles from "./Content.module.css";
import { arrCoffee, arrDrink } from "./Variables";
const Content = () => {
  return (
    <div>
      <div id="coffeeSec">
        <h1 className={styles.coffeeTitle}>Coffee</h1>
        <div className={styles.content}>
          <div className={styles.items}>
            {arrCoffee.map((coffee) => {
              return (
                <Product
                  Price={coffee.Price}
                  ImgUrl={coffee.imgUrl}
                  DrinkName={coffee.name}
                />
              );
            })}
          </div>
        </div>
      </div>
      <DrinksHeader />
      <div id="drinksSec">
        <div className={styles.content}>
          <div className={styles.items}>
            {arrDrink.map((coffee) => {
              return (
                <Product
                  Price={coffee.Price}
                  ImgUrl={coffee.imgUrl}
                  DrinkName={coffee.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
