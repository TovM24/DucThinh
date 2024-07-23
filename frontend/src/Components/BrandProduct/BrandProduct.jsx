import React from 'react'
import brand_item from '../Assets/BrandProduct/data'
import { Link } from 'react-router-dom'
import './BrandProduct.css'
// import './BrandItem.css'

const BrandProduct = () => {
    return (
        <div className="product">
            <h1>Best Brand Products</h1>
            <hr />
            <div className="product-item">
                {brand_item.map((item, i) => {
                    return (
                        <div className='brand-item' key={i}>
                            <Link to={`/product/${item.id}`}>
                                <img onClick={() => window.scrollTo(0,0)} src={item.image} alt={item.name} />
                            </Link>
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BrandProduct
