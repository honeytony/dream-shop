import React from 'react';

const Basket = ({ items, setBasketActive }) => {
    return (
        <div>
            <div className="bascketBackground">
                <div className="basket">
                    <div className="basket-header">
                        <h2>Корзина</h2>
                        <span className="btn-close" onClick={() => setBasketActive(false)}>
                            X
                        </span>
                    </div>
                    <hr />
                    <div className="basket-items">
                        <div className="calculator">
                            <div className="sum">
                                <span>Сумма заказа: </span>
                                <br />
                                <span>Руб</span>
                            </div>
                            <button className="btn">Оплатить</button>
                        </div>
                        <div className="itemss">
                            {items.map((item, index) => (
                                <div className="basket-items-item">
                                    <img src={item.img} />
                                    <div className="texts">
                                        <span className="item-header">{item.text}</span>
                                        <span className="item-cost">{item.price} Руб.</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;
