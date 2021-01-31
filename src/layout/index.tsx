import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({hideHeader = false, children}: { hideHeader?: boolean, children: React.ReactNode }) => {
    return (
        <>
            {hideHeader ? null : <Header/>}
            {children}
            <Footer/>
        </>
    );
}

export default Layout;
