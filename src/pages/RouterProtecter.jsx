import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

const RouterProtecter = () => {
    const {user,loading} = useAuth();
    if(loading){
        return <div>Loading ...</div>
    }
    if(!user){
        console.log("REDIRECTING TO LOGIN");
        return <Navigate to="/login" replace/>;
    }
    return <Outlet/>
}

export default RouterProtecter