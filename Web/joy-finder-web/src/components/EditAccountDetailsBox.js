import React from 'react'
import EditAccountDetailsStyle from '../styles/EditAccountDetailsStyle.css'
import { MdPerson, MdEmail, MdLocalPhone } from "react-icons/md";
import axios from 'axios'
import * as Const from '../static/const';

class EditAccountDetailsBox extends React.Component{

    componentDidMount() {
        axios.get(`${Const.API_URL}api/user/1`  
            )
          .then(res => {
            const user = res.data;
            this.props.updateState('name', user.name)
            this.props.updateState('surname', user.surname)
            this.props.updateState('email', user.email)
            this.props.updateState('phoneNumber', user.phoneNumber)
          })
      }

      handleChange = (e) => {
        const {value, name} = e.target;
        this.props.updateState(name,value);
      }

    render(){
        return(
            <div>
                <div className='account-icon-edit'><MdPerson size='10rems'/></div>
                <div className='email-icon-edit'><MdEmail size='10rems'/></div>
                <div className='phone-icon-edit'><MdLocalPhone size='10rems'/></div>

                <input className="login-box" type="text" value={sessionStorage.loggedUser} disabled="true"/>
                <input className="email-box" name="email" type="email" value={this.props.data.email} onChange={this.handleChange}/>
                <input className="name-box" name="name" type="text" value={this.props.data.name} onChange={this.handleChange}/>
                <input className="surname-box" name="surname" type="text" value={this.props.data.surname} onChange={this.handleChange}/>
                <input className="phone-box" name="phoneNumber" type="tel" value={this.props.data.phoneNumber} onChange={this.handleChange}/>

            </div>
        )
    };

}

export default EditAccountDetailsBox;