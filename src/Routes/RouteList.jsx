import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Pages/main';
import Layout from '../Layouts/layout';
import Items from '../Pages/items';
const RouteList = ({ addToBasket, addToFavorite }) => {
    const routeList = require('../Database/routeList.json');

    return (
        <Routes>
            {routeList.map((item, index) => {
                return (
                    <Route
                        key={index}
                        path={`${item.route}`}
                        element={
                            <Layout
                                children={
                                    <Items
                                        addToBasket={addToBasket}
                                        addToFavorite={addToFavorite}
                                        category={`${item.route}`}
                                    />
                                }
                            />
                        }
                    />
                );
            })}
            <Route
                path="/"
                element={
                    <Layout
                        children={<Main addToBasket={addToBasket} addToFavorite={addToFavorite} />}
                    />
                }
            />
        </Routes>
    );
};

export default RouteList;
