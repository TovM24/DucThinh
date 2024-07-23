import React from 'react';
import './Category.css'
import data_product from '../Assets/data';
import CategoryItem from '../CategoryItem/CategoryItem';

const Popular = () => {
    return (
        <div className='popular'>
            <h1>CATEGORY</h1>
            <hr/>
            <div className="popular-item">
                {data_product.map((item, i) => {
                    return <CategoryItem key={i} id={item.id} color={item.color} name={item.name} subtitle={item.subtitle} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}


export default Popular;