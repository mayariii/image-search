import React from 'react';
import config from '../config';
import SearchForm from './SearchForm';
import ImageList from './ImageList';
import axios from 'axios';

const accessKey = config.access_key;

const App = () => {
    
    const onFormSubmit = async (term: string) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', 
        {
            params: { query: term },
            headers: {
                Authorization: `Client-ID ${accessKey}`
            }
        }
        )

        console.log(response);
}


    return (
     <div>
         <SearchForm onSubmit={onFormSubmit}/>
         <ImageList />
    </div>
    );
}


export default App;