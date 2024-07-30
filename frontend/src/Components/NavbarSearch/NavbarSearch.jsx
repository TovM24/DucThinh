import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LayoutGrid, ShoppingCart, Heart, Search } from "lucide-react"
import { ShopContext } from "../../Context/ShopContext";    

import './NavbarSearch.css'



const NavbarSearch = () => {

    const { getTotalCartItems } = useContext(ShopContext)

    return (
        <div className="navbar-search">
            <div className="navbar-search-category">
                <Link style={{ textDecoration: 'none' }} to='/login'><button style={{ background: '#28282a' }}><LayoutGrid className="category-icon" style={{ width: '30px', height: '30px', color: '#8262d2' }}/><p>Category List</p></button></Link>

                <div className="search-container">
                    <Search style={{ width: '30px', height: '30px', color: '#8262d2', fontWeight: '400', margin: '0 15px 0 15px'  }}/>
                    <input type="text" id="searchInput" placeholder="Search..." />
                </div>
                
                <div className="search-icons">
                    <div className="shopping-cart">
                        <Link to='/cart'><Heart style={{ width: '30px', height: '30px', color: '#8262d2', fontWeight: '400' }}/></Link>
                    </div>

                    <div>
                        <div className="shopping-cart">
                            <Link to='/cart'><ShoppingCart style={{ width: '30px', height: '30px', color: '#8262d2', fontWeight: '400' }}/></Link>
                        </div>
                        <div className="nav-cart-count">{getTotalCartItems()}</div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarSearch
