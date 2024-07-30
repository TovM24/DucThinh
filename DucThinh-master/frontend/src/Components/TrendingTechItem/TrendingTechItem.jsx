import React from 'react'
import { Link } from 'react-router-dom'
import './TrendingTechItem.css'

const OffersItem = (props) => {
    return (
        <div className='offers-container'>
            <Link to={`/product/${props.id}`}>
                <div className="offers-item">
                    <div className="offers-img">
                        <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
                    </div>
                    <p>{props.name}</p>
                    <p className='category-sub'>{props.subtitle}</p>
                    <div className="item-prices">
                        {/* <div className="item-price"> */}
                            {props.price} $
                        {/* </div> */}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default OffersItem
