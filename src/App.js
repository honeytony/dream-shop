import React, { useState } from 'react';
import Header from './Components/Header/header';
import './Scss/style.scss';
import Basket from './Components/Basket/basket';
import RouteList from './Routes/RouteList';

export default function App() {
    const [basketItems, setBasketItems] = useState(
        localStorage.getItem('basketItems') ? JSON.parse(localStorage.getItem('basketItems')) : [],
    );
    const [basketActive, setBasketActive] = useState(false);
    function addToBasket(card) {
        let basItems = JSON.parse(localStorage.getItem('basketItems')) || [];
        basItems.push(card);
        localStorage.setItem('basketItems', JSON.stringify(basItems));
        //setBasketItems((basket) => [...basket, card]);
        setBasketItems(JSON.parse(localStorage.getItem('basketItems')));
    }
    return (
        <div className="container">
            <Header setBasketActive={setBasketActive} basketItems={basketItems.length} />
            <Basket
                basketActive={basketActive}
                basketItems={basketItems}
                setBasketActive={setBasketActive}
            />
            <RouteList addToBasket={addToBasket} />
        </div>
    );
}
