import React,{useState} from 'react'
import AddCategory from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifApp = () =>{

    const [categories, setCategories] = useState(['one punch'])
    console.log(categories)
    return (
        <>
            <h1>GifApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr/>
            <div>
                {
                    categories.map((cat)=> (
                        <GifGrid
                            key={cat}
                            category={cat}
                        />
                    ))
                }
            </div>
        </>
    )
}