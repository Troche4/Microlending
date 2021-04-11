import React, { Fragment } from 'react';
import "./signUp.css"
import {useState} from "react";
import {Link} from "react-router-dom";


const SignUp = ({ setAuth }) => {

    const [inputs, setInputs] = useState({

        email: "",
        password: "",
        firstname: "",
        lastname: ""

    });

    const {email, password, firstname, lastname} = inputs;

    const onChange = (e) => {

        setInputs({...inputs, [e.target.name] : e.target.value})

    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const body = { firstname, lastname, email, password }
            const response = await fetch ("http://localhost:3080/authentication/signup",{
                method: "post",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })

            const parseRes = await response.json()
            localStorage.setItem("token", parseRes.jwtToken)
            setAuth(true);
        }catch(err) {
            console.error(err.message)
        }
    }


    return (
<Fragment>
    <div className="formContainerSignUp">

        <form onSubmit={onSubmitForm} className="sign-up_form" >
            <div className="text-container">
                <div className="form-input">
                    <input className="input-field" type="text" placeholder="first name" name="firstname" value={firstname} onChange={e=> onChange(e)} />
                </div>

                <div className="form-input">
                    <input className="input-field" type="text" placeholder="last name" name="lastname" value={lastname} onChange={e=> onChange(e)} />
                </div>

                <div className="form-input">
                    <input className="input-field" type="email" placeholder="email address" name="email" value={email} onChange={e=> onChange(e)}/>
                </div>

                <div className="form-input">
                    <input className="input-field" type="password" placeholder="password" name="password" value={password} onChange={e=> onChange(e)} />
                </div>

                <button className="btn--primary--form btn--small" type="submit">Create Account</button>
                <p className="message">Already registered? <Link to="/signin">Sign In</Link></p>

            </div>
        </form>

    </div>
</Fragment>
    )
}
export default SignUp