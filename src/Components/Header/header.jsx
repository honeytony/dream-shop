import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import './header.scss';

const Header = ({ setBasketActive, basketItems }) => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <>
            <div className="header">
                <div className="preheader">
                    <div className="logo">
                        <Link to="/">
                            <div className="img"></div>
                        </Link>
                        <Link to="/">
                            <h2>
                                DREAM<span>SHOP</span>
                            </h2>
                        </Link>

                        <div className="button-menu" onClick={() => setMenuActive(!menuActive)}>
                            <span>Меню</span>
                            <div
                                className="dropdown-button"
                                style={
                                    menuActive
                                        ? { transform: 'rotateZ(180deg) translateY(2px)' }
                                        : null
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
                            {basketItems ? (
                                <span className="basket-count">{basketItems}</span>
                            ) : null}
                            КОРЗИНА
                        </div>
                        <div className="basket">
                            <div className="icon icon-login"></div>
                            ВХОД
                        </div>
                    </div>
                </div>

                {/* {menuActive ? ( */}

                <Transition in={menuActive} timeout={{ exit: 1000 }} mountOnEnter unmountOnExit>
                    {(state) => (
                        <nav className={state}>
                            <ul>
                                <li>
                                    <div className="icon mechmod"></div>
                                    <Link to="/mechmods">Мехмоды</Link>
                                </li>
                                <li>
                                    <div className="icon plate"></div>
                                    <Link to="/plates">Платы</Link>
                                </li>
                                <li>
                                    <div className="icon solt"></div>
                                    <Link to="/solt">Солюшки</Link>
                                </li>
                                <li>
                                    <div className="icon drips"></div>
                                    <Link to="/drips">Дрипки</Link>
                                </li>
                                <li>
                                    <div className="icon liquid"></div>
                                    <Link to="/liquid">Жидкости</Link>
                                </li>
                                <li>
                                    <div className="icon acs"></div>
                                    <Link to="/accessories">Аксессуары</Link>
                                </li>
                            </ul>
                        </nav>
                    )}
                </Transition>
                {/* ) : null} */}
            </div>
        </>
    );
};

export default Header;
