import React from 'react';
import Layout from '../../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import RelatedProduct from '../../components/partials/RelatedProduct';

const DetailPage = () => {
    return(
        <Layout>
            <div className='product-single-one'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <img className='product-single-one-img' src='https://andshop-react.netlify.app/static/media/product1.7190443a.png' alt='product img'/>
                        </div>
                        <div className='col-lg-8 col-md-8 col-sm-12'>
                            <div className='product-details'>
                                <div className='product-name'>
                                    <h3>Green Dress For Woman</h3>
                                </div>
                                <div className='trademark'>
                                    <h5>Thương hiệu: ACER</h5>
                                </div>
                                <div className='review-rating'>
                                    <div className='star-rating'>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <span className='count-rating'>(30 đánh giá)</span>
                                    </div>
                                </div>
                                <h4 className='product-single-one-price'>38.000.000 vnđ<del>40.000.000 vnđ</del></h4>
                                <p className='product-single-one-description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                                <div className='add-to-wishlist'>
                                    <Link to="/wishlist">
                                        <i className="fa fa-heart"></i>Add To Wishlist
                                    </Link>
                                </div>
                                <form>
                                    <div className='add-qty'>
                                        <div className='input-group-button'>
                                            <button type='button' className='button'>
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input className="form-control" type="number" readonly="" value="1"></input>
                                        <div className='input-group-button'>
                                            <button type='button' className='button'>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <Link to="/cart">
                                    <button className="add-cart-btn">Thêm vào giỏ hàng</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <Tabs
                            defaultActiveKey="description"
                            id="uncontrolled-tab-example"
                            className="mb-3 product-detail-tabs col-lg-12"
                        >
                            <Tab eventKey="description" title="Mô tả">
                                <div className='tab-description'>
                                    <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <ul><li>Vivamus magna justo, lacinia eget consectetur sed</li><li>Curabitur aliquet quam id dui posuere blandit</li><li>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar </li></ul>
                                    <p>Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                                </div>
                            </Tab>
                            <Tab eventKey="more-info" title="Thông số kĩ thuật">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        </tr>
                                        <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        </tr>
                                        <tr>
                                        <td>3</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="review" title="Đánh giá">
                                <div className='product-review'>
                                    <ul>
                                        <li className='review-item'>
                                            <div className='user-img'>
                                                <img src="https://andshop-react.netlify.app/static/media/user1.be89a16c.png" alt=''/>
                                            </div>
                                            <div className='review-content'>
                                                <div className='name-user'>
                                                    <h4>Sara Anela</h4>
                                                </div>
                                                <div className='user-rating-star'>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                                <div className='rate-content'>
                                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='review-item'>
                                            <div className='user-img'>
                                                <img src="https://andshop-react.netlify.app/static/media/user2.9f6bd368.png" alt=''/>
                                            </div>
                                            <div className='review-content'>
                                                <div className='name-user'>
                                                    <h4>Sara Anela</h4>
                                                </div>
                                                <div className='user-rating-star'>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                                <div className='rate-content'>
                                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='review-item'>
                                            <div className='user-img'>
                                                <img src="https://andshop-react.netlify.app/static/media/user3.3cafa534.png" alt=''/>
                                            </div>
                                            <div className='review-content'>
                                                <div className='name-user'>
                                                    <h4>Sara Anela</h4>
                                                </div>
                                                <div className='user-rating-star'>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                    <span><i className="fa fa-star"></i></span>
                                                </div>
                                                <div className='rate-content'>
                                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                    <RelatedProduct/>
                </div>
            </div>
        </Layout>
    )
}

export default React.memo(DetailPage);