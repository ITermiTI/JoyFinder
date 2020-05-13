import React from 'react';
import Fade from './Fade';
import { withRouter } from 'react-router'
import LoginPageStyle from '../styles/LoginStyle.css'
import { Link, Redirect } from 'react-router-dom';
import * as Constants from '../static/const';
import AuthorizationService, { logged_userid } from '../services/AuthorizationService';
import Axios from 'axios';
import Login from '../pages/Login';
import { MdErrorOutline } from "react-icons/md";


class LoginBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            values: {
                login: "",
                password: ""
            },
            badCredentails: false,
            loginSuccessful: false,
            showPopup: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        AuthorizationService.executeLogin(this.state.values.login,this.state.values.password).then((res) =>
        {
            AuthorizationService.registerSuccessfulLogin(this.state.values.login,this.state.values.password)                 
            this.setState({
                loginSuccessful: true,
                badCredentails: false,
                showPopup: false
            })
        })
        .catch(() => {
            this.setState({
                badCredentails: true,
                showPopup: true
            })
        });

        

    }
    render() {
        if (this.state.loginSuccessful === true) {
            return <Redirect to='/homepage' />
          }
        return (
        <div className="login-box-style">
            {               
                this.state.badCredentails && 
                setTimeout(() => {
                    this.setState({
                        showPopup: false
                    })
                    clearTimeout(this)
                },10000),
                <Fade show={this.state.showPopup}>
                    <div className="invalid-credentials-backgroung">
                    <div className="invalid-credentials-icon"><MdErrorOutline size="5rems"/> </div>
                    <div className="invalid-credentials-text">Invalid credentials!</div>
                    </div>
                </Fade>
            }
            <form onSubmit={this.handleSubmit}>
                <div className="login-form-label login-text">Login: </div>
                <input className="login-input" type="login" name="login" id="login" value={this.state.values.login}
                 onChange={this.handleChange} required/>
                 <div className="login-form-label password-text">Password: </div>
                 <input className="password-input" type="password" name="password" id="password" value={this.state.values.password}
                 onChange={this.handleChange} required/>
                 <button className="button-sign-in" type="submit">Sign in</button>
            </form>
            <div className="no-account-text">Don't have an account <Link to="/register">
                Create a new account!
                </Link></div>
            
        </div>
        )
    };
}

export default LoginBox;