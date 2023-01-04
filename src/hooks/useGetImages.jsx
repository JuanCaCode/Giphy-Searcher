import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import AppContext from "@context/AppContext";

const useGetImages = (API) => {
  const {images,setImages} = useContext(AppContext);

  useEffect(() => {
    (async () => {
      const res = await Axios(API);
      setImages(res.data.data);
    })();
  },[API]);

  return images;
};

export default useGetImages;
