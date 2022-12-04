import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useSeller from '../../../../Hooks/useSeller';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner'



const WorkersRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isSeller ,isSellerLoading] = useSeller(user?.email);
    const location = useLocation();
    if(loading || isSellerLoading){
      return <Spinner></Spinner>
    }
    if(user && isSeller){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default WorkersRoutes;