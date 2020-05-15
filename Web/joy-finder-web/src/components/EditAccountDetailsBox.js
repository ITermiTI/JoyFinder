import React from 'react'
import EditAccountDetailsStyle from '../styles/EditAccountDetailsStyle.css'
import { MdPerson, MdEmail, MdLocalPhone } from "react-icons/md";
import axios from 'axios'
import * as Const from '../static/const';

class EditAccountDetailsBox extends React.Component{

    state={
        user: 'error'

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
                <div className='account-icon-edit'><MdPerson size='10rems'/></div>
                <div className='email-icon-edit'><MdEmail size='10rems'/></div>
                <div className='phone-icon-edit'><MdLocalPhone size='10rems'/></div>

                <input className="login-box" type="text" value={sessionStorage.loggedUser} disabled="true"/>
                <input className="email-box" type="email" value={this.state.user.email}/>
                <input className="name-box" type="text" value={this.state.user.name}/>
                <input className="surname-box" type="text" value={this.state.user.surname}/>
                <input className="phone-box" type="tel" value={this.state.user.phoneNumber}/>


            </div>
        )
    };

}

export default EditAccountDetailsBox;