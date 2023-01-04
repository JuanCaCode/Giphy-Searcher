import { useState, useEffect } from "react";
import Axios from "axios";

const useSearchImage = () => {
    const [images, setImages] = useState([]);
    const [wordSearched, setWordSearched] = useState("");


    const searchImg = async() => {
        const response = await Axios(`https://api.giphy.com/v1/gifs/search?api_key=ouY5kaph8uGFcTkPSfe3yber002mqaWE&q=${wordSearched}&limit=25&offset=0&rating=g&lang=en`);
        setImages(response.data.data)
    }
    

    return {
        wordSearched,
        setWordSearched,
        searchImg,
        images,
        setImages
    }
};

export default useSearchImage;
