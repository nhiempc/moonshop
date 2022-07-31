import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RegisterPage = () => {
    return(
        <Layout>
            <div className='register-area'>
                <div className='row'>
                    <div className='col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12 col-12'>
                        <div className='register-form'>
                            <h3>Đăng ký</h3>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupUserName">
                                    <Form.Label>Tên người dùng<span class="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Nhập tên tài khoản" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Mật khẩu<span class="text-danger">*</span></Form.Label>
                                    <Form.Control type="password" placeholder="Nhập mật khẩu" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupRePassword">
                                    <Form.Label>Nhập lại mật khẩu<span class="text-danger">*</span></Form.Label>
                                    <Form.Control type="password" placeholder="Nhập lại mật khẩu" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email<span class="text-danger">*</span></Form.Label>
                                    <Form.Control type="email" placeholder="Nhập email của bạn" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupFullName">
                                    <Row>
                                        <Col>
                                            <Form.Label>Họ và tên đệm<span class="text-danger">*</span></Form.Label>
                                            <Form.Control type="text" placeholder="Nhập họ và tên đệm của bạn" />
                                        </Col>
                                        <Col>
                                            <Form.Label>Tên<span class="text-danger">*</span></Form.Label>
                                            <Form.Control type="text" placeholder="Nhập tên của bạn" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupAddress">
                                    <Form.Label>Địa chỉ</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập địa chỉ" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPhoneNumber">
                                    <Form.Label>Số điện thoại<span class="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Nhập số điện thoại" />
                                </Form.Group>
                                <div className='register-submit'>
                                    <button type='button' className='login-btn'>Đăng ký</button>
                                </div>
                                <div className='have-an-account'>
                                    <Link to="/login">Đã có tài khoản? Đăng nhập ngay</Link>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default React.memo(RegisterPage);