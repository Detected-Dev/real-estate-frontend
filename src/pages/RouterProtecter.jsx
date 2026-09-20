import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

const RouterProtecter = ({allowedRoles}) => {
    const {user,loading} = useAuth();
    if(loading){
        return <div>Loading ...</div>
    }
    if(!user){
        console.log("REDIRECTING TO LOGIN");
        return <Navigate to="/login" replace/>;
    }
    if(!allowedRoles.includes(user.role)){
        if(user.role === 'admin')return <Navigate to="/admin" replace/>;
        if(user.role === 'agence')return <Navigate to="/agence" replace/>;
        if(user.role === 'user')return <Navigate to="/" replace/>;
    }
    return <Outlet/>
}

export default RouterProtecter