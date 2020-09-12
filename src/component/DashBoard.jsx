import React from 'react';
import '../scss/dashBoard.scss';
import NavBar from './NavBar';
import Drawer from './Drawer';

class DashBoard extends React.Component {

    render(){
        return(
            <div className="dashboard-wrapper">
                <Logout />
                <div className="dashboard-container">
                    <NavBar />
                </div>
                <div className="main-body">
                    <div className="drawer-container">
                        <Drawer />
                    </div>
                    <div className="add-notes">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(DashBoard);