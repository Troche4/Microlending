import React, { Component } from 'react';
import {HashRouter, Route} from "react-router-dom";
import SignUp from "../content/SignUp";
import LogoHeader from "./LogoHeader";
import NavHeader from "./NavHeader";
import Aside from "./Aside";
class Home extends Component {
    render() {
        return (
            <HashRouter>
                <div className="container">
                    <LogoHeader />
                    <NavHeader />
                    <Aside />
                    <div className="content">

                        <Route path="/signUp" component={SignUp}/>
                    </div>
                    <div className="footer"></div>

                </div>
            </HashRouter>
        );
    }
}
export default Home