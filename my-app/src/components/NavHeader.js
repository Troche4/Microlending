import Button from "./Button";
import "./navheader.css";
import {Link} from "react-router-dom";

function NavHeader() {
    return (
    <div className="header-navbar">
       <Link to="/signIn"><Button onClick={() => {console.log("You Clicked on Me!") }}

                type = "button"
                buttonStyle="btn--primary--outline"
                buttonSize="btn--small"
        >Sign in</Button></Link>
    </div>
    )
}
export default NavHeader;