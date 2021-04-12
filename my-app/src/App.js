import React, { Fragment, useState, useEffect } from "react";
import ReactDOM  from "react-dom";
import { Redirect } from "react-router-dom";
import './App.css';
import {
    BrowserRouter as Router,
    Route, Switch,
} from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SingIn";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import LogoHeader from "./components/LogoHeader";
import NavHeader from "./components/NavHeader";
import "react-toastify/dist/ReactToastify.css";
import {toast} from "react-toastify";

toast.configure();


function App() {

    const checkAuthenticated = async ( ) => {
        try {
            const res = await fetch("http://localhost:3080/authentication/verify", {
                method: "POST",
                headers: { jwt_token: localStorage.token }
            });

            const parseRes = await res.json();

            parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        checkAuthenticated();
    }, []);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

     const setAuth = boolean => {
        setIsAuthenticated(boolean);
    };



    return (
        <Fragment>
        <Router>

                <div className="body">
                    <div className="navContainer">
                        <LogoHeader />
                        <NavHeader />

                    </div>

                    <div className="main">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/signup" render={props => !isAuthenticated ? (<SignUp {...props} setAuth={setAuth} />) : (<Redirect to="/signin" />)}/>
                            <Route exact path="/signin" render={props => !isAuthenticated ? (<SignIn {...props} setAuth={setAuth} />) : (<Redirect to="/dashboard" />)}/>
                            <Route exact path="/dashboard" render={props => isAuthenticated ? (<Dashboard {...props} setAuth={setAuth} />) : (<Redirect to="/signin" />)}/>

                        </Switch>
                    </div>
                    <Footer />
                </div>
        </Router>
        </Fragment>
    );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

