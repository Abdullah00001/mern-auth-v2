import React from 'react';
import { AuthContext } from '../Contexts';

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
