import React, { Component } from 'react';
import './home.css';
import Hero from "./Hero";
import HomeRightImage from "./HomeRightImage";

class Home extends Component {

    render() {
        return (

            <div className="home-container">
                <Hero />
                <HomeRightImage />
            </div>


        );
    }
}
export default Home