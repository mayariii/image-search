import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import config from '../config';
import SearchForm from './SearchForm';
import ImageList from './ImageList';
import Pagination from './Pagination';

const accessKey = config.access_key;

const App = () => {

    const [images, setImages] = useState<[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage, setImagesPerPage] = useState(2);
    
    const onFormSubmit = async (term: string) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', 
        {
            params: { query: term, per_page: 30 },
            headers: {
                Authorization: `Client-ID ${accessKey}`,
            }
        }
        )
        setImages(response.data.results);
        console.log(response.data.results)
    }

    const onPageChange = (pageNum: number) => setCurrentPage(pageNum);

    // get current posts
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    return (
     <div>
         <SearchForm onSubmit={onFormSubmit}/>
         <ImageList images={currentImages}/>
         <Pagination imagesPerPage={imagesPerPage} totalImages={images.length} paginate={onPageChange}/>
    </div>
    );
}


export default App;