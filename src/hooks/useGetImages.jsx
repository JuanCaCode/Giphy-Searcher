import { useState,useEffect } from "react";
import Axios from 'axios';
const useGetImages = (API) =>{
    const [images, setImages] = useState([]);

    useEffect(()=>{
        (async()=>{
            const res = await Axios(API);
            setImages(res.data.data);
        })();
    },[API])
    
    return images;
}

export default useGetImages;