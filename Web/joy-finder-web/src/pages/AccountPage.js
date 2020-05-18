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
            phoneNumber: '',
            password: ''
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
        axios.put(`${Const.API_URL}api/user/${sessionStorage.loggedID}`, {
            login: sessionStorage.loggedUser,
            phoneNumber: this.state.phoneNumber,
            name: this.state.name,
            surname: this.state.surname,
            password: this.state.password
        }).then(
            res => {
                console.log(res.data)
            })

        this.setState({render: 'view'});
    }

    handleEditDetails(){
        axios.put(`${Const.API_URL}api/user/${sessionStorage.loggedID}`, {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber
        }).then(
            res => {
                console.log(res.data)
            })

        this.props.updateState('name', this.state.name)
        this.props.updateState('surname', this.state.surname)

        this.setState({render: 'view'});
    }

    componentDidMount() {
        axios.get(`${Const.API_URL}api/user/${sessionStorage.loggedID}`  
            )
          .then(res => {
            let user = res.data;
            this.setState({name: user.name})
            this.setState({surname: user.surname})
            this.setState({email: user.email})
            this.setState({phoneNumber: user.phoneNumber})
          })
      }

    render(){
        if(this.state.render=='view') return (
            <div className="component-background">
                <div className="home-page-title-text">Your Account!</div>
                <button className="edit-details-button" onClick={this.handleClick.bind(this, 'edit')}>Edit details</button>
                <button className="change-password-button" onClick={this.handleClick.bind(this, 'change')}>Change password</button>
                <AccountPageBox data={this.state}/>
            </div>   
        );
        if(this.state.render=='edit') return(
            <div className="component-background">
            <div className="home-page-title-text">Edit your account</div>
            <button className="save-details-button" onClick={this.handleEditDetails.bind(this)}>Save</button>
            <button className="cancel-edit-button" onClick={this.handleClick.bind(this, 'view')}>Cancel</button>
                <EditAccountDetailsBox data={this.state} updateState={this.updateState}/>
            </div>
        );
        if(this.state.render=='change') return(
            <div className="component-background">
            <div className="home-page-title-text">Change your password</div>
            <button className="submit-button" onClick={this.handleChangePassword.bind(this)}>Submit</button>
            <button className="cancel-change-button" onClick={this.handleClick.bind(this, 'view')}>Cancel</button>
                <ChangePasswordBox data={this.state} updateState={this.updateState}/>
            </div>
        );
    }
}

export default AccountPage;