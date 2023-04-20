import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../components/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   
   const {user,loader} = useContext(AuthContext)
   const location =useLocation()
   
  if(loader ) {

    return <div className='text-center'><progress className="progress w-56"></progress></div>
  }

   if(user ){
    return children ;
   }
    return <Navigate to = '/login' state ={{from:location}} replace  ></Navigate>;
};

export default PrivateRoute;