import React from 'react'
import { TrendingUp, ChevronRight, ChevronLeft  } from "lucide-react"
import data_product from '../Assets/TrendingTech/data';
import TrendingTechItem from '../TrendingTechItem/TrendingTechItem'
import './TrendingTech.css'

const TrendingTech = () => {
    return (
        <div className='offers'>
            <div className="offers-top offers-shared">
                {/* set text aligin center */}
                <div className="offers-top-left offers-shared">
                    <TrendingUp />
                    <h1>Trending Tech</h1>
                </div>

                <div className="offers-top-right offers-shared">
                    <div className="show-all offers-shared">
                        <h1>Show All</h1>
                        <p>20</p>
                        <ChevronRight />
                    </div>

                    <div className="navigation-button offers-shared">
                        <div className="navigation-item offers-shared">
                            <ChevronLeft />
                        </div>
                        <div className="navigation-item offers-shared">
                            <ChevronRight />
                        </div>
                    </div>
                </div>
            </div>

            <div className="offers-bottom">
                {data_product.map((item, i) => {
                    return <TrendingTechItem key={i} id={item.id}name={item.name} subtitle={item.sub} image={item.image} price={item.price}/>
                })} 
            </div>
        </div>
    )
}

export default TrendingTech