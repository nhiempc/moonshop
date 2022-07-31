import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from '@loadable/component';

const HomePage = loadable(() => import('../pages/home/index'));
const DetailPage = loadable(() => import('../pages/detail/index'));


const RouteApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/detail" element={<DetailPage/>}/>
            </Routes>
        </BrowserRouter>
        
    )
}

export default React.memo(RouteApp);