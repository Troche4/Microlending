import {Link} from "react-router-dom";
import Button from "./Button";

const SignInButton = () => {



    return (
        <Link to ="/signIn"><Button
            type = "button"
            buttonStyle="btn-primary-outline"
            buttonSize="btn--small"
        >Sign in</Button></Link>

    )
}

export default SignInButton;