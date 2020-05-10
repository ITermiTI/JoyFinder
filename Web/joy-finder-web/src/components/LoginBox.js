import React from 'react';
import MainPageStyle from '../styles/LoginStyle.css'
import { Link } from 'react-router-dom';

class LoginBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            values: {
                login: "",
                password: ""
            },
            isSubmitting: false,
            badCredentails: false
        }
    }

    handleChange = (e) => {
        this.setState({
            values: {
                ...this.state.values, [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit =  (e) => {
        e.preventDefault();
        console.log(this.state.values)
    }
    render() {
        return (
        <div className="login-box-style">
            <form onSubmit={this.handleSubmit}>
                <div className="login-form-label login-text">Login: </div>
                <input className="login-input" type="login" name="login" id="login" value={this.state.values.login}
                 onChange={this.handleChange} required/>
                 <div className="login-form-label password-text">Password: </div>
                 <input className="password-input" type="password" name="password" id="password" value={this.state.values.password}
                 onChange={this.handleChange} required/>
                 <button className="button-sign-in" type="submit">Sign in</button>
            </form>
            <div className="no-account-text">Don't have an account <Link to="/register">Create a new account!</Link></div>
            
        </div>
        )
    };
}

export default LoginBox;