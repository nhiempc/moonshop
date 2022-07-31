import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const WishListPage = () => {
    return(
        <Layout>
            <div className='wishlist-area'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div className='table-wraper'>
                            <div className='table-page table-responsive'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='product_thumb'>Ảnh sản phẩm</th>
                                            <th className='product_name'>Tên sản phẩm</th>
                                            <th className='product_price'>Giá</th>
                                            <th className='product_quantity'>Trạng thái</th>
                                            <th className='product_total'>Thêm vào giỏ hàng</th>
                                            <th className='product_remove'>Xoá</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='product_thumb'>
                                                <Link to="/details">
                                                    <img src="https://andshop-react.netlify.app/static/media/product5.65927e42.png" alt="img"/>
                                                </Link>
                                            </td>
                                            <td className='product_name'>
                                                <Link to="/details">Fit-Flare Dress</Link>
                                            </td>
                                            <td className='product_price'>32.000.000 vnđ</td>
                                            <td className='product_quantity'>
                                                <h6>Trong kho</h6>
                                            </td>
                                            <td className='product_total'>
                                                <Link to="/cart">
                                                    <button class="add-cart-btn">Thêm vào giỏ hàng</button>
                                                </Link>
                                            </td>
                                            <td className='product_remove'><i className="fa fa-trash text-danger" style={{cursor: 'pointer'}}></i></td>
                                        </tr>
                                        <tr>
                                            <td className='product_thumb'>
                                                <Link to="/details">
                                                    <img src="https://andshop-react.netlify.app/static/media/product6.f19b14e6.png" alt="img"/>
                                                </Link>
                                            </td>
                                            <td className='product_name'>
                                                <Link to="/details">Midi Dress</Link>
                                            </td>
                                            <td className='product_price'>25.000.000 vnđ</td>
                                            <td className='product_quantity'>
                                                <h6>Trong kho</h6>
                                            </td>
                                            <td className='product_total'>
                                                <Link to="/cart">
                                                    <button class="add-cart-btn">Thêm vào giỏ hàng</button>
                                                </Link>
                                            </td>
                                            <td className='product_remove'><i className="fa fa-trash text-danger" style={{cursor: 'pointer'}}></i></td>
                                        </tr>
                                        <tr>
                                            <td className='product_thumb'>
                                                <Link to="/details">
                                                    <img src="https://andshop-react.netlify.app/static/media/product7.6533a8ae.png" alt="img"/>
                                                </Link>
                                            </td>
                                            <td className='product_name'>
                                                <Link to="/details">Tulip Dress</Link>
                                            </td>
                                            <td className='product_price'>27.000.000 vnđ</td>
                                            <td className='product_quantity'>
                                                <h6>Trong kho</h6>
                                            </td>
                                            <td className='product_total'>
                                                <Link to="/cart">
                                                    <button class="add-cart-btn">Thêm vào giỏ hàng</button>
                                                </Link>
                                            </td>
                                            <td className='product_remove'><i className="fa fa-trash text-danger" style={{cursor: 'pointer'}}></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default React.memo(WishListPage);