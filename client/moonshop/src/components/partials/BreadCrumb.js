import React from 'react';
import { Link } from "react-router-dom";

const BreadCrumb = () => {
    return(
        <div className='breadcrumb-wrapper'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='breadcrumb-text'>
                        <h2>ShopMoon</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Sản phẩm</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(BreadCrumb);