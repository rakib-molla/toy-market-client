import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if(loading){
        return <progress className="progress w-56 mx-auto"></progress>
    }
    
    if(user){ 
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
}
export default PrivateRoute;