import React, { Component } from 'react';
import logo from "../lendLogo.svg";
import Button from "./Button";
import {HashRouter, Route} from "react-router-dom";
import { Link } from "react-router-dom";
import SignUp from "../content/SignUp";
class Home extends Component {
    render() {
        return (
            <HashRouter>
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <div className="businessName">LEND</div>
                    </div>
                    <div className="header">
                        <Button onClick={() => {console.log("You Clicked on Me!") }}
                                type = "button"
                                buttonStyle="btn--primary--outline"
                                buttonSize="btn--small"
                        >Sign in</Button>
                    </div>
                    <div className="sidebar">
                        <h1>
                            Effortlessly lend money to the entrepreneurs who need it.
                        </h1>
                        <h3>
                            We make it easy for you to lend money where you want it to go.
                        </h3>
                        <Link to="/signUp"><Button
                                type = "button"
                                buttonStyle="btn--primary--solid"
                                buttonSize="btn--large"
                        >Sign up</Button></Link>
                    </div>
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