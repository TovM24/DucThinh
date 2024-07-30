import React from 'react';
import './Category.css'
import data_product from '../Assets/Category/data';
import CategoryItem from '../CategoryItem/CategoryItem';

const Popular = () => {
    return (
        <div className='popular'>
            <h1>CATEGORY</h1>
            <div className="popular-item">
                {data_product.map((item, i) => {
                    return <CategoryItem key={i} id={item.id}name={item.name} subtitle={item.sub} image={item.image} sale={item.sale} color={item.color}/>
                })}
            </div>
        </div>
    )
}


export default Popular;