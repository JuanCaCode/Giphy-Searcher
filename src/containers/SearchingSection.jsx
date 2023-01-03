import React from 'react';
import styles from '@styles/containers/SearchingSection.module.scss'
import SearchingLupa from '@icons/lupa.svg';
import Image from 'next/image';


const SearchingSection = ()=>{
    return(
        <section className={styles["searching-section"]}>
            <h1>Giphy Searcher Tool</h1>
            <div className={styles["searching-control-input"]}>
                <figure>
                    <Image width={30} height={30} src={SearchingLupa} alt="Logo de lupa para busqueda" />
                </figure>
                <input type="text" placeholder='Busca tu imagen' className={styles["searching-input"]} />
            </div>
        </section>
    )   
}
export default SearchingSection;