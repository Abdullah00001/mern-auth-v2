import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoginComponent from '../components/Authentication/LoginComponent';

const Login = () => {
  return (
    <>
      <Helmet title='Login'></Helmet>
      <LoginComponent></LoginComponent>
    </>
  );
};

export default Login;
