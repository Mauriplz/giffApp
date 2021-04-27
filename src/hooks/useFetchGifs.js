import { useEffect, useState } from "react"
import { getGif } from "../funciones/getGif"

export const useFetchGifs = (category) =>{

    const [images, setImages] = useState({
        data:[],
        loading:true
    })

    useEffect(() => {
        getGif(category)
        .then((imgs)=> {
            setImages({
                data : imgs,
                loading : false
            })
        })
    }, [category])

    return images
}