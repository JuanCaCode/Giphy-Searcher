import React, {useContext} from 'react';
import styles from '@styles/containers/SearchingSection.module.scss'
import SearchingLupa from '@icons/lupa.svg';
import Image from 'next/image';
import giff from '@images/giphy.gif'
// import Fuse from 'fuse.js';
import AppContext from '@context/AppContext';

const SearchingSection = ()=>{
    const {setWordSearched, searchImg,setImages, images} = useContext(AppContext);
    
    const searchingImage = (value)=>{
            setWordSearched(value); //wordSearced is assigned with the input value
            setTimeout(()=>{
                if(value.length >= 3){
                    searchImg()
                }else{
                    setImages([]);
                    console.log(images)
                };
            },1000)

    }
    return(
        <section className={styles["searching-section"]}>
            <div className={styles["searching-title-container"]}>
                <Image width={100} height={100} src={giff} alt="Logo de lupa para busqueda" />
                <div>
                    <h1>Giphy Searcher Tool</h1>
                    <p>Web Application built with NextJS by Juan Camilo Campo T.</p>
                </div>
            </div>
            <p></p>
            <div className={styles["searching-control-input"]}>
                <figure>
                    <Image width={30} height={30} src={SearchingLupa} alt="Logo de lupa para busqueda" />
                </figure>
                <input 
                    type="text" 
                    placeholder='What are you looking for?' 
                    className={styles["searching-input"]} 
                    onChange={async(e)=>{await searchingImage(e.target.value)}}
                />
            </div>
        </section>
    )   
}
export default SearchingSection;