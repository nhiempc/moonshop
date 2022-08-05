import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Form from 'react-bootstrap/Form';

const LoginPage = () => {
    
    return(
        <Layout>
            <div className='login-area'>
                <div className='row'>
                    <div className='col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12 col-12'>
                        <div className='login-form'>
                            <h3>Đăng nhập</h3>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupUserName">
                                    <Form.Label>Tên người dùng<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Nhập tên tài khoản" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Mật khẩu<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="password" placeholder="Nhập mật khẩu" />
                                </Form.Group>
                                <div className='login-submit'>
                                    <button type='button' className='login-btn'>Đăng nhập</button>
                                </div>
                                <div className='no-account'>
                                    <Link to="/register">Không có tài khoản? Tạo tài khoản ngay</Link>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default React.memo(LoginPage);