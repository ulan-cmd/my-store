import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styles from "./Products.module.css";
import Product_card from "../../components/product_card/Product_card";

const ProductsPage = () => {
    const params = useParams();
    const [products, setProducts] = useState([]);

    const getProduct = () => {
        let url;

        if (params.product === 'iphone'){
            url = 'http://localhost:3001/iphones';
        } else if(params.product === 'ipad'){
            url = 'http://localhost:3001/ipads';
        } else if (params.product === 'apple-watch'){
            url = 'http://localhost:3001/watchs';
        }

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
    }

    useEffect(getProduct, []);

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
                          />
                      )
                  })
              }
          </div>
      </div>
    )
}

export default ProductsPage;