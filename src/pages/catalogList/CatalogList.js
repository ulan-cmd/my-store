import React from "react";
import styles from "./CatalogList.module.css";
import CatalogCard from "../../components/catalog_card/CatalogCard";

const iphone_img_url = 'https://istore.kg/media/category/iphone-14-pro-finish-unselect-gallery-1-202209_GEO_US.webp';
const ipad_img_url = 'https://istore.kg/media/category/ipad-pro-model-select-gallery-2-202212.webp';
const watch_img_url = 'https://istore.kg/media/category/watch-card-50-compare-202209_GEO_US.webp';

const CatalogList = () => {
    return (
        <div className={styles.catalog_container}>
            <CatalogCard
                img_url={iphone_img_url}
                name="Iphone"
                link="iphone"
            />
            <CatalogCard
                img_url={ipad_img_url}
                name="Ipad"
                link="iPad"
            />
            <CatalogCard
                img_url={watch_img_url}
                name="apple-watch"
                link="apple-watch"
            />
        </div>
    )
}

export default CatalogList;