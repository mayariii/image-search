import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import config from '../config';
import './App.css'
import wizard from './assets/wizard.gif'
import SearchForm from './SearchForm';
import ImageList from './ImageList';
import Pagination from './Pagination';

const accessKey = config.access_key;

const App = () => {
    // initialise states
    const [images, setImages] = useState<[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage] = useState(4);
    const [numberDisplay, setNumberDisplay] = useState(false);
    
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
        setNumberDisplay(true);
        
    }

    const onPageChange = (pageNum: number) => setCurrentPage(pageNum);

    // get current posts
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    return (
     <div className="flex-container">
         <header className="header-container">
             <div>
                <h1>iMage the Photo Wizard</h1>
                <p>Enter a search term and I will conjure up some photos!</p>
             </div>
             <img src={wizard} className="header-image" alt="Wizard Animation" />
        </header>

         <main>
            <SearchForm onSubmit={onFormSubmit}/>
            <ImageList images={currentImages}/>
         </main>
         
         <footer>
             <Pagination imagesPerPage={imagesPerPage} totalImages={images.length} paginate={onPageChange} currentPage={currentPage} numberDisplay={numberDisplay}/>
        </footer>
         
    </div>
    );
}


export default App;