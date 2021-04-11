import "../components/dashboard.css";
import {Link} from "react-router-dom";
import Button from "./Button";
import "./hero.css";

function Hero() {
    return (
        <div className="myContainer">
            <div className="left">
                <h1>
                    Effortlessly borrow money to fund your dreams.
                </h1>
                <h3>
                    We make the borrowing process for entrepreneurs fast and easy.
                </h3>
                <Link to="/signUp"><Button
                    type = "button"
                    buttonStyle="btn--primary--solid"
                    buttonSize="btn--large"
                >Sign up</Button></Link>

            </div>

        </div>

    )
}
export default Hero;