import React from 'react';
import './mainPageBanner.scss';
const MainPageBanner = () => {
    return (
        <div className="banner">
            <div className="content">
                <div className="left">
                    <h2>Куда то спешишь, паровоз?</h2>
                    <span>Получи скидку 20% на первый заказ</span>
                    <button className="btn">Получить</button>
                </div>
                <div className="right"></div>
            </div>
        </div>
    );
};

export default MainPageBanner;
