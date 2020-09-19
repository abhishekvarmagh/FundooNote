import React from 'react';
import '../scss/navBar.scss';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux';
import { openDrawer, closeDrawer } from  '../redux/action/DrawerAction'

class NavBar extends React.Component {

    handleChange = () => {
        if(this.props.visible === false){
            this.props.openDrawer();
        } else {
            this.props.closeDrawer();
        }
        
    }

    handleLogout = () => {
        this.props.logout();
    }

    render(){
        return(
            <div className="navbar-container">
                <div className="navbar-content">
                    <div className="nav-left">
                        <div className="menu-icon" onClick={this.handleChange}><MenuIcon /></div>
                        <div className="logo">
                            <img className="logo-image" alt="Image Not found" src={require('../assets/keep.png')} />
                        </div>
                        <div className="logo-title">
                            <div className="logo-tile-container">Fundoo</div>
                        </div>
                    </div>
                    <div className="nav-middle">
                        <div className="search-bar-container">
                            <div className="search-icon">
                                <SearchIcon className="search" />
                            </div>
                            <div className="search-textfield">
                                <input className="field" type="text" placeholder="Search"/>
                            </div>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="account-icon" onClick={this.handleLogout}>
                            <AccountCircleIcon className="account" /> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapToStateProps = state => {
    return {
        visible: state.drawer.visible,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openDrawer: ()=> dispatch(openDrawer()),
        closeDrawer: ()=> dispatch(closeDrawer()),
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(NavBar);