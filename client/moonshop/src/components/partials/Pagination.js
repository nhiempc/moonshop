import React from 'react';
import { Link } from "react-router-dom";

const Pagination = () => {
    return(
        <div className='col-lg-12'>
            <ul className='pagination'>
                <li className='page-item'>
                    <Link to="/" className='page-link' aria-label='Previous'>
                        <span aria-hidden="true">«</span>
                    </Link>
                </li>
                <li class="page-item active">
                    <Link to="/" className='page-link'>1</Link>
                </li>
                <li class="page-item null">
                    <Link to="/" className='page-link'>2</Link>
                </li>
                <li class="page-item null">
                    <Link to="/" className='page-link'>3</Link>
                </li>
                <li class="page-item">
                    <Link to="/" className='page-link' aria-label='Next'>
                        <span aria-hidden="true">»</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default React.memo(Pagination);