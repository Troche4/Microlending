import "./content.css";
import {Link, Route} from "react-router-dom";
import SignUp from "../content/SignUp";
import SignIn from "../content/SingIn";

function Content() {
    return (
        <div className="content">
            <Route path="/signUp" component={SignUp}/>
            <Route path="/signIn" component={SignIn}/>
        </div>
    )
}
export default Content;