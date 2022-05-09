import React, { useState, useEffect } from 'react';
import ItemList from '../Components/ItemList/itemList';
const Items = ({ addToBasket, addToFavorite, category }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(require(`../Database/${category}.json`));
    }, [category]);
    //const dataBaseLink = `https://run.mocky.io/v3/e636587f-12eb-499e-889b-0949d6368b19`;

    /*React.useEffect(() => {
        fetch(dataBaseLink)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
            });
    }, []);*/
    return <ItemList items={items} addToBasket={addToBasket} addToFavorite={addToFavorite} />;
};

export default Items;
