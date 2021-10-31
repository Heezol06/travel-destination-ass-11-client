import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from './../Hook/useAuth';

const PrivetRoute = ({children , ...rest}) => {
    const {user , isLoading} =useAuth()
  if (isLoading) {
    return <Spinner animation="border" variant="info" />
  }
    return (
        <div>
            <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivetRoute;