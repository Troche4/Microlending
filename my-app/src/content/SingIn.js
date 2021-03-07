import React, { Component } from 'react';
import "./signIn.css"


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );


    const c = document.getElementsByName("email")[0].value
    const d = document.getElementsByName("password")[0].value


    if ((c == null || c === "") || (d == null || d === "")){
        return false;
    }
    return valid;
}

class SignIn extends Component {


    constructor(props) {
        super(props);
        this.state = {

            email: null,
            password: null,

            errors: {
                email: '',
                password: '',

            }
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
            alert('Valid Form')
        }else{
            alert('Invalid Form')
        }
    }
    handleChange = (event) => {
        event.preventDefault();
        const { email, value } = event.target;
        let errors = this.state.errors;

        switch (email) {
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 6
                        ? 'Your password must be at least 6 characters long!'
                        : '';
                break;

            default:
                break;
        }

        this.setState({errors, [email]: value});
    }


    render() {
        const {errors} = this.state;
        return (

            <div className="formContainer">

                <form className="sign-up_form" onSubmit={this.handleSubmit} noValidate>
                    <div className="text-container">

                        <div className="form-input">
                            <input className="input-field"  type="email" placeholder="email address" name="email" onChange={this.handleChange} required/>

                        </div>

                        <div className="form-input">

                            <input className="input-field" type="password" placeholder="password" name="password" onChange={this.handleChange} required/>

                        </div>

                        <button className="btn--primary--form btn--small" type="submit">Login!</button>


                    </div>
                </form>

            </div>
        )
    }
}
export default SignIn