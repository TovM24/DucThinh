import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryItem.css'

const CategoryItem = (props) => {
    return (
        <div className="category-container" style={{ background: props.color }}>
            <Link to={`/product/${props.id}`}>
                <div className='category-item'>
                    <p>{props.name}</p>
                    <p className='category-sub'>{props.subtitle}</p>
                    
                    <div className="category-img">
                        <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
                    </div>

                    <div className="item-prices">
                        <div className="item-price-sale">
                            -{props.sale}% <p>off</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CategoryItem
