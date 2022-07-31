import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Pagination from '../../components/partials/Pagination';

const HomePage = () => {
    return(
        <Layout>
            <div className='shop-main-area'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='shop-sidebar-wrapper col-lg-3 col-md-3 col-sm-12'>
                            <div className='shop-search'>
                                <form>
                                    <input type="text" class="form-control" placeholder="Tìm kiếm..."/>
                                    <button>
                                        <img src='https://andshop-react.netlify.app/static/media/search.4672f25b.svg' alt='icon search'/>
                                    </button>
                                </form>
                            </div>
                            <div className='shop-sidebar-boxed'>
                                <h4>Dòng Laptop</h4>
                                <form>
                                <label class="checkcontainer">One
                                    <input type="radio" name="radio"/>
                                    <span class="radiobtn"></span>
                                </label>
                                <label class="checkcontainer">Two
                                    <input type="radio" name="radio"/>
                                    <span class="radiobtn"></span>
                                </label>
                                <label class="checkcontainer">Three
                                    <input type="radio" name="radio"/>
                                    <span class="radiobtn"></span>
                                </label>
                                <label class="checkcontainer">Four
                                    <input type="radio" name="radio"/>
                                    <span class="radiobtn"></span>
                                </label>
                                <label class="checkcontainer">Five
                                    <input type="radio" name="radio"/>
                                    <span class="radiobtn"></span>
                                </label>
                                </form>
                            </div>
                            <div className='shop-sidebar-boxed'>
                                <h4>Thương Hiệu</h4>
                                <form>
                                <label class="checkcontainer">One
                                    <input type="radio" name="radio"/>
                                    <span class="radiobtn"></span>
                                </label>
                                <label class="checkcontainer">Two
                                    <input type="radio" name="radio"/>
                                    <span class="radiobtn"></span>
                                </label>
                                <label class="checkcontainer">Three
                                    <input type="radio" name="radio"/>
                                    <span class="radiobtn"></span>
                                </label>
                                <label class="checkcontainer">Four
                                    <input type="radio" name="radio"/>
                                    <span class="radiobtn"></span>
                                </label>
                                <label class="checkcontainer">Five
                                    <input type="radio" name="radio"/>
                                    <span class="radiobtn"></span>
                                </label>
                                </form>
                            </div>
                        </div>
                        <div className='col-lg-9 col-md-9 col-sm-12'>
                            <div className='row'>
                                <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
                                    <div className='product-wrapper'>
                                        <div className='thumb'>
                                            <Link to="/">
                                                <img src='https://andshop-react.netlify.app/static/media/product6.f19b14e6.png' alt='product'/>
                                            </Link>
                                            <div className='actions'>
                                                <Link to="/" className='action wishlist'><i class="fa fa-heart"></i></Link>
                                                <Link to="/" className='action quickview'><i class="fa fa-camera"></i></Link>
                                                <Link to="/" className='action compare'><i class="fa fa-arrow-right"></i></Link>
                                            </div>
                                            <button type="button" class="add-to-cart offcanvas-toggle">Add to cart</button>
                                        </div>
                                        <div className='content'>
                                            <h5 class="title">
                                                <Link to="/">Laptop 1</Link>
                                            </h5>
                                            <span class="price">
                                                <span class="new">$14.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
                                    <div className='product-wrapper'>
                                        <div className='thumb'>
                                            <Link to="/">
                                                <img src='https://andshop-react.netlify.app/static/media/product6.f19b14e6.png' alt='product'/>
                                            </Link>
                                            <div className='actions'>
                                                <Link to="/" className='action wishlist'><i class="fa fa-heart"></i></Link>
                                                <Link to="/" className='action quickview'><i class="fa fa-camera"></i></Link>
                                                <Link to="/" className='action compare'><i class="fa fa-arrow-right"></i></Link>
                                            </div>
                                            <button type="button" class="add-to-cart offcanvas-toggle">Add to cart</button>
                                        </div>
                                        <div className='content'>
                                            <h5 class="title">
                                                <Link to="/">Laptop 1</Link>
                                            </h5>
                                            <span class="price">
                                                <span class="new">$14.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
                                    <div className='product-wrapper'>
                                        <div className='thumb'>
                                            <Link to="/">
                                                <img src='https://andshop-react.netlify.app/static/media/product6.f19b14e6.png' alt='product'/>
                                            </Link>
                                            <div className='actions'>
                                                <Link to="/" className='action wishlist'><i class="fa fa-heart"></i></Link>
                                                <Link to="/" className='action quickview'><i class="fa fa-camera"></i></Link>
                                                <Link to="/" className='action compare'><i class="fa fa-arrow-right"></i></Link>
                                            </div>
                                            <button type="button" class="add-to-cart offcanvas-toggle">Add to cart</button>
                                        </div>
                                        <div className='content'>
                                            <h5 class="title">
                                                <Link to="/">Laptop 1</Link>
                                            </h5>
                                            <span class="price">
                                                <span class="new">$14.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
                                    <div className='product-wrapper'>
                                        <div className='thumb'>
                                            <Link to="/">
                                                <img src='https://andshop-react.netlify.app/static/media/product6.f19b14e6.png' alt='product'/>
                                            </Link>
                                            <div className='actions'>
                                                <Link to="/" className='action wishlist'><i class="fa fa-heart"></i></Link>
                                                <Link to="/" className='action quickview'><i class="fa fa-camera"></i></Link>
                                                <Link to="/" className='action compare'><i class="fa fa-arrow-right"></i></Link>
                                            </div>
                                            <button type="button" class="add-to-cart offcanvas-toggle">Add to cart</button>
                                        </div>
                                        <div className='content'>
                                            <h5 class="title">
                                                <Link to="/">Laptop 1</Link>
                                            </h5>
                                            <span class="price">
                                                <span class="new">$14.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
                                    <div className='product-wrapper'>
                                        <div className='thumb'>
                                            <Link to="/">
                                                <img src='https://andshop-react.netlify.app/static/media/product6.f19b14e6.png' alt='product'/>
                                            </Link>
                                            <div className='actions'>
                                                <Link to="/" className='action wishlist'><i class="fa fa-heart"></i></Link>
                                                <Link to="/" className='action quickview'><i class="fa fa-camera"></i></Link>
                                                <Link to="/" className='action compare'><i class="fa fa-arrow-right"></i></Link>
                                            </div>
                                            <button type="button" class="add-to-cart offcanvas-toggle">Add to cart</button>
                                        </div>
                                        <div className='content'>
                                            <h5 class="title">
                                                <Link to="/">Laptop 1</Link>
                                            </h5>
                                            <span class="price">
                                                <span class="new">$14.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
                                    <div className='product-wrapper'>
                                        <div className='thumb'>
                                            <Link to="/">
                                                <img src='https://andshop-react.netlify.app/static/media/product6.f19b14e6.png' alt='product'/>
                                            </Link>
                                            <div className='actions'>
                                                <Link to="/" className='action wishlist'><i class="fa fa-heart"></i></Link>
                                                <Link to="/" className='action quickview'><i class="fa fa-camera"></i></Link>
                                                <Link to="/" className='action compare'><i class="fa fa-arrow-right"></i></Link>
                                            </div>
                                            <button type="button" class="add-to-cart offcanvas-toggle">Add to cart</button>
                                        </div>
                                        <div className='content'>
                                            <h5 class="title">
                                                <Link to="/">Laptop 1</Link>
                                            </h5>
                                            <span class="price">
                                                <span class="new">$14.00</span>
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
        </Layout>
    )
}

export default React.memo(HomePage);