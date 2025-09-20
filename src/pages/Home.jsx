import React from "react";
import './Home.css'
// const Home=()=>{
//     return <h1>Welcome to locatr!</h1>


// }
// export default Home




//Navbar
const Navbar = () =>{
    return(
        <nav className="navbar">
            <h1 className="logo">Locatr</h1>
            <div className="search-bar">
                <input type="text" placeholder="Search lost items..."/>
                <button>🔍</button>
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