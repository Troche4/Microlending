import "./content.css";
import {Link, Route} from "react-router-dom";
import SignUp from "../content/SignUp";

function Content() {
    return (
        <div className="content">
            <Route path="/signUp" component={SignUp}/>
        </div>
    )
}
export default Content;