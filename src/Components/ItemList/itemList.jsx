import React from 'react';
import './itemList.scss';
const ItemList = ({ items, addToBasket }) => {
    return (
        <div className="itemList">
            {items.map((item, index) => (
                <div className="item" key={`${index}_${item.text}`}>
                    <img height="200" width="auto" src={item.img} alt={item.name} />
                    <span className="item-header">{item.text}</span>
                    <span className="item-cost">{item.price} Руб.</span>
                    <button className="btn" onClick={() => addToBasket(item)}>
                        +
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
