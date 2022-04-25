import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './style.scss';

const Header = ({ setBasketActive, setMenuActive, menuActive }) => {
    return (
        <div className="header">
            <div className="preheader">
                <div className="logo">
                    <div className="img"></div>
                    <h2>
                        DREAM<span>SHOP</span>
                    </h2>
                    <div className="button-menu" onClick={() => setMenuActive(!menuActive)}>
                        <span>Меню</span>
                        <div
                            className="dropdown-button"
                            style={
                                menuActive ? { transform: 'rotateZ(180deg) translateY(2px)' } : null
                            }></div>
                    </div>
                </div>
                <div className="buttons">
                    <div className="basket">
                        <div className="icon icon-heart"></div>
                        ИЗБРАННОЕ
                    </div>
                    <div className="basket" onClick={() => setBasketActive(true)}>
                        <div className="icon icon-basket"></div>
                        КОРЗИНА
                    </div>
                    <div className="basket">
                        <div className="icon icon-login"></div>
                        ВХОД
                    </div>
                </div>
            </div>
            {}
            {menuActive ? (
                <nav>
                    <ul>
                        <li>
                            <div className="icon mechmod"></div>
                            <Link to="/?category=mechmods">Мехмоды</Link>
                        </li>
                        <li>
                            <div className="icon plate"></div>
                            <Link to="/?category=plates">Платы</Link>
                        </li>
                        <li>
                            <div className="icon solt"></div>
                            <Link to="/?category=solt">Солюшки</Link>
                        </li>
                        <li>
                            <div className="icon drips"></div>
                            <Link to="/?category=drips">Дрипки</Link>
                        </li>
                        <li>
                            <div className="icon liquid"></div>
                            <Link to="/?category=liquid">Жидкости</Link>
                        </li>
                        <li>
                            <div className="icon acs"></div>
                            <Link to="/?category=accessories">Аксессуары</Link>
                        </li>
                    </ul>
                </nav>
            ) : null}
        </div>
    );
};

export default Header;
