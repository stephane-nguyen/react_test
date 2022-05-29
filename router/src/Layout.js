import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

import { useContext } from 'react';
import DataContext from './context/DataContext';

// function Layout({ search, setSearch, width}) {
//due to DataContext we don't need props
function Layout() {
    
    const { search, setSearch, width } = useContext(DataContext);

    return (
        <div className="App">
            <Header title="My Blog" width={width} />
            <Nav search={search} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout