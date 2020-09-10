import React from 'react'
import '../scss/signUp.scss'
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { withRouter } from 'react-router';
import UserAxiosService from '../service/UserAxiosService'

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',

            firstNameStatus: false,
            lastNameStatus: false,
            emailStatus: false,
            passwordStatus: false,
            confirmPasswordStatus: false,

            firstNameError: ' ',
            lastNameError: ' ',
            emailError: ' ',
            passwordError: ' ',
            confirmPasswordError: ' ',
        }
    }

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword })
    }

    handleChange = ({ target }, pattern, message) => {
        this.setState({ [target.name]: target.value }, () => {
            this.validation(target, pattern, message)
        })
    }

    validation = (target, pattern, message) => {
        this.setState({
            [target.name + "Status"]: true,
            [target.name + "Error"]: "Required *"
        })
        if( target.value.trim() !== '')
        {
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
    };

    confirmPasswordValidation(event) {
        this.setState({
            [event.target.name + "Status"]: true,
            [event.target.name + "Error"]: "Required *"
        })
        if(event.target.value.trim() !== '')
        {
            this.setState({ [event.target.name]: event.target.value })
            if (event.target.value !== this.state.password) {
                this.setState({
                    [event.target.name + "Status"]: true,
                    [event.target.name + "Error"]: "Password Not Match",
                });
            } else {
                this.setState({
                    [event.target.name + "Status"]: false,
                    [event.target.name + "Error"]: " ",
                });
            }
        }
    }

    handleSignIn = () => {
        this.props.history.push('/signin')
    }

    handleRegistration = () => {
        if (this.state.firstName.trim() === "")
        {
            this.setState({
                firstNameStatus: true,
                firstNameError: 'Required *'
            })
        }
        if (this.state.lastName.trim() === "")
        {
            this.setState({
                lastNameStatus: true,
                lastNameError: 'Required *'
            })
        }
        if (this.state.email.trim() === "") {
            this.setState({
                emailStatus: true,
                emailError: 'Required *'
            })
        }
        if (this.state.password.trim() === "") {
            this.setState({
                passwordStatus: true,
                passwordError: 'Required *'
            })
        }
        if (this.state.confirmPassword.trim() === "") {
            this.setState({
                confirmPasswordStatus: true,
                confirmPasswordError: 'Required *'
            })
        }
        if (this.state.firstName.trim() !== "" && this.state.lastName.trim() !== "" && this.state.email.trim() !== "" && this.state.password.trim() !== ""  && this.state.confirmPassword.trim() !== "") {
            if (this.state.firstNameStatus === false && this.state.lastNameStatus === false && this.state.emailStatus === false && this.state.passwordStatus === false && this.state.confirmPasswordStatus === false) {
                const data = {
                    "firstName": this.state.firstName,
                    "lastName": this.state.lastName,
                    "phoneNumber": "",
                    "imageUrl": "",
                    "service": "advance",
                    "email": this.state.email,
                    "cartId": "",
                    "password": this.state.password
                }
                new UserAxiosService().registeration(data).then((response) => {
                    console.log(response)
                }).catch((response) => {
                    console.log(response)
                })
            }
        }
    }

    render() {
        return (
            <div className="signup-wrapper">
                <div className="signup-main-container">
                    <div className="signup-container">
                        <div className="signup-page-container">
                            <div className="titles">
                                <div className="f">F</div>
                                <div className="u">u</div>
                                <div className="n">n</div>
                                <div className="d">d</div>
                                <div className="o">o</div>
                                <div className="oo">o</div>
                            </div>
                            <div className="signup-header">Create your Fundoo Account</div>
                            <div className="continue-line">Continue to Fundoo App</div>
                            <div className="textfield-wrapper">
                                <div className="firstname-textfield">
                                    <TextField id="outlined-basic" size="small" error={this.state.firstNameStatus} helperText={this.state.firstNameError} onChange={textEvent => this.handleChange(textEvent, "^.{3,50}$", "At least 3 character")} fullWidth label="First Name" required autoComplete="off" variant="outlined" name="firstName" />
                                </div>
                                <div className="lastname-textfield">
                                    <TextField id="outlined-basic" size="small" error={this.state.lastNameStatus} helperText={this.state.lastNameError} onChange={textEvent => this.handleChange(textEvent, "^.{3,50}$", "At least 3 character")} onBlur={textEvent => this.validation} fullWidth label="Last Name" required autoComplete="off" variant="outlined" name="lastName" />
                                </div>
                            </div>
                            <div className="email-textfield">
                                <div className="email-text">
                                    <TextField id="outlined-basic" size="small" error={this.state.emailStatus} helperText={this.state.emailError} onChange={textEvent => this.handleChange(textEvent, "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$", "Please enter valid email address")} autoComplete="off" required fullWidth label="Email" variant="outlined" name="email" />
                                </div>
                            </div>
                            <div className="password-container">
                                <div className="password-textfield">
                                    <div className="password-wrapper">
                                        <TextField id="outlined-basic" size="small" fullWidth error={this.state.passwordStatus} helperText={this.state.passwordError} onChange={textEvent => this.handleChange(textEvent, "^((?=[^@|#|&|%|$]*[@|&|#|%|$][^@|#|&|%|$]*$)*(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9#@$?]{8,})$", "At least 8 character")} required label="Password" type={this.state.showPassword ? 'text' : 'password'} variant="outlined" name="password" />
                                    </div>
                                    <div className="password-wrapper">
                                        <TextField id="outlined-basic" size="small" fullWidth error={this.state.confirmPasswordStatus} helperText={this.state.confirmPasswordError} onChange={textEvent => this.confirmPasswordValidation(textEvent)} required label="Confirm Password" type={this.state.showPassword ? 'text' : 'password'} variant="outlined" name="confirmPassword" />
                                    </div>
                                </div>
                                <div className="eye">
                                    {this.state.showPassword ? <Visibility onClick={this.handleClickShowPassword} /> : <VisibilityOff onClick={this.handleClickShowPassword} />}
                                </div>
                            </div>
                            <div className="button-link-container">
                                <div className="link" onClick={this.handleSignIn}>Sign in instead</div>
                                <div className="button"><button onClick={this.handleRegistration} className="next-button">Register</button></div>
                            </div>
                        </div>
                        <div className="signup-image-container">
                            <div className="image-container">
                                <img className="account-image" alt="No image found" src={require('../assets/account.svg')} />
                            </div>
                            <div className="text-container">
                                <div className="text">One account. All of Fundoo working for you.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SignUp);