import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Pagination from '../../components/partials/Pagination';
import SideBar from '../../components/partials/SideBar';
import RelatedProduct from '../../components/partials/RelatedProduct';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_HOMEPAGE } from '../../queries/productQuerry';

const HomePage = () => {
    const [category, setCategory] = useState(null);
    const [brand, setBrand] = useState(null);

    console.log('category: ',category)
    console.log('brand: ', brand)
    const {loading, error, data} = useQuery(GET_PRODUCTS_HOMEPAGE,{
        variables: { category, brand }
    });
    // if(data === undefined){
    //     setDataAllProduct({});
    // }else{
    //     setDataAllProduct(data);
    // }
    // console.log(dataAllProduct);
    console.log('data all products',data)
    // const {loading: loadingFilter, error: errorFilter, data: dataFilter} = useQuery(GET_PRODUCTS_HOMEPAGE_FILTER,{
    //     variables: { brandID: brand, categoryID: category }
    // });
    // console.log('data filter',dataFilter)
    console.log('---------------------------------------')
    const getCategorySidebar = (categoryid) => {
        setCategory(categoryid);
    }
    const getBrandSidebar = (brandid) => {
        setBrand(brandid);
    }
    
    if(loading) return <p>Đang tải dữ liệu...</p>

    if(error) return <p>Đã có lỗi xảy ra</p>

    return(
        <Layout>
            <div className='shop-main-area'>
                <h2>Tất cả sản phẩm</h2>
                <div className='container-fluid'>
                    <Row className="all-products">
                        <SideBar
                            category={getCategorySidebar}
                            brand={getBrandSidebar}
                        />
                        <Col lg={9} md={9} sm={12}>
                            <Row>
                                {category !== null && brand === null ? data.products.filter(
                                    product => product.categoryID === category).length ===0 ? <h1>Không tìm thấy</h1> : data.products.filter(product => product.categoryID === category).map(product => (
                                    <Col lg={4} md={6} sm={12} key={product.id} id={product.id}>
                                        <div className='product-wrapper'>
                                            <div className='thumb'>
                                                <Link to={`/details/${product.id}`}>
                                                    <img src={product.image} alt={product.title}/>
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
                                                    <Link to={`/details/${product.id}`}>{product.title}</Link>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">{product.price} đ</span>
                                                </span>
                                            </div>
                                        </div>
                                    </Col>
                                    )) : brand !== null && category === null ? data.products.filter(
                                        product => product.brandID === brand
                                    ).length === 0 ? <h1>Không tìm thấy</h1> : data.products.filter(product => product.brandID === brand).map(product => (
                                    <Col lg={4} md={6} sm={12} key={product.id} id={product.id}>
                                        <div className='product-wrapper'>
                                            <div className='thumb'>
                                                <Link to={`/details/${product.id}`}>
                                                    <img src={product.image} alt={product.title}/>
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
                                                    <Link to={`/details/${product.id}`}>{product.title}</Link>
                                                </h5>
                                                <span className="price">
                                                    <span className="new">{product.price} đ</span>
                                                </span>
                                            </div>
                                        </div>
                                    </Col>
                                    )) : brand !== null && category !== null ? data.products.filter(
                                        product => (product.brandID === brand && product.categoryID === category)
                                    ).length === 0 ? <h1>Không tìm thấy</h1> : data.products.filter(product => product.categoryID === category && product.brandID === brand).map(product => (
                                        <Col lg={4} md={6} sm={12} key={product.id} id={product.id}>
                                            <div className='product-wrapper'>
                                                <div className='thumb'>
                                                    <Link to={`/details/${product.id}`}>
                                                        <img src={product.image} alt={product.title}/>
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
                                                        <Link to={`/details/${product.id}`}>{product.title}</Link>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">{product.price} đ</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </Col>
                                    )): data.products.map(product => (
                                        <Col lg={4} md={6} sm={12} key={product.id} id={product.id}>
                                            <div className='product-wrapper'>
                                                <div className='thumb'>
                                                    <Link to={`/details/${product.id}`}>
                                                        <img src={product.image} alt={product.title}/>
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
                                                        <Link to={`/details/${product.id}`}>{product.title}</Link>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">{product.price} đ</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                            </Row>
                            <Pagination/>
                        </Col>
                    </Row>
                </div>
            </div>
            <RelatedProduct/>
        </Layout>
    )
}

export default React.memo(HomePage);