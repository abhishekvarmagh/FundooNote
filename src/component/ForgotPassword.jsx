import React from 'react';
import '../scss/forgotPassword.scss';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import UserAxiosService from '../service/UserAxiosService';

class ForgotPassword extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
    }

    handleClick = () => {
        const data = {
            "email": this.props.location.state
        }
        new UserAxiosService().forgotPassword(data).then((response) => {
            console.log(response)
        })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="forgot-main-container">
                    <div className="upper-layer">
                        <div className="title">
                            <div className="f">F</div>
                            <div className="u">u</div>
                            <div className="n">n</div>
                            <div className="d">d</div>
                            <div className="o">o</div>
                            <div className="oo">o</div>
                        </div>
                        <div className="page-title-container">
                            <div className="header">Account Recovery</div>
                            <div className="forgot-header">
                                <div className="forgot-line">This helps to show that this account really belongs to you</div>
                            </div>
                            <div className="chip">
                                <Chip
                                    avatar={<Avatar>A</Avatar>}
                                    label={this.props.location.state}
                                    variant="outlined"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="middle-layer">
                        <img width="100%" alt="No image found" src={require('../assets/recovery.JPG')} />
                    </div>
                    <div className="bottom-layer">
                        <div className="notification-line">Fundoo will sent a notification to your email. Tap <b>Yes</b> to continue</div>
                        <div className="tap-yes">
                            <button className="yes-button" onClick={this.handleClick}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgotPassword;