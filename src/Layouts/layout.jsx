import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <Outlet />
            {children}
        </div>
    );
};

export default Layout;
