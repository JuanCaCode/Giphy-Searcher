import React, { useState, useContext, useEffect } from "react";
import useGetImages from "@hooks/useGetImages";
import Spinning from "@components/Spinning";
import styles from "@styles/containers/ImagesGrid.module.scss";
import { LazyLoadImage, LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AppContext from "@context/AppContext";


const API = "https://api.giphy.com/v1/gifs/trending?api_key=ouY5kaph8uGFcTkPSfe3yber002mqaWE&limit=25&rating=g";
const ImagesGrid = () => {
    const imagesGotten = useGetImages(API);
    const { images } = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (images.length == 0) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [images]);
    return (
        <>
            <div className={styles["spinnin-container"]}>
                {loading && <Spinning />}
                {loading && <h2>Loading</h2>}
            </div>
            <section className={styles["section-image-grid"]}>
                {imagesGotten.images.map((image) => {
                    return (
                        <figure className={styles["figure-image-grid"]} key={image.id}>
                            <LazyLoadComponent placeholder={<Spinning />}>
                                <LazyLoadImage 
                                    key={image.id} 
                                    src={image.images.preview_webp.url} 
                                    alt="imagenes" 
                                    effect="blur" 
                                    width={500} 
                                    placeholderSrc={image.images.preview_webp.url} 
                                />
                            </LazyLoadComponent>
                        </figure>
                    );
                })}
            </section>
        </>
    );
};

export default ImagesGrid;
