import React from 'react';
import '../scss/signIn.scss';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router';
import UserAxiosService from '../service/UserAxiosService'
import CustomSnackBar from './CustomSnackBar'

class SignIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            showPassword: false,
            nextPage: false,
            emailStatus: false,
            emailError: ' ',
            passwordStatus: false,
            passwordError: ' ',
            alertShow: false,
            alertResponse: ""
        }
    }

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword })
    }

    handleChange = ({ target }, pattern, message) => {
        this.setState({ [target.name]: target.value },
            () => { this.validation(target, pattern, message) }
        );
    }

    handleEmail = () => {
        if (this.state.email.trim() === "") {
            this.setState({
                emailStatus: true,
                emailError: 'Required *'
            })
        }

        if (this.state.email.trim() !== "" && !this.state.emailStatus) {
            this.setState({ nextPage: !this.state.nextPage })
        }
    }

    handleSignUp = () => {
        this.props.history.push('/signup')
    }

    handleForgot = () => {
        this.props.history.push('/forgotpassword', this.state.email)
    }

    validation = (target, pattern, message) => {
        this.setState({
            [target.name + "Status"]: true,
            [target.name + "Error"]: "Required *"
        })
        if (target.value.trim() !== '') {
            if (target.value.match(pattern)) {
                this.setState({
                    [target.name + "Status"]: false,
                    [target.name + "Error"]: " "
                })
            } else {
                this.setState({
                    [target.name + "Status"]: true,
                    [target.name + "Error"]: message
                })
            }
        }
    }

    handleSignIn = () => {
        if (this.state.password.trim() === "") {
            this.setState({
                passwordStatus: true,
                passwordError: 'Required *'
            })
        }

        if (this.state.password.trim() !== "" && !this.state.passwordStatus) {
            const data = {
                "email": this.state.email,
                "password": this.state.password
            }
            UserAxiosService.login(data).then((response) => {
                console.log(response.data)
                localStorage.setItem('token', response.data.id)
                this.setState({
                    severity: "success",
                    alertShow: true,
                    alertResponse: "Login Successfull"
                })
                this.props.history.push('/dashboard')
            }).catch((response) => {
                this.setState({
                    severity: "error",
                    alertShow: true,
                    alertResponse: "Login Failed"
                })
            })
        }
    }

    closeAlertBox = () => {
        this.setState({ alertShow: false });
    };

    render() {
        return (
            <div className="wrapper">
                <CustomSnackBar alertShow={this.state.alertShow}
                    severity={this.state.severity}
                    alertResponse={this.state.alertResponse}
                    closeAlertBox={this.closeAlertBox} />
                <div className="container">
                    <div className="signin-container">
                        <div className="title">
                            <div className="f">F</div>
                            <div className="u">u</div>
                            <div className="n">n</div>
                            <div className="d">d</div>
                            <div className="o">o</div>
                            <div className="oo">o</div>
                        </div>
                        <div className="page-title-container">
                            <div className="header">{this.state.nextPage ? 'Welcome' : 'Sign In'}</div>
                            <div className="header-line">
                                {this.state.nextPage ?
                                    <Chip
                                        avatar={<Avatar>A</Avatar>}
                                        label={this.state.email}
                                        variant="outlined"
                                    />
                                    :
                                    'to continue to fundoo'
                                }
                            </div>
                        </div>
                        <div className="textfield-container">
                            {this.state.nextPage ?
                                <TextField id="outlined-basic" type={this.state.showPassword ? 'text' : 'password'} error={this.state.passwordStatus} value={this.state.password} helperText={this.state.passwordError} onChange={textEvent => this.handleChange(textEvent, "^((?=[^@|#|&|%|$]*[@|&|#|%|$][^@|#|&|%|$]*$)*(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9#@$?]{8,})$", "Please enter valid password")} name="password" autoComplete="off" fullWidth label="Password" variant="outlined"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={this.handleClickShowPassword}
                                                    edge="end">
                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                :
                                <TextField id="outlined-basic" value={this.state.email} error={this.state.emailStatus} helperText={this.state.emailError} onChange={textEvent => this.handleChange(textEvent, "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$", "Please enter valid email address")} name="email" autoComplete="off" fullWidth label="Email" variant="outlined" />
                            }
                        </div>
                        <div className="button-link-container">
                            <div className="link" onClick={this.state.nextPage ? this.handleForgot : this.handleSignUp}>{this.state.nextPage ? 'Forgot Password?' : 'Create Account'}</div>
                            <div className="button"><button className="next-button" onClick={this.state.nextPage ? this.handleSignIn : this.handleEmail}>Next</button></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SignIn);