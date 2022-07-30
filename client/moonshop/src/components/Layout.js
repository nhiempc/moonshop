import React from 'react';
import Header from './partials/Header';
import Content from './partials/Content';

const Layout = (props) => {
    return(
        <Layout>
            <Header/>
            <Content>
                {props.children}
            </Content>
        </Layout>
    )
}

export default React.memo(Layout);