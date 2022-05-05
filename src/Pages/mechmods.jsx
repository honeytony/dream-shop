import React, { useState } from 'react';
import ItemList from '../Components/ItemList/itemList';
const Mechmods = ({ addToBasket }) => {
    const mechmods = require('../Database/mechmods.json');
    const [items, setItems] = useState(mechmods);
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
    return <ItemList items={items} addToBasket={addToBasket} />;
};

export default Mechmods;
