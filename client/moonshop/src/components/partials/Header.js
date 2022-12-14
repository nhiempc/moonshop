import React from 'react';
import { Link } from "react-router-dom";
import BreadCrumb from './BreadCrumb';

const Header = () => {
    return(
        <>
        <div className='container-fluid'>
            <div className='row top_header'>
                <ul className='right_list_fix'>
                    <li>
                        <Link to="/login"><i className="fa fa-user"></i>Đăng nhập</Link>
                    </li>
                    <li>
                        <Link to="/register"><i className="fa fa-lock"></i>Đăng ký</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className = 'header-section d-none d-xl-block'>
            <div className='container-fluid'>
                <div className='row align-items-center justify-content-around'>
                    <div className='header-logo'>
                        <Link to="/">
                            <img src='https://i.ibb.co/F8fP09t/kisspng-logo-shopping-shopping-logo-design-5a6db653522347-4448754915171395393364.png' alt='logo'/>
                        </Link>
                    </div>
                    <div className='main-menu d-none d-xl-block'>
                        <ul>
                            <li>
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="/">Sản phẩm</Link>
                            </li>
                            <li>
                                <Link to="/">Liên hệ</Link>
                            </li>
                            <li>
                                <Link to="/">Về chúng tôi</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='row header-action'>
                        <ul>
                            <li>
                                <Link to="/wishlist">
                                    <i className="fa fa-heart"></i>
                                    <span className="item-count">4</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart">
                                    <i className="fa fa-shopping-bag"></i>
                                    <span className="item-count">3</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <BreadCrumb/>
        </>
    )
}
export default React.memo(Header);