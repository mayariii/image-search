import React, { FC } from 'react';

interface ImageListProps {
    images: any[],
}

const ImageList: FC<ImageListProps> = (props) => {

    const images = props.images.map(({ description, id, urls }) => 
        { 
            return <img key={id} src={urls.regular} alt={description}/>
        });

    return (
        <div>{images}</div>
    )
}

export default ImageList;