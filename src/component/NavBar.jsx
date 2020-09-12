import React from 'react';
import '../scss/navBar.scss';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class NavBar extends React.Component {

    render(){
        return(
            <div className="navbar-container">
                <div className="navbar-content">
                    <div className="nav-left">
                        <div className="menu-icon"><MenuIcon /></div>
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
                        <div className="account-icon">
                            <AccountCircleIcon className="account" /> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;