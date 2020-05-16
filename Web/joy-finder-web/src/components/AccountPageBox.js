import React from 'react'
import AccountStyle from '../styles/AccountStyle.css'
import { MdPerson, MdEmail, MdLocalPhone } from "react-icons/md";
import axios from 'axios'
import * as Const from '../static/const';

class AccountPageBox extends React.Component{

    render(){
        return(
            <div>
                <div className='account-icon'><MdPerson size='10rems'/></div>
                <div className='email-icon'><MdEmail size='10rems'/></div>
                <div className='phone-icon'><MdLocalPhone size='10rems'/></div>

                <div className='login'>{sessionStorage.loggedUser}</div>
                <div className='email'>{this.props.data.email}</div>
                <div className='phone'>{this.props.data.phoneNumber}</div>

                <div className='names' type='text'>{this.props.data.name+" "+this.props.data.surname}</div>

                <div className='profile-image'></div>

            </div>
        )
    };

}

export default AccountPageBox;