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
        <div className="d-flex">
            <div className="col-lg-6">
                <img src="https://i.ibb.co/yNZhfmv/undraw-Add-user-re-5oib.png" alt="" />
            </div>
            <div className="col-lg-6 py-5 my-5">
                <h1 style={{color:"#59B6F1"}} className="text-decoration-underline" >For More Info Signin Below</h1>
            <button className="btn-info rounded mt-5 p-1" onClick={handleGoogleLogin}><i className="fab fa-google me-2"></i>Login With Google</button>
             <h2>{user.displayName}</h2>
            </div>
        </div>
    );
};

export default Login;