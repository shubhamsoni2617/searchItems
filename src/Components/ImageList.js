import React from 'react'

const ImageList=(props)=>{

    const Images=props.Images.map(({urls, id, description})=>{

        return <img key={id} alt={description} src={urls.regular} />

    })

    return (
        <div>
            {Images}
        </div>
    )

}

export default ImageList