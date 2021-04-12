import {Link} from "react-router-dom";
import Button from "./Button";
import React, {Fragment} from "react";
import {toast} from "react-toastify";



const SignOutButton = ( { setAuth } ) =>  {
    console.log(setAuth)

    const logout = async e => {
        e.preventDefault();
        try {
            localStorage.removeItem("token");
            setAuth(false);
            toast.success("Logout successfully");
        } catch (err) {
            console.error(err.message);
        }
    };


    return (
        <Fragment>
        <div>

            <Link to ="/"><Button onClick={e => logout(e)}
                                   type = "button"
                                   buttonStyle="btn-primary-outline"
                                   buttonSize="btn--small"
            >Sign out</Button></Link>
        </div>
        </Fragment>
    )
};

export default SignOutButton;

