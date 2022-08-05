import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../mutations/userMutation';
import { useNavigate } from 'react-router-dom';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import { helper } from '../../helpers/common'
import Alert from 'react-bootstrap/Alert';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
    const [validatorMsg, setValidatorMsg] = useState({});

    const [addUser] = useMutation(ADD_USER,{
        variables: { address, email, username, password, firstname, lastname, phone},
        // update(cache, { data: {addUser}}){
        //     const { users } = cache.readQuery({query: GET_USERS});
        //     cache.writeQuery({
        //         query: GET_USERS,
        //         data: { users: [...users, addUser]}
        //     })
        // }
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        }
    });
    
    const validateAll = () => {
        const msg = {};
        if(isEmpty(username)){
            msg.username = 'Tên tài khoản không được để trống'
        }
        if(isEmpty(password)){
            msg.password = 'Mật khẩu không được để trống'
        }
        if(isEmpty(repassword)){
            msg.repassword = 'Mật khẩu không được để trống'
        }else if(password!==repassword){
            msg.repassword = 'Mật khẩu không trùng khớp'
        }
        if(isEmpty(email)){
            msg.email = 'Email không được để trống'
        }
        if(isEmpty(phone)){
            msg.phone = 'Số điện thoại không được để trống'
        }
        setValidatorMsg(msg);
        console.log(validatorMsg);
        if(Object.keys(msg).length > 0){
            return false;
        }
        return true;
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validateAll();
        if(!isValid) return
        addUser();
        navigate('/login')
    }

    return(
        <Layout>
            <div className='register-area'>
                <div className='row'>
                    <div className='col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12 col-12'>
                        <div className='register-form'>
                            <h3>Đăng ký</h3>
                            <Form onSubmit={onSubmit}>
                                <Form.Group className="mb-3" controlId="formGroupUserName">
                                    <Form.Label>Tên người dùng<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                     type="text" 
                                     name="username"
                                     placeholder="Nhập tên tài khoản"
                                     value={username} 
                                     onChange={(e) => setUsername(e.target.value)}
                                    />
                                </Form.Group>
                                <Alert show={validatorMsg.username ? true : false} key='username' variant='danger'>
                                {validatorMsg.username}
                                </Alert>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Mật khẩu<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                     type="password" 
                                     name="password"
                                     placeholder="Nhập mật khẩu" 
                                     value={password}
                                     onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <Alert show={validatorMsg.password ? true : false} key='password' variant='danger'>
                                {validatorMsg.password}
                                </Alert>
                                <Form.Group className="mb-3" controlId="formGroupRePassword">
                                    <Form.Label>Nhập lại mật khẩu<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                     type="password" 
                                     name="repass"
                                     placeholder="Nhập lại mật khẩu" 
                                     value={repassword}
                                     onChange={(e) => setRepassword(e.target.value)}
                                    />
                                </Form.Group>
                                <Alert show={validatorMsg.repassword ? true : false} key='repassword' variant='danger'>
                                {validatorMsg.repassword}
                                </Alert>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                     type="email"
                                     name="email"
                                     placeholder="Nhập email của bạn" 
                                     value={email}
                                     onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Alert show={validatorMsg.email ? true : false} key='email' variant='danger'>
                                {validatorMsg.email}
                                </Alert>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formGroupFirstName">
                                                <Form.Label>Họ và tên đệm<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                type="text" 
                                                name="firstname"
                                                placeholder="Nhập họ và tên đệm của bạn" 
                                                value={firstname}
                                                onChange={(e) => setFirstname(e.target.value)}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formGroupLastName">
                                                <Form.Label>Tên<span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                type="text" 
                                                name="lastname"
                                                placeholder="Nhập tên của bạn" 
                                                value={lastname}
                                                onChange={(e) => setLastname(e.target.value)}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                <Form.Group className="mb-3" controlId="formGroupAddress">
                                    <Form.Label>Địa chỉ</Form.Label>
                                    <Form.Control
                                     type="text" 
                                     name="address"
                                     placeholder="Nhập địa chỉ" 
                                     value={address}
                                     onChange={(e) => setAddress(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPhoneNumber">
                                    <Form.Label>Số điện thoại<span className="text-danger">*</span></Form.Label>
                                    <Form.Control 
                                     type="text" 
                                     name="phone"
                                     placeholder="Nhập số điện thoại"
                                     value={phone}
                                     onChange={(e) => setPhone(e.target.value)}
                                    />
                                </Form.Group>
                                <Alert show={validatorMsg.phone ? true : false} key='phone' variant='danger'>
                                {validatorMsg.phone}
                                </Alert>
                                <div className='register-submit'>
                                    <button type='submit' className='login-btn'>Đăng ký</button>
                                </div>
                                <div className='have-an-account'>
                                    <Link to="/login">Đã có tài khoản? Đăng nhập ngay</Link>
                                </div>
                            </Form>
                            {Object.keys(errors).length > 0 && (
                                <div className='error-message-ui'>
                                    <ul className='list'>
                                        {Object.values(errors).map(value => (
                                            <li key={value}>{value}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default React.memo(RegisterPage);