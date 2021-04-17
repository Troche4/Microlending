import React, { Fragment, useEffect } from 'react';
import "./signUp.css"
import {useState} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import Select from "react-select";

const SignUp = ({ setAuth }) => {

    const [inputs, setInputs] = useState({
        role_id: "",
        email: "",
        password: "",
        firstname: "",
        lastname: ""
    });
    const [loading,setLoading] = useState(true)
    const [roles,setRoles] = useState([])
    const options = roles.map((role) =>  { return { value: role.role_id, label: role.role_name }})

    useEffect( async () => {
        const response = await fetch("http://localhost:3080/api/roles" );
        const roles = await response.json();
        setRoles(roles);
        setLoading(false);
    }, []);




    const {role_id, email, password, firstname, lastname} = inputs;

    const onSelect = selectedOption => {
        setInputs({...inputs, ["role_id"] : selectedOption.value})
    }

    const onChange = (e) => {

        setInputs({...inputs, [e.target.name] : e.target.value})

    }


    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { role_id, email, password, firstname, lastname };
            console.log(body)
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
    { !loading && <div className="formContainerSignUp">
        <h2>Sign Up</h2>
        <form onSubmit={onSubmitForm} className="sign-up_form" >

            <div className="text-container">

                <Select
                    name="role_id"
                    onChange={onSelect}
                    options = {options} />

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

    </div>}
</Fragment>
    )
}
export default SignUp