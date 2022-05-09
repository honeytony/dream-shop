import React from 'react';
import MainPageBanner from '../Components/Banners/mainPageBanner';
import Items from './items';

const MainPage = ({ addToBasket }) => {
    return (
        <>
            <MainPageBanner />
            <Items addToBasket={addToBasket} category={'all'} />
        </>
    );
};

export default MainPage;
