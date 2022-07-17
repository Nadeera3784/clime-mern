// Authenticated Route
import {useContext} from 'react';
import {AppContext}  from '@/store/AppContext';
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const {state, dispatch} = useContext(AppContext);
    let location = useLocation();
    if (!state.auth_status) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }
    return children;
}

export default RequireAuth;