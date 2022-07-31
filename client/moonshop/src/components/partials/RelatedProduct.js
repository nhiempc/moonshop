import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const RelatedProduct = () => {
    return(
        <div className='related-product'>
            <Row>
                <Col lg={12}>
                    <h2>Có thể bạn cũng thích</h2>
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={4} sm={12}>
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
                </Col>
                <Col lg={3} md={4} sm={12}>
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
                </Col>
                <Col lg={3} md={4} sm={12}>
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
                </Col>
                <Col lg={3} md={4} sm={12}>
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
                </Col>
            </Row>
        </div>
    )
}

export default React.memo(RelatedProduct);