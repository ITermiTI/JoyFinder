import React from 'react'
import AccountStyle from '../styles/AccountStyle.css'
import { MdPerson, MdEmail, MdLocalPhone } from "react-icons/md";
import axios from 'axios'
import * as Const from '../static/const';

class AccountPageBox extends React.Component{

    constructor(){
        super();
        this.state = {
            user: '',
    }
    }

    componentDidMount() {
        axios.get(`${Const.API_URL}api/user/1`  
            )
          .then(res => {
            const user = res.data;
            this.setState( {user} );
          })
      }


    render(){
        return(
            <div>
                <div className='account-icon'><MdPerson size='10rems'/></div>
                <div className='email-icon'><MdEmail size='10rems'/></div>
                <div className='phone-icon'><MdLocalPhone size='10rems'/></div>

                <div className='login'>{sessionStorage.loggedUser}</div>
                <div className='email'>{this.state.user.email}</div>
                <div className='phone'>{this.state.user.phoneNumber}</div>

                <div className='names' type='text'>{this.state.user.name+" "+this.state.user.surname}</div>

                <div className='profile-image'></div>

            </div>
        )
    };

}

export default AccountPageBox;