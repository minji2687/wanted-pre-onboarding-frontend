import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function AuthRoute () {
    const auth = localStorage.getItem('access_token')
    return auth ? <Outlet /> : <Navigate to="/signin" />;
}

export default AuthRoute;