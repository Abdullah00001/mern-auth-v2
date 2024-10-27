import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Small Components/Logout';
const AuthenticateNav = () => {
  return (
    <>
      <li className='text-xl font-bold'>
        <Link to={'/'}>Home</Link>
      </li>
      <li className='text-xl font-bold'>
        <Link to={'/post'}>Post</Link>
      </li>
      <Logout />
    </>
  );
};

export default AuthenticateNav;
