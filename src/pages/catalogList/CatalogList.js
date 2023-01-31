import React, {useEffect, useState} from "react";
import styles from "./CatalogList.module.css";
import CatalogCard from "../../components/catalog_card/CatalogCard";

const CatalogList = () => {
    const [catalog, setCatalog] = useState([]);

    const getCatalog = () => {
        const url = "http://localhost:3001/catalog";

        fetch(url)
            .then(response => response.json())
            .then(data => setCatalog(data))
    }

    useEffect(getCatalog, []);

    return (
        <div className={styles.catalog_container}>
            {
                catalog.map(item => {
                    return (
                        <CatalogCard
                            key={item.id}
                            img_url={item.img_url}
                            name={item.name}
                            link={item.name}
                        />
                    )
                })
            }
        </div>
    )
}

export default CatalogList;