import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Pagination from '../../components/partials/Pagination';
import SideBar from '../../components/partials/SideBar';
import RelatedProduct from '../../components/partials/RelatedProduct';

const HomePage = () => {
    return(
        <Layout>
            <div className='shop-main-area'>
                <h2>Tất cả sản phẩm</h2>
                <div className='container-fluid'>
                    <div className='row'>
                        <SideBar/>
                        <div className='col-lg-9 col-md-9 col-sm-12'>
                            <div className='row'>
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='product-wrapper'>
                                        <div className='thumb'>
                                            <Link to="/details">
                                                <img src='https://andshop-react.netlify.app/static/media/product1.7190443a.png' alt='product'/>
                                            </Link>
                                            <div className='actions'>
                                                <Link to="/" className='action wishlist'><i className="fa fa-heart"></i></Link>
                                                <Link to="/" className='action quickview'><i className="fa fa-camera"></i></Link>
                                                <Link to="/" className='action compare'><i className="fa fa-arrow-right"></i></Link>
                                            </div>
                                            <button type="button" className="add-to-cart">Thêm vào giỏ hàng</button>
                                        </div>
                                        <div className='content'>
                                            <h5 className="title">
                                                <Link to="/details">Laptop 1</Link>
                                            </h5>
                                            <span className="price">
                                                <span className="new">$14.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='product-wrapper'>
                                        <div className='thumb'>
                                            <Link to="/details">
                                                <img src='https://andshop-react.netlify.app/static/media/product2.57e4309e.png' alt='product'/>
                                            </Link>
                                            <div className='actions'>
                                                <Link to="/" className='action wishlist'><i className="fa fa-heart"></i></Link>
                                                <Link to="/" className='action quickview'><i className="fa fa-camera"></i></Link>
                                                <Link to="/" className='action compare'><i className="fa fa-arrow-right"></i></Link>
                                            </div>
                                            <button type="button" className="add-to-cart offcanvas-toggle">Thêm vào giỏ hàng</button>
                                        </div>
                                        <div className='content'>
                                            <h5 className="title">
                                                <Link to="/details">Laptop 1</Link>
                                            </h5>
                                            <span className="price">
                                                <span className="new">$14.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='product-wrapper'>
                                        <div className='thumb'>
                                            <Link to="/details">
                                                <img src='https://andshop-react.netlify.app/static/media/product3.1d2f5e96.png' alt='product'/>
                                            </Link>
                                            <div className='actions'>
                                                <Link to="/" className='action wishlist'><i className="fa fa-heart"></i></Link>
                                                <Link to="/" className='action quickview'><i className="fa fa-camera"></i></Link>
                                                <Link to="/" className='action compare'><i className="fa fa-arrow-right"></i></Link>
                                            </div>
                                            <button type="button" className="add-to-cart offcanvas-toggle">Thêm vào giỏ hàng</button>
                                        </div>
                                        <div className='content'>
                                            <h5 className="title">
                                                <Link to="/details">Laptop 1</Link>
                                            </h5>
                                            <span className="price">
                                                <span className="new">$14.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='product-wrapper'>
                                        <div className='thumb'>
                                            <Link to="/details">
                                                <img src='https://andshop-react.netlify.app/static/media/product4.0d1ab934.png' alt='product'/>
                                            </Link>
                                            <div className='actions'>
                                                <Link to="/" className='action wishlist'><i className="fa fa-heart"></i></Link>
                                                <Link to="/" className='action quickview'><i className="fa fa-camera"></i></Link>
                                                <Link to="/" className='action compare'><i className="fa fa-arrow-right"></i></Link>
                                            </div>
                                            <button type="button" className="add-to-cart offcanvas-toggle">Thêm vào giỏ hàng</button>
                                        </div>
                                        <div className='content'>
                                            <h5 className="title">
                                                <Link to="/details">Laptop 1</Link>
                                            </h5>
                                            <span className="price">
                                                <span className="new">$14.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='product-wrapper'>
                                        <div className='thumb'>
                                            <Link to="/details">
                                                <img src='https://andshop-react.netlify.app/static/media/product5.65927e42.png' alt='product'/>
                                            </Link>
                                            <div className='actions'>
                                                <Link to="/" className='action wishlist'><i className="fa fa-heart"></i></Link>
                                                <Link to="/" className='action quickview'><i className="fa fa-camera"></i></Link>
                                                <Link to="/" className='action compare'><i className="fa fa-arrow-right"></i></Link>
                                            </div>
                                            <button type="button" className="add-to-cart offcanvas-toggle">Thêm vào giỏ hàng</button>
                                        </div>
                                        <div className='content'>
                                            <h5 className="title">
                                                <Link to="/details">Laptop 1</Link>
                                            </h5>
                                            <span className="price">
                                                <span className="new">$14.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='product-wrapper'>
                                        <div className='thumb'>
                                            <Link to="/details">
                                                <img src='https://andshop-react.netlify.app/static/media/product6.f19b14e6.png' alt='product'/>
                                            </Link>
                                            <div className='actions'>
                                                <Link to="/" className='action wishlist'><i className="fa fa-heart"></i></Link>
                                                <Link to="/" className='action quickview'><i className="fa fa-camera"></i></Link>
                                                <Link to="/" className='action compare'><i className="fa fa-arrow-right"></i></Link>
                                            </div>
                                            <button type="button" className="add-to-cart offcanvas-toggle">Thêm vào giỏ hàng</button>
                                        </div>
                                        <div className='content'>
                                            <h5 className="title">
                                                <Link to="/details">Laptop 1</Link>
                                            </h5>
                                            <span className="price">
                                                <span className="new">$14.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Pagination/>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProduct/>
        </Layout>
    )
}

export default React.memo(HomePage);