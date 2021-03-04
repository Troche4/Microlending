import React, {useState} from 'react';
import "./navheader.css";
import Button from "./Button";

function NavHeader() {
    return (
    <nav className="nav-header">
        <Button onClick={() => {console.log("You Clicked on Me!") }}
                type = "button"
                buttonStyle="btn--primary--outline"
                buttonSize="btn--small"
        >Sign in</Button>
    </nav>
    )
}
export default NavHeader;