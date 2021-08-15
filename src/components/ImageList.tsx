import React, { FC } from 'react';
import './ImageList.css'

interface ImageListProps {
    images: any[],
}

const ImageList: FC<ImageListProps> = (props) => {

    const images = props.images.map(({ description, id, urls }) => 
        { 
            return <img key={id} src={urls.regular} alt={description} className="image"/>
        });

    return (
        <div className="image-list-container">{images}</div>
    )
}

export default ImageList;