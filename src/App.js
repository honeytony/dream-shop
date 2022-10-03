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
    function addToBasket(card, operator) {
        let basItems = JSON.parse(localStorage.getItem('basketItems')) || [];

        //записываем при условии что элемента в корзине нет
        if (basketCheck(basItems, card) === undefined) {
            card.count = 1;
            card.newPrice = card.price;
            basItems.push(card);
            saveToLocalStorage('basketItems', basItems);
        } else {
            let items = JSON.parse(localStorage.getItem('basketItems'));
            items.forEach((item) => {
                if (item.id === card.id) {
                    if (operator === 'add') {
                        item.count += 1;
                    } else if (operator === 'delete') {
                        if (item.count <= 1) {
                            items.filter((data) => data.id !== item.id);
                            alert('меньше');
                        } else {
                            item.count -= 1;
                        }
                    }

                    item.newPrice = item.price * item.count;
                }
            });
            saveToLocalStorage('basketItems', items);
        }
    }

    //функция сохранения в localStorage
    function saveToLocalStorage(storage, items) {
        localStorage.setItem(storage, JSON.stringify(items));
        setBasketItems(JSON.parse(localStorage.getItem(storage)));
    }

    //проверка на повторение товара
    function basketCheck(arr, card) {
        return arr.find((item) => item.id === card.id);
    }

    //Удаление товара из корзины
    function removeFromBasket(card) {
        let basItems = JSON.parse(localStorage.getItem('basketItems'));
        let newBasItems = basItems.filter((item) => item.id !== card.id);
        saveToLocalStorage('basketItems', newBasItems);
    }

    function addToFavorite(card) {
        // let favItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
        // favItems.push(card);
        // localStorage.setItem('favoriteItems', JSON.stringify(favItems));
        // setFavoriteItems(JSON.parse(localStorage.getItem('favoriteItems')));
    }

    useEffect(() => {
        setBasketSum(calculateBasket(basketItems));
    }, [basketItems]);

    //пересчет суммы товаров из корзины
    function calculateBasket(data) {
        let sum = 0;
        data.forEach((item) => {
            sum += item.newPrice;
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
                addToBasket={addToBasket}
            />
            <RouteList addToBasket={addToBasket} addToFavorite={addToFavorite} />
        </div>
    );
}
