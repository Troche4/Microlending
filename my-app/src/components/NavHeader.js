import "./navheader.css";
import SignOutButton from "./SignOutButton";
import SignInButton from "./SignInButton";
import {Fragment} from "react";

const NavHeader = () => {



    return (
        <Fragment>
        <div className="header-navbar">
            <SignOutButton /> <SignInButton />
        </div>
        </Fragment>
    )
}
export default NavHeader;