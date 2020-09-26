import React from 'react';
import '../scss/dashBoard.scss';
import NavBar from './NavBar';
import Drawer from './Drawer';
import Logout from './Logout';
import Note from "./Note";
import Bin from "./Bin";
import Archive from './Archive'
import { withRouter } from 'react-router-dom';
import ProtectedRoute from '../router/ProtectedRoute'
import {Route, Switch} from 'react-router-dom'

class DashBoard extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            isVisible: false
        }
    }

    handleLogoutContainer = () => {
        this.setState({isVisible: !this.state.isVisible})
    }

    render(){
        return(
            <div className="dashboard-wrapper">
                <Logout visibility={this.state.isVisible}  />
                <div className="dashboard-container">
                    <NavBar logout={this.handleLogoutContainer} />
                </div>
                <div className="main-body">
                    <div className="drawer-container">
                        <Drawer open={this.state.open} handleOpenClose={this.handleOpenClose} />
                    </div>
                    <div className="add-notes">
                        <Route path={"/dashboard/notes"}>
                            <Note />
                        </Route>
                        <Route path={"/dashboard/bin"}>
                            <Bin />
                        </Route>
                        <Route path={"/dashboard/archive"}>
                            <Archive />
                        </Route>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(DashBoard);