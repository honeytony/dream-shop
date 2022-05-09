import React from 'react';

const HeaderIcon = ({ type, setBasketActive, count }) => {
    switch (type) {
        case 'basket':
            return (
                <div className="basket" onClick={() => setBasketActive(true)}>
                    <div className="icon icon-basket"></div>
                    {count ? <span className="basket-count">{count}</span> : null}
                    КОРЗИНА
                </div>
            );
        case 'favorite':
            return (
                <div className="basket">
                    <div className="icon icon-heart"></div>
                    {count ? <span className="basket-count">{count}</span> : null}
                    ИЗБРАННОЕ
                </div>
            );
        default: {
            return <span>?</span>;
        }
    }
};

export default HeaderIcon;
