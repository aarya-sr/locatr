import React from "react";
import './Home.css'
import { Plus, Search, Upload, Users } from "lucide-react";

const Home=()=>{
    return(
        
        <div className="hero-section">
            <h1 className="hero-title">Lost something? Find it here!</h1>
            <p className="hero-para">Connect with your campus community to find lost items...</p>



            <div className="hero-buttons">
            <button className="btn-1">
                <Plus size={18}/>Post an item</button>
            <button className="btn-2">
                <Search size={18}/>Browse items</button>
            </div>



        <div className="hero-features">
            <div className="feature-card">
            <Upload size={28}/>
            <h3>Post Items</h3>
            <p>Quickly post lost or found items with photos and descriptions</p>
            </div>


            <div className="feature-card">
            <Search size={28} />
            <h3>Easy Search</h3>
            <p>Filter by category, location, and keywords to find what you need</p>
            </div>


            <div className="feature-card">
            <Users size={28} />
            <h3>Get Connected</h3>
            <p>Direct contact system to reunite items with their owners</p>
            </div>


        </div>
        </div>
       
    )


}
export default Home




