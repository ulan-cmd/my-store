import React from "react";
import Product_card from "../../components/product_card/Product_card";
import ipads from "../../data/ipads";

const Ipad = () => {
    return (
        <div className="container">
            <h3>Айпады</h3>
            {
                ipads.map((item, index) => {
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

export default Ipad;