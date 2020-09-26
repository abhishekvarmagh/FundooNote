import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React from "react";
import SignIn from '../component/SignIn';
import SignUp from '../component/SignUp';
import ChangePassword from '../component/ChangePassword';
import ForgotPassword from '../component/ForgotPassword';
import DashBoard from '../component/DashBoard';
import ProtectedRoute from './ProtectedRoute';

class RouterConfiguration extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path={"/signin"} exact component={SignIn} />
                    <Route path={"/signup"} exact component={SignUp} />
                    <Route path={"/resetpassword/:token"} excat component={ChangePassword} />
                    <Route path={"/forgotpassword"} exact component={ForgotPassword} />
                    <ProtectedRoute path={"/dashboard"} component={DashBoard} />
                    </Switch>
            </BrowserRouter>
        )
    }
}

export default RouterConfiguration;