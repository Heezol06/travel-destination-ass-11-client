import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hook/useAuth';

const Login = () => {
    const {user , signInUsingGoogle, logOut, isLoading} = useAuth() || {};
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    const handleLogOut = () =>{
        logOut()
    }
    return (
        <div>
            <button className="btn-info" onClick={handleGoogleLogin}>Login With Google</button>
            <button className="btn-info" onClick={handleLogOut}>Logout</button>
        </div>
    );
};

export default Login;