import React from "react";
import './Navbar.css'

const Navbar = () =>{
    return(
        <nav className="navbar">
            <h1 className="logo">Locatr</h1>
            <div className="search-bar">
                <input type="text" placeholder="Search lost items..."/>
                <button className="search-button">🔍</button>
            </div>

            <div className="nav-actions">
                <button className="posts">Post Lost items</button>
                <button className="notifications">🔔</button>
                <button className="account">👤</button>
            </div>

        </nav>
    )
}
export default Navbar