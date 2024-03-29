import React from 'react';
import './basket.scss';

const Basket = ({
    basketItems,
    setBasketActive,
    basketActive,
    basketSum,
    removeFromBasket,
    addToBasket,
}) => {
    return (
        <div>
            {basketActive ? (
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
                                    <span>{basketSum} Руб</span>
                                </div>
                                <button className="btn">Оплатить</button>
                            </div>
                            <div className="itemss">
                                {basketItems
                                    ? basketItems.map((item, index) => (
                                          <div
                                              className="basket-items-item"
                                              key={`${index}_${item.price}`}>
                                              <img src={item.img} alt={item.text} />
                                              <div className="texts">
                                                  <div className="headers">
                                                      <span className="item-header">
                                                          {item.text}
                                                      </span>
                                                      <span className="item-cost">
                                                          {item.newPrice} Руб.
                                                      </span>
                                                  </div>
                                                  <div className="options">
                                                      <div className="count">
                                                          <span
                                                              onClick={() =>
                                                                  addToBasket(item, 'delete')
                                                              }>
                                                              &lt;
                                                          </span>
                                                          <span>{item.count}</span>
                                                          <span
                                                              onClick={() =>
                                                                  addToBasket(item, 'add')
                                                              }>
                                                              &gt;
                                                          </span>
                                                      </div>
                                                      <span
                                                          className="exit"
                                                          onClick={() => removeFromBasket(item)}>
                                                          Удалить
                                                      </span>
                                                  </div>
                                              </div>
                                          </div>
                                      ))
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Basket;
