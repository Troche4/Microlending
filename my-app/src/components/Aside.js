import "./aside.css";
import Button from "./Button";
import {Link} from "react-router-dom";

function Aside() {
    return (
        <div className="sidebar">
            <h1>
                Effortlessly borrow money to fund your dreams.
            </h1>
            <h3>
                We make the borrowing process easy and efficient for entrepreneurs.
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