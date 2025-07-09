import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute(){
    const isAuth = true;
    return isAuth? <Outlet /> : <Navigate to="/login" /> ;
}

export default ProtectedRoute;