import React from "react";
import Product_card from "../../components/product_card/Product_card";
import iphones from "../../data/iphones";
import styles from "./Iphone.module.css";

const Iphone = () => {
    return (
        <div className="container">
            <h3>Айфоны</h3>
            {
                iphones.map((item, index) => {
                    return (
                        <Product_card
                            key={index}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            price_usd={item.price_usd}
                        />
                    )
                })
            }
        </div>
    )
}

export default Iphone;