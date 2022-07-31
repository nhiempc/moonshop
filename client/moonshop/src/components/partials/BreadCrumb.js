import React from 'react';
import { Link } from "react-router-dom";

const BreadCrumb = () => {
    return(
        <div className='breadcrumb-wrapper'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='breadcrumb-text'>
                        <h2>Shop</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Library</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(BreadCrumb);