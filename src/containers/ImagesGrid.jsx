import React from "react";
import useGetImages from '@hooks/useGetImages';
import Image from "next/image";
import styles from '@styles/containers/ImagesGrid.module.scss';

const API = "https://api.giphy.com/v1/gifs/trending?api_key=ouY5kaph8uGFcTkPSfe3yber002mqaWE&limit=25&rating=g";
const ImagesGrid = ()=>{
    const images = useGetImages(API)
    return (
        <section className={styles["section-image-grid"]}>
            {images.map((image)=>{
                return(
                    <figure className={styles['figure-image-grid']} key={image.id}> 
                        <Image 
                            width={500}
                            height={500}
                            key={image.id}
                            src={image.images.original.url} 
                            alt="imagenes" 
                        />
                    </figure>

                )
            })}
        </section>
    )
}

export default ImagesGrid;