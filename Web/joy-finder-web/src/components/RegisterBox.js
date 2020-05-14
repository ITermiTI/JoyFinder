import React from 'react';
import Fade from './Fade';
import RegisterStyle from '../styles/RegisterStyle.css'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import * as Const from '../static/const';
import { MdErrorOutline } from "react-icons/md";

class RegisterBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            values: {
                login: "",
                email: "",
                password: "",
                name: "",
                surname: "",
                phoneNumber: ""
                

            },
            badCredentails: false,
            registerSuccessful: false,
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
    async register(login, email, password, name, surname, phoneNumber){
        
        await axios.post(`${Const.API_URL}api/register`,{
            login: login,
            email: email,
            password: password,
            name: name,
            surname: surname,
            phoneNumber: phoneNumber
        });
    }
    handleSubmit =  (e) => {
        e.preventDefault();
        this.register(this.state.values.login, this.state.values.email, this.state.values.password, this.state.values.name, this.state.values.surname, this.state.values.phoneNumber).then((res)=>
        {
            this.setState({
                registerSuccessful: true,
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
        if (this.state.registerSuccessful === true) {
            return <Redirect to='/homepage' />
          }
        return (
        <div>    
            <div className="backgroung-box-style-r">
            {               
                this.state.badCredentails && 
                setTimeout(() => {
                    this.setState({
                        showPopup: false
                    })
                    clearTimeout(this)
                },10000),
                <Fade show={this.state.showPopup}>
                    <div className="invalid-credentials-backgroung-r">
                    <div className="invalid-credentials-icon-r"><MdErrorOutline size="5rems"/> </div>
                    <div className="invalid-credentials-text-r">Invalid credentials!</div>
                    </div>
                </Fade>
            }
                <form onSubmit={this.handleSubmit}>
                    <div className="text">Login:</div>
                    <input className="box" type="login" name="login" id="login" value={this.state.values.login} onChange={this.handleChange} required/>
                    <div className="text">Email:</div>
                    <input className="box" type="email" name="email" id="email" value={this.state.values.email} onChange={this.handleChange} required/>
                    <div className="text">Passsword:</div>
                    <input className="box" type="password" name="password" id="password" value={this.state.values.password} onChange={this.handleChange} required/>
                    <div className="text">First name:</div>
                    <input className="box" type="text" name="name" id="name" value={this.state.values.name} onChange={this.handleChange} required/>
                    <div className="text">Last name:</div>
                    <input className="box" type="text" name="surname" id="surname" value={this.state.values.surname} onChange={this.handleChange} required/>
                    <div className="text">Phone number:</div>
                    <input className="box" type="text" name="phoneNumber" id="phoneNumber" value={this.state.values.phoneNumber} onChange={this.handleChange} required/>
                
                    <button className="button-r" type="submit">Sign up</button>
                </form>
                <div className="account-text">Do you have an account? <Link to="/login">Sign in!</Link></div>
                
        </div >
        
    </div>
        
        )
    };
}

export default RegisterBox;