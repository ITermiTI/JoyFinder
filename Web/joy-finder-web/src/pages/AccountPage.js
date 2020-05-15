import React from 'react'
import AccountPageBox from '../components/AccountPageBox.js'
import EditAccountDetailsBox from '../components/EditAccountDetailsBox.js'
import ChangePasswordBox from '../components/ChangePasswordBox.js'
import axios from 'axios'
import * as Const from '../static/const';

class AccountPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            render: 'view',
            email: '',
            name: '',
            surname: '',
            phoneNumber: ''
        }
        this.updateState = this.updateState
    }

    updateState = (name, value) => {
        this.setState({[name]: value})
    }

    handleClick(type){
       this.setState({render: type});
    }

    handleChangePassword(){
        this.setState({render: 'view'});
    }

    handleEditDetails(){

        axios.put(`${Const.API_URL}api/user/1`, {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber
        }).then(
            res => {
                console.log(res.data)
            })

        this.setState({render: 'view'});
    }

    render(){
        if(this.state.render=='view') return (
            <div className="component-background">
                <div className="home-page-title-text">Your Account!</div>
                <button className="edit-details-button" onClick={this.handleClick.bind(this, 'edit')}>Edit details</button>
                <button className="change-password-button" onClick={this.handleClick.bind(this, 'change')}>Change password</button>
                <AccountPageBox/>
            </div>   
        );
        if(this.state.render=='edit') return(
            <div className="component-background">
            <div className="home-page-title-text">Edit your account</div>
            <button className="save-details-button" onClick={this.handleEditDetails.bind(this)}>Save</button>
                <EditAccountDetailsBox data={this.state} updateState={this.updateState}/>
            </div>
        );
        if(this.state.render=='change') return(
            <div className="component-background">
            <div className="home-page-title-text">Change your password</div>
            <button className="submit-button" onClick={this.handleClick.bind(this, 'view')}>Submit</button>
                <ChangePasswordBox/>
            </div>
        );
    }
}

export default AccountPage;