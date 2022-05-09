import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Pages/main';
import Layout from '../Layouts/layout';
import Items from '../Pages/items';
const RouteList = ({ addToBasket }) => {
    return (
        <Routes>
            <Route path="/" element={<Layout children={<Main />} />}></Route>
            <Route
                path="/mechmods"
                element={
                    <Layout children={<Items addToBasket={addToBasket} category={'mechmods'} />} />
                }
            />
            <Route
                path="/plates"
                element={
                    <Layout children={<Items addToBasket={addToBasket} category={'plates'} />} />
                }
            />
            <Route
                path="/solt"
                element={
                    <Layout children={<Items addToBasket={addToBasket} category={'solt'} />} />
                }
            />
            <Route
                path="/drips"
                element={
                    <Layout children={<Items addToBasket={addToBasket} category={'drips'} />} />
                }
            />
            <Route
                path="/liquid"
                element={
                    <Layout children={<Items addToBasket={addToBasket} category={'liquid'} />} />
                }
            />
            <Route
                path="/accessories"
                element={
                    <Layout
                        children={<Items addToBasket={addToBasket} category={'accessories'} />}
                    />
                }
            />
        </Routes>
    );
};

export default RouteList;
