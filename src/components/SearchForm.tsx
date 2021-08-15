import './SearchForm.css';
import React, { FC, useState } from 'react';

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
                <div>
                    <h1>Photo Search App</h1>
                    <label>Search for images</label>
                    <input type="text" value={term} placeholder="Enter your search query" onChange={(e) => setTerm(e.target.value)}/>
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;