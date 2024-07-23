import React, { useState, useRef } from "react";
import { User, ChevronDown  } from "lucide-react"
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import nav_dropdown from "../Assets/nav-dropdown.png"
import './Navbar.css'

const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    const menuRef = useRef()
    
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=""/>
                <p>Duc Thinh</p>
            </div>

            {/* // dropdown-container */}
            <div className="nav-dropdown">
                <ChevronDown />
            </div>
            {/* <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" /> */}

            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => {setMenu("home")}}><Link className="nav-link" to='/'>Home</Link> {menu === "home" ? <hr/> : <></>} </li>
                <li onClick={() => {setMenu("store")}}><Link className="nav-link" to='/store'>Store</Link> {menu === "store" ? <hr/> : <></>} </li>
                <li onClick={() => {setMenu("news")}}><Link className="nav-link" to='/news'>News</Link> {menu === "news" ? <hr/> : <></>} </li>
                <li onClick={() => {setMenu("pre-orders")}}><Link className="nav-link" to='/pre-orders'>Pre-Orders</Link> {menu === "pre-orders" ? <hr/> : <></>} </li>
                <li onClick={() => {setMenu("comming-soon")}}><Link className="nav-link" to='/comming-soon'>Comming Soon</Link> {menu === "comming-soon" ? <hr/> : <></>} </li>
            </ul>

            <div className="nav-login-cart">
                <Link style={{ textDecoration: 'none' }} to='/login'><button style={{ background: '#8262d2' }}><User/><p>Login/Register</p></button></Link>
                {/* <Link to='/cart'><ShoppingCart style={{ width: '35px', height: '35px' }}/></Link> */}
                {/* <div className="nav-cart-count">{getTotalCartItems()}</div> */}
            </div>
        </div>
    )
}


export default Navbar;