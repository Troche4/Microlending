import React, { Fragment } from 'react';
import "./signIn.css";
import {Link} from "react-router-dom";
import {useState} from "react";

const SignIn = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const { email, password } = inputs

    const onChange = e => {
        setInputs({...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async(e) => {
        e.preventDefault()
        try{
            const body = {email, password};
            const response = await fetch("http://localhost:3080/authentication/signin", {
                method: "post",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });

            const parseRes = await response.json()
            localStorage.setItem("token", parseRes.token)
            setAuth(true);
        }catch (err) {
            console.error(err.message)
        }
    }

        return (
            <Fragment>
            <div className="formContainerSignIn">

                <form onSubmit={onSubmitForm} className="sign-up_form">
                    <div className="text-container">

                        <div className="form-input">
                            <input className="input-field"  type="email" placeholder="email address" name="email" value={email} onChange={e => onChange(e)} />

                        </div>

                        <div className="form-input">

                            <input className="input-field" type="password" placeholder="password" name="password" value={password} onChange={e => onChange(e)} />

                        </div>

                        <button className="btn--primary--form btn--small" type="submit">Login!</button>


                    </div>
                </form>
                <Link to="/signup">Sign Up!</Link>
            </div>
            </Fragment>
        )
}
export default SignIn