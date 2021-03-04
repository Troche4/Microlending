import "./aside.css";
import Button from "./Button";
import {Link} from "react-router-dom";

function Aside() {
    return (
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
    )
}
export default Aside;