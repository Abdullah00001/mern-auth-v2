import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Logout = () => {
  const { Logout } = useAuth();
  const [logout, setLogout] = useState(null);
  const handleLogout = () => {
    Logout();
    setLogout(true);
  };
  if (logout) {
    return <Navigate to={'/login'} replace />;
  }
  return (
    <li onClick={handleLogout} className='text-xl font-bold cursor-pointer'>
      Logout
    </li>
  );
};

export default Logout;
