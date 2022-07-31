import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className='footer'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-3 col-md-12 col-sm-12 col-12'>
                        <Link to="/">
                            <img className='logo' src='https://i.ibb.co/F8fP09t/kisspng-logo-shopping-shopping-logo-design-5a6db653522347-4448754915171395393364.png' alt='logo'/>
                        </Link>
                        <p><strong>MOONSHOP</strong> là một trang nhằm cung cấp các sản phẩm có chất lượng ra thị trường. Chúng tôi đang tập trung vào các sản phẩm công nghệ.</p>
                        <div className='connect-me'>
                            <ul>
                                <li>
                                    <Link to="/"><i className="fa fa-facebook-f"></i></Link>
                                </li>
                                <li>
                                    <Link to="/"><i className="fa fa-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="/"><i className="fa fa-linkedin"></i></Link>
                                </li>
                                <li>
                                    <Link to="/"><i className="fa fa-instagram"></i></Link>
                                </li>
                                <li>
                                    <Link to="/"><i className="fa fa-google"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='infomation col-lg-3 col-md-12 col-sm-12 col-12'>
                        <h3>THÔNG TIN</h3>
                        <ul>
                            <li>
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="/">Về chúng tôi</Link>
                            </li>
                            <li>
                                <Link to="/">Chính sách bảo mật</Link>
                            </li>
                            <li>
                                <Link to="/">Câu hỏi thường gặp</Link>
                            </li>
                            <li>
                                <Link to="/">Theo dõi đơn hàng</Link>
                            </li>
                            <li>
                                <Link to="/">So sánh</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='infomation col-lg-3 col-md-12 col-sm-12 col-12'>
                        <h3>THÔNG TIN</h3>
                        <ul>
                            <li>
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="/">Về chúng tôi</Link>
                            </li>
                            <li>
                                <Link to="/">Chính sách bảo mật</Link>
                            </li>
                            <li>
                                <Link to="/">Câu hỏi thường gặp</Link>
                            </li>
                            <li>
                                <Link to="/">Theo dõi đơn hàng</Link>
                            </li>
                            <li>
                                <Link to="/">So sánh</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='news-to-mail col-lg-3 col-md-12 col-sm-12 col-12'>
                        <h3>Đăng ký nhận tin miễn phí</h3>
                        <form>
                            <input className="form-control" type="email" placeholder="Mail của bạn" name="EMAIL" required=""></input>
                            <button className="btn" type="submit" name="subscribe"> Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Footer);