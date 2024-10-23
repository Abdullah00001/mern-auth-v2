import React from 'react';
import { Helmet } from 'react-helmet-async';
import SignupComponent  from '../components/Authentication/SignupComponent';

const Signup = () => {
  return (
    <>
      <Helmet title='Signup'></Helmet>
      <SignupComponent></SignupComponent>
    </>
  );
};

export default Signup;
