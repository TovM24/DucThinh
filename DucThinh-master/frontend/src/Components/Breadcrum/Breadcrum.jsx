import React from "react";
import './Breadcrum.css'
import { ChevronRight } from "lucide-react"



const Breadcrum = (props) => {

    const {product} = props;

    return (
        <div className="breadcrum">
            HOME <ChevronRight /> SHOP <ChevronRight /> {product.category} <ChevronRight /> {product.name}
        </div>
    )
}


export default Breadcrum