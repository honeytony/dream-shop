import React, { useState } from 'react';
import Header from './Components/Header/header';
import './Scss/style.scss';
import Basket from './Components/Basket/basket';
import RouteList from './Routes/RouteList';

export default function App() {
    const [basketItems, setBasketItems] = useState([]);
    const [basketActive, setBasketActive] = useState(false);
    function addToBasket(card) {
        setBasketItems((basket) => [...basket, card]);
    }
    return (
        <>
            <div className="container">
                <h1>hello</h1>
                <Header setBasketActive={setBasketActive} basketItems={basketItems.length} />
                <Basket
                    basketActive={basketActive}
                    basketItems={basketItems}
                    setBasketActive={setBasketActive}
                />
                <RouteList addToBasket={addToBasket} />
            </div>
        </>
    );
}
