import React from "react";
import {useParams} from "react-router-dom";
import styles from "./Products.module.css";
import ipads from "../../data/ipads";
import iphones from "../../data/iphones";
import watches from "../../data/watches";
import Product_card from "../../components/product_card/Product_card";

const ProductsPage = () => {
    const params = useParams();
    let products = [];

    if (params.product === 'iphone'){
        products = iphones;
    } else if(params.product === 'iPad'){
        products = ipads;
    } else if (params.product === 'apple-watch'){
        products = watches;
    }

    console.log(products);

    return (
      <div className="container">
          <h1>{params.product}</h1>
          <div className={styles.products_conatiner}>
              {
                  products.map((item, index) => {
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
      </div>
    )
}

export default ProductsPage;