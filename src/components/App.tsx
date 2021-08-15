import React from 'react';
import config from '../config';
import SearchForm from './SearchForm';
import ImageList from './ImageList';

// const accessKey = config.access_key;

const App = () => {
    
    const onFormSubmit = () => {
        console.log("Get images from API")
}


    return (
     <div>
         <SearchForm onSubmit={onFormSubmit}/>
         <ImageList />
    </div>
    );
}


export default App;