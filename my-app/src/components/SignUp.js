import React, { Fragment } from 'react';
import "./signUp.css"
import {useState} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";


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
            const body = { email, password, firstname };
            const response = await fetch(
                "http://localhost:3080/authentication/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );
            const parseRes = await response.json();

            if (parseRes.jwtToken) {
                localStorage.setItem("token", parseRes.jwtToken);
                setAuth(true);
                toast.success("Registered Successfully");
            } else {
                setAuth(false);
                toast.error(parseRes);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
<Fragment>
    <div className="formContainerSignUp">
        <h2>Sign Up</h2>
        <form onSubmit={onSubmitForm} className="sign-up_form" >

            <div className="text-container">

                <div className="form-input">
                    <select className="input-field" type="text" placeholder="role" name="role"  onChange={e=> onChange(e)}>
                    <option>Banker</option>
                    <option>Borrower</option>
                    </select>
                </div>
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