import React from "react";
import styles from "./Product_card.module.css"

const Product_card = (props) => {
    return (
        <div className={styles.product_card}>
            <img src={props.img}/>
            <div className={styles.product_card_name}>
                <h5>{props.name}</h5>
                <p>{props.price}</p>
                <p>{props.price_usd}</p>
                <button className={styles.btn}>Выбрать</button>
            </div>
        </div>
    )
}

export default Product_card;
