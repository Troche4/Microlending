import Button from "./Button";
import "./navheader.css";

function NavHeader() {
    return (
    <div className="nav-header">
        <Button onClick={() => {console.log("You Clicked on Me!") }}
                type = "button"
                buttonStyle="btn--primary--outline"
                buttonSize="btn--small"
        >Sign in</Button>
    </div>
    )
}
export default NavHeader;