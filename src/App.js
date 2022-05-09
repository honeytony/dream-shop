import React, { useState, useEffect } from 'react';
import Header from './Components/Header/header';
import './Scss/style.scss';
import Basket from './Components/Basket/basket';
import RouteList from './Routes/routeList';

export default function App() {
    //Все товары в корзине (localstorage)
    const [basketItems, setBasketItems] = useState(
        localStorage.getItem('basketItems') ? JSON.parse(localStorage.getItem('basketItems')) : [],
    );
    const [favoriteItems, setFavoriteItems] = useState(
        localStorage.getItem('favoriteItems')
            ? JSON.parse(localStorage.getItem('basketItems'))
            : [],
    );
    const [basketActive, setBasketActive] = useState(false); //Открыта или закрыта корзина
    const [basketSum, setBasketSum] = useState(0); //Сумма всех товаров в корзине

    //Добавление товара в корзину
    function addToBasket(card) {
        let basItems = JSON.parse(localStorage.getItem('basketItems')) || [];
        basItems.push(card);
        localStorage.setItem('basketItems', JSON.stringify(basItems));
        setBasketItems(JSON.parse(localStorage.getItem('basketItems')));
    }

    //Удаление товара из корзины
    function removeFromBasket(card, index) {
        let basItems = JSON.parse(localStorage.getItem('basketItems'));
        console.log('card: ', card, ' card index: ', index);
        let newBasItems = basItems.filter(
            (item) => `${index}_${item.text}` !== `${index}_${card.text}`,
        );
        localStorage.setItem('basketItems', JSON.stringify(newBasItems));
        setBasketItems(JSON.parse(localStorage.getItem('basketItems')));
    }

    function addToFavorite(card) {
        let favItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
        favItems.push(card);
        localStorage.setItem('favoriteItems', JSON.stringify(favItems));
        setFavoriteItems(JSON.parse(localStorage.getItem('favoriteItems')));
    }

    useEffect(() => {
        setBasketSum(calculateBasket(basketItems));
    }, [basketItems]);

    //пересчет суммы товаров из корзины
    function calculateBasket(data) {
        let sum = 0;
        data.forEach((item) => {
            sum += item.price;
        });
        return sum;
    }

    return (
        <div className="container">
            <Header
                setBasketActive={setBasketActive}
                basketItemsCount={basketItems.length}
                favoriteItemsCount={favoriteItems.length}
            />
            <Basket
                basketActive={basketActive}
                basketItems={basketItems}
                setBasketActive={setBasketActive}
                basketSum={basketSum}
                removeFromBasket={removeFromBasket}
            />
            <RouteList addToBasket={addToBasket} addToFavorite={addToFavorite} />
        </div>
    );
}
