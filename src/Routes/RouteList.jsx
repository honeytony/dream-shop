import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mechmods from '../Pages/mechmods';
import Main from '../Pages/main';
import Layout from '../Layouts/layout';
const RouteList = ({ addToBasket }) => {
    return (
        <Routes>
            <Route path="/" element={<Layout children={<Main />} />}></Route>
            <Route
                path="/mechmods"
                element={<Layout children={<Mechmods addToBasket={addToBasket} />} />}
            />
        </Routes>
    );
};

export default RouteList;
