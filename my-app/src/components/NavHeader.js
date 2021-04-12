import "./navheader.css";
import SignOutButton from "./SignOutButton";
import SignInButton from "./SignInButton";
import {Fragment} from "react";

const NavHeader = (props) => {
    console.log(props)

    return (
        <Fragment>
        <div className="header-navbar">
            {props.isAuthenticated ? <SignOutButton setAuth={props.setAuth} /> : <SignInButton /> }

        </div>
        </Fragment>
    )
}
export default NavHeader;