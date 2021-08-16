import React, { FC, useState } from 'react';
import './SearchForm.css';

interface SearchProps {
    onSubmit: (arg0: string) => void, 
}

const SearchForm: FC<SearchProps> = ({onSubmit}) => {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        onSubmit(term);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="form-container">
                    <label className="form-item" htmlFor="searchInput">Search for images:</label>
                    <input id="searchInput" className="form-item form-input-text" type="text" value={term} placeholder="Enter your search query" onChange={(e) => setTerm(e.target.value)}/>
                    <button className="form-item form-btn-primary" type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;