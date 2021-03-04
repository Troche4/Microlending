import React, { Component } from 'react';
import "./signUp.css"
import "../components/button.css"
class SignUp extends Component {
    render() {
        return (

            <div className="formContainer">

                <div className="sign-up_form">
                    <div className="text-container">
                        <div className="form-input">
                            <input className="input-field" type="text" placeholder="first name"/>
                        </div>

                        <div className="form-input">
                            <input className="input-field" type="text" placeholder="last name"/>
                        </div>

                        <div className="form-input">
                            <input className="input-field"  type="text" placeholder="email address"/>
                        </div>

                        <div className="form-input">
                            <input className="input-field" type="password" placeholder="password"/>
                        </div>

                        <div className="form-input">
                            <input className="input-field" type="password" placeholder="verify password"/>
                        </div>

                        <button className="btn--primary--form btn--small" type="submit">Create Account</button>
                        <p className="message">Already registered? <a href="#">Sign In</a></p>

                    </div>
                </div>

            </div>
        )
    }
}
export default SignUp