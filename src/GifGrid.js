import React from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from './hooks/useFetchGifs'

export const GifGrid = ({category}) => {
    
    const {data, loading} = useFetchGifs(category)

    return (
        <div>
            <h1>{category}</h1>
            {
            (loading)
            ?
            'loading...'
            :
                data.map((imgs)=>(
                    <GifGridItem
                        key={imgs.id}
                        {...imgs}
                    />
                ))
            }
        </div>
    )
}
