import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRouters = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <span>Loading..</span>
    }
    if(user && user.uid){
        return children
    }
    return <Navigate to="/login"></Navigate>

};

export default PrivateRouters;