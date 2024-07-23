import React from 'react'
import { Link } from 'react-router-dom'
import './BrandItem.css'

const BrandItem = (props) => {
    return (
        <div className='brand-item'>
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
            <p>{props.name}</p>
        </div>
    )
}

export default BrandItem
