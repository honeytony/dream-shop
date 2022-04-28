import React, { useState } from 'react';
import ItemList from '../Components/ItemList/itemList';
const Mechmods = ({ addToBasket }) => {
    const dataBaseLink = `https://62655ccc94374a2c506f8ec6.mockapi.io/mechmods`;
    const [items, setItems] = useState([]);

    React.useEffect(() => {
        fetch(dataBaseLink)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
            });
    }, []);
    return <ItemList items={items} addToBasket={addToBasket} />;
};

export default Mechmods;
