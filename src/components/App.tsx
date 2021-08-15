import React from 'react';
import config from '../config';
import SearchForm from './SearchForm';
import ImageList from './ImageList';
import axios from 'axios';
import { useState } from 'react';



const accessKey = config.access_key;

const App = () => {

    const [images, setImages] = useState<[]>([]);
    
    const onFormSubmit = async (term: string) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', 
        {
            params: { query: term },
            headers: {
                Authorization: `Client-ID ${accessKey}`
            }
        }
        )
        setImages(response.data.results);
        console.log(response.data.results)
    }

    return (
     <div>
         <SearchForm onSubmit={onFormSubmit}/>
         <ImageList images={images}/>
    </div>
    );
}


export default App;