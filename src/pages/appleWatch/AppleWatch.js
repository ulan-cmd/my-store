import React from "react";
import Product_card from "../../components/product_card/Product_card";
import watches from "../../data/watches";

const AppleWatch = () => {
    return (
        <div className="container">
            <h3>Apple Watch</h3>
            {
                watches.map((item, index) => {
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

export default AppleWatch;