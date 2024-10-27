import React from 'react';
import { Link } from 'react-router-dom';
const UnauthenticateNav = () => {
  return (
    <>
      <li className='text-xl font-bold'>
        <Link to={'/signup'}>Signup</Link>
      </li>
      <li className='text-xl font-bold'>
        <Link to={'/login'}>Login</Link>
      </li>
    </>
  );
};

export default UnauthenticateNav;
