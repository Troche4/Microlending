import React from 'react';
import './secondNav.css'
import {NavLink} from "react-router-dom";

const SecondNav = () => {


    return (

        <nav>
            <ul>
                <li><NavLink to="/dashboard" activeClassName="active">dashboard</NavLink></li>

            </ul>
        </nav>
    )

}


export default SecondNav;