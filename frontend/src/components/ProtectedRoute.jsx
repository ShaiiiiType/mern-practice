import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = () => {

    const token = localStorage.getItem("token");

    if (!token) return <Navigate to="/login" replace/>

    try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()){
            localStorage.removeItem("token");
            alert(err.message);
            return <Navigate to="/login" replace/>
        }
    } catch (err){
        alert(err.message);
        return <Navigate to="/login" replace/>
    }
    return (
        <Outlet/>
    )
}

export default ProtectedRoute