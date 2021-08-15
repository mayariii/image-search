import './SearchForm.css';
import React from 'react';

const SearchForm = () => {
    return (
        <div>
            <form>
                <div>
                    <h1>Photo Search App</h1>
                    <label>Search for images</label>
                    <input type="text" placeholder="Enter your search query"/>
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;