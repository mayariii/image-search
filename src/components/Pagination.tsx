import React, { FC } from 'react';

interface PaginationProps {
    imagesPerPage: number,
    totalImages: number,
    paginate: (arg0: number) => void
}

const Pagination: FC<PaginationProps> = ({ imagesPerPage, totalImages, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <nav>
            {pageNumbers.map(num => (
                <li key={num}>
                    <a onClick={() => paginate(num)} href="!#">
                        {num}
                    </a>
                </li>
            ))}
        </nav>
    )
}

export default Pagination;