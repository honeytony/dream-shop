import React, { useState, useEffect } from 'react';
import ItemList from '../Components/ItemList/itemList';
const Items = ({ addToBasket, addToFavorite, category }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(require(`../Database/${category}.json`));
    }, [category]);
    return <ItemList items={items} addToBasket={addToBasket} addToFavorite={addToFavorite} />;
};

export default Items;
