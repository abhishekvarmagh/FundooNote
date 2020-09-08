import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React from "react";
import SignIn from '../component/SignIn'

class RouterConfiguration extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path={"/signin"} exact component={SignIn} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RouterConfiguration;