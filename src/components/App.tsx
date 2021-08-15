import React from 'react';
import SearchForm from './SearchForm';


const App = () => {
    
    const onFormSubmit = () => {
        console.log("Get images from API")
}


    return (
     <div>
         <SearchForm onSubmit={onFormSubmit}/>
    </div>
    );
}


export default App;