import React, { FC } from 'react';
import './Pagination.css';

interface PaginationProps {
    imagesPerPage: number,
    totalImages: number,
    paginate: (arg0: number) => void,
    currentPage: number,
    numberDisplay: boolean
}

const Pagination: FC<PaginationProps> = ({ imagesPerPage, totalImages, paginate, currentPage, numberDisplay }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <nav>
            <div className="numbers-container">
            {pageNumbers.map(num => (
                <li key={num}>
                    <a onClick={() => paginate(num)} href="#!">
                        {num}
                    </a>
                </li>
            ))}
            </div>
            <p style={numberDisplay ? {display: 'block'} : {display: 'none'}}>Current page: {currentPage}</p>
        </nav>
    )
}

export default Pagination;