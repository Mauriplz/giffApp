import React from 'react'

export const GifGridItem = ({title, url}) => {
    console.log(title,url)
    return (
        <div>
            <p>{title}</p>
            <img
                src={url}
                alt={title}
            />
        </div>
    )
}
