import React from 'react';
import { Redirect } from 'react-router-dom'

class ProtectedRoute extends React.Component {

    render(){
        const Component = this.props.component;
        const isAuthenticated = localStorage.getItem('token');

        return isAuthenticated !== null ? (<Component />) : (<Redirect to={{ pathname: '/signin' }} />)
    }
}

export default ProtectedRoute;