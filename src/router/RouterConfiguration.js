import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React from "react";
import SignIn from '../component/SignIn'
import SignUp from '../component/SignUp'
import ForgotPassword from '../component/ForgotPassword'

class RouterConfiguration extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path={"/signin"} exact component={SignIn} />
                    <Route path={"/signup"} exact component={SignUp} />
                    <Route path={"/forgotpassword"} exact component={ForgotPassword} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RouterConfiguration;