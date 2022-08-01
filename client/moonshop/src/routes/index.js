import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from '@loadable/component';

const HomePage = loadable(() => import('../pages/home/index'));
const DetailPage = loadable(() => import('../pages/details/index'));
const CartPage = loadable(() => import('../pages/cart/index'));
const LoginPage = loadable(() => import('../pages/login/index'));
const RegisterPage = loadable(() => import('../pages/register/index'));
const WishListPage = loadable(() => import('../pages/wishlist/index'));

const RouteApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/details" element={<DetailPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/wishlist" element={<WishListPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Routes>
        </BrowserRouter>
        
    )
}

export default React.memo(RouteApp);