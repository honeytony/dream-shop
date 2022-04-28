import Header from './components/header';
import ItemList from './components/itemList';
import Basket from './components/basket';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function App() {
    const [searchParams, setSearchParams] = useSearchParams();
    const createReactUseEffect = (sneackersLink) => {};

    const dataBaseLink = 'https://62655ccc94374a2c506f8ec6.mockapi.io/DreamStoreDatabase';
    const [items, setItems] = useState([]);

    React.useEffect(() => {
        fetch(dataBaseLink)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems((items) => [...items, json]);
            })
            .then(() => {
                console.log(items);
            });
    }, []);

    const [basket, setBasketItems] = useState([]);
    const [basketActive, setBasketActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    function addToBasket(card) {
        setBasketItems((basket) => [...basket, card]);
    }

    return (
        <div className="App">
            <div className="container">
                <h1>Всем привет</h1>
                <Header
                    setBasketActive={setBasketActive}
                    setMenuActive={setMenuActive}
                    menuActive={menuActive}
                />

                <ItemList
                    dataItem={searchParams.get('category')}
                    items={items}
                    addToBasket={addToBasket}
                />
                {basketActive ? <Basket setBasketActive={setBasketActive} items={basket} /> : null}
            </div>
        </div>
    );
}
