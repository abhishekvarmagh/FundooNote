import React from 'react';
import '../scss/logout.scss';
import { Avatar } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { withRouter } from 'react-router';

class Logout extends React.Component {

    handleSignOut = () => {
        localStorage.removeItem('token')
        this.props.history.push('/signin');
    }

    render() {
        return(
            <div className="logout-container" style={this.props.visibility ? {visibility:"visible"} : {visibility:"hidden"}}>
                <div className="account-details">
                    <div className="details-container">
                        <div className="user-details">
                            <div className="avatar-chip">
                                <div className="avatar-container">
                                    <div className="avatar-wrapper">
                                        <Avatar className="user-logo">A</Avatar>
                                    </div>
                                </div>
                                <div className="user-container">
                                    <div className="username">sjadnvasnbd</div>
                                    <div className="email-id">asdahgdh</div>
                                </div>
                            </div>
                            <div className="chip-container">
                            <Chip label="Manage your Fundoo Accounts" variant="outlined" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="other-account">
                    <div className="other-container">
                        <div className="account-holder">
                            <div className="person-add">
                                <PersonAddOutlinedIcon />
                            </div>
                            <div className="add-label">
                                Add Another Account
                            </div>
                        </div>
                    </div>
                </div>
                <div className="signout-button">
                    <button className="signout" onClick={this.handleSignOut}>Sign out</button>
                </div>
                <div className="privacy-link-container">
                    <div className="link-container">
                        <div className="privacy">Privacy Policy</div>
                        <div className="dot"><div className="point"></div></div>
                        <div className="terms">Terms of Service</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Logout);