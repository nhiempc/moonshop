import React from 'react';
import Header from './partials/Header';
import Content from './partials/Content';
import Footer from './partials/Footer';

const Layout = (props) => {
    return(
        <>
        <Header/>
        <Content>
            {props.children}
        </Content>
        <Footer/>
        </>
    )
}

export default React.memo(Layout);