import React from 'react';
import Slider from '../Components/Slider/Slider.jsx';
import Popular from '../Components/Category/Category.jsx';
import Offers from '../Components/Offers/Offers';
// import NewCollections from '../Components/NewCollections/NewCollections';
import BrandProduct from '../Components/BrandProduct/BrandProduct'
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import TrendingTech from '../Components/TrendingTech/TrendingTech.jsx';


const Shop = () => {
    return (
        <div>
            <Slider/>
            <Popular/>
            <TrendingTech/>
            <BrandProduct/>
            <Offers/>
            <NewsLetter/>
        </div>
    )
}


export default Shop;