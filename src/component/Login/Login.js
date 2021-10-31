import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hook/useAuth';

const Login = () => {
    const {user , signInUsingGoogle,} = useAuth() || {};
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/planDetails';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(() => {
            history.push(redirect_uri);
        })
    }
    return (
        <div>
            <button className="btn-info" onClick={handleGoogleLogin}>Login With Google</button>
            {/* <button className="btn-info" onClick={handleLogOut}>Logout</button> */}
             <h2>{user.displayName}</h2>
        </div>
    );
};

export default Login;