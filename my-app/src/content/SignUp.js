import React, { Component } from 'react';
import "./signUp.css"
import "../components/button.css"



const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class SignUp extends Component {


    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            password2: null,
            errors: {
                firstName: '',
                lastName:'',
                email: '',
                password: '',
                password2:''
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'firstName':
                errors.firstName =
                    value.length < 1
                        ? 'A first name is required!'
                        : '';
                break;
            case 'lastName':
                errors.lastName =
                    value.length < 1
                        ? 'A last name is required!'
                        : '';
                break;
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
            case 'password2':
                errors.password2 =
                    value !== document.getElementsByName("password")[0].value
                        ? 'Your passwords do not match!'
                        : '';
                console.log(value.password)
                break;
            default:
                break;
        }

        this.setState({errors, [name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
            alert('Valid Form')
        }else{
            alert('Invalid Form')
        }
    }
    render() {
        const {errors} = this.state;
        return (

            <div className="formContainer">

                <form className="sign-up_form" onSubmit={this.handleSubmit} noValidate>
                    <div className="text-container">
                        <div className="form-input">
                            <input className="input-field" type="text" placeholder="first name" name="firstName" onChange={this.handleChange} formNoValidate/>
                            {errors.firstName.length > 0 &&
                            <span className='error'>{errors.firstName}</span>}
                        </div>

                        <div className="form-input">
                            <input className="input-field" type="text" placeholder="last name" name="lastName" onChange={this.handleChange} formNoValidate/>
                            {errors.lastName.length > 0 && <span className='error'>{errors.lastName}</span>}
                        </div>

                        <div className="form-input">
                            <input className="input-field"  type="text" placeholder="email address" name="email" onChange={this.handleChange} formNoValidate/>
                            {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                        </div>

                        <div className="form-input">

                            <input className="input-field" type="password" placeholder="password" name="password" onChange={this.handleChange} formNoValidate/>
                            {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                        </div>
                        <div className="form-input">
                            <input className="input-field" type="password" placeholder="confirm password" name="password2" onChange={this.handleChange} formNoValidate/>
                            {errors.password2.length > 0 && <span className='error'>{errors.password2}</span>}
                        </div>

                        <button className="btn--primary--form btn--small" type="submit">Create Account</button>
                        <p className="message">Already registered? <a href="#">Sign In</a></p>

                    </div>
                </form>

            </div>
        )
    }
}
export default SignUp