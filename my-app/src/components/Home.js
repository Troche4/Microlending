import React, { Component } from 'react';
import {HashRouter, Route} from "react-router-dom";
import LogoHeader from "./LogoHeader";
import NavHeader from "./NavHeader";
import Aside from "./Aside";
import Content from "./Content";
import Footer from "./Footer";
class Home extends Component {
    render() {
        return (
            <HashRouter>
                <div className="container">
                    <LogoHeader />
                    <NavHeader />
                    <Aside />
                    <Content />
                    <Footer />
                </div>
            </HashRouter>
        );
    }
}
export default Home