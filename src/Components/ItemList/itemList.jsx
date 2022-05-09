import React from 'react';
import './itemList.scss';
const ItemList = ({ items, addToBasket, addToFavorite }) => {
    return (
        <div className="itemList">
            {items.map((item, index) => (
                <div className="item" key={`${index}_${item.text}`}>
                    <img height="200" width="auto" src={item.img} alt={item.name} />
                    <span className="item-header">{item.text}</span>
                    <span className="item-cost">{item.price} Руб.</span>
                    <div className="buttons">
                        <button className="btn" onClick={() => addToBasket(item)}>
                            Добавить в корзину
                        </button>
                        <button className="btn" onClick={() => addToFavorite(item)}>
                            +
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
