
export const getGif = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=0TOjKF67RUjeMQMgKZe9FFHKm1JtVQ6e`
    const resp = await fetch(url)
    const {data} = await resp.json()

    console.log(data)

    const gifs = data.map((img)=>{
        return {
            id: img.id,
            title: img?.title,
            url: img.images?.fixed_width_small_still.url
        }
    })

    return gifs
}