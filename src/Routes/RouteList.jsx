import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mechmods from '../Pages/mechmods';
import Layout from '../Layouts/layout';
const RouteList = ({ addToBasket }) => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}></Route>
            <Route
                path="/mechmods"
                element={<Layout children={<Mechmods addToBasket={addToBasket} />} />}
            />
        </Routes>
    );
};

export default RouteList;
