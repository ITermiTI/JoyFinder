import React from 'react'
import AccountPageBox from '../components/AccountPageBox.js'
import EditAccountDetailsBox from '../components/EditAccountDetailsBox.js';

class AccountPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            render: 'view'
    }
    }

    handleClick(type){
        this.setState({render: type});
    }

    render(){
        if(this.state.render=='view') return (
            <div className="component-background">
                <div className="home-page-title-text">Your Account!</div>
                <button className="edit-details-button" onClick={this.handleClick.bind(this, 'edit')}>Edit details</button>
                <AccountPageBox/>
            </div>   
        );
        if(this.state.render=='edit') return(
            <div className="component-background">
            <div className="home-page-title-text">Edit your account</div>
            <button className="save-details-button" onClick={this.handleClick.bind(this, 'view')}>Save</button>
                <EditAccountDetailsBox/>
            </div>
        );
    }
}

export default AccountPage;