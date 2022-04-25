import React from 'react';
import './style.scss';
const ItemList = ({ items, addToBasket }) => {
    return (
        <div className="itemList">
            {items.map((item, index) => (
                item.map((it,index)=> (
                    <div className="item" key={`${index}_${item.text}`}>
                    <img src={item.img} />
                    <span className="item-header">{}</span>
                    <span className="item-cost">{item.price} Руб.</span>
                    <button className="btn" onClick={() => addToBasket(item)}>
                        Добавить в корзину
                    </button>
                    {console.log(item[0].mechmods)}
                </div> 
                )
            ))
        </div>
    );
};

export default ItemList;
