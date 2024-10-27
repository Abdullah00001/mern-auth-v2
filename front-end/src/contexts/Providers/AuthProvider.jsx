import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Contexts';
import DealyUtils from '../../utils/DealyUtils';
import {
  CheckAuth,
  LogoutUtils,
  RefreshTokens,
  SigninUtils,
  SignupUtils,
} from '../../utils/AuthUtils';

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);
  const resetMessage = () => {
    setSuccessMessage(null);
    setErrorMessage(null);
  };
  const signup = async (username, password) => {
    setLoading(true);
    resetMessage();

    const data = { username, password };
    await DealyUtils(2000);
    try {
      const response = await SignupUtils(data);
      const responseData = response.data;
      if (responseData.status === 'success') {
        setSuccessMessage('Signup Successful');
      }
    } catch (error) {
      console.error(error.response);
      if (error.response) {
        const status = error.response.status;
        const responseData = error.response.data;
        if (responseData.status === 'error') {
          switch (status) {
            case 500:
              setErrorMessage('Signup Failed.Please Try Agein Latter');
              break;
            case 409:
              setErrorMessage('User With This username Already Exist');
              break;
            case 400:
              setErrorMessage('Please Fill Required Fields');
              break;
            default:
              setErrorMessage('An unexpected error occurred.');
              break;
          }
        } else {
          setErrorMessage('An unexpected error occurred.');
        }
      } else {
        setErrorMessage('Signup Failed Due To Network Error');
      }
    } finally {
      setLoading(false);
    }
  };
  const signin = async (username, password) => {
    setLoading(true);
    resetMessage();
    const data = { username, password };
    try {
      const response = await SigninUtils(data);
      const statusMessage = response.data.status;
      if (statusMessage === 'success') {
        setUser(true);
        setSuccessMessage('Login Successful');
      }
    } catch (error) {
      console.error(error.response);
      if (error.response) {
        const statusMessage = error.response.data.status;
        const statusCode = error.response.status;
        if (statusMessage === 'error') {
          switch (statusCode) {
            case 401:
              setErrorMessage('Incorrect Password');
              break;
            case 404:
              setErrorMessage('User With This User Name Not Found');
              break;
            case 500:
              setErrorMessage('Login Failed.Please Try Agein Latter!');
              break;
            default:
              setErrorMessage('An unexpected error occurred.');
              break;
          }
        } else {
          setErrorMessage('An unexpected error occurred.');
        }
      } else {
        setErrorMessage('Login Failed.Due To Network.Please Try Again😴');
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const auth = async () => {
      try {
        const response = await CheckAuth();
        const status = response.data.status;
        if (status === 'success') {
          setUser(true);
        }
      } catch (error) {
        console.error(error);
        if (error.response) {
          const statusMessage = error.response.data.status;
          const statusCode = error.response.status;
          if (statusMessage === 'error' && statusCode === 401) {
            try {
              const response = await RefreshTokens();
              const refreshStatus = response.data.status;
              if (refreshStatus === 'success') {
                setUser(true);
              }
            } catch (error) {
              setUser(false);
            }
          }
        }
      }
    };
    auth();
  }, []);
  const Logout = async () => {
    try {
      const response = await LogoutUtils();
      const status = response.data.status;
      if (status === 'success') {
        return true;
      }
    } catch (error) {
      return false;
    }
  };
  const authValues = {
    resetMessage,
    loading,
    successMessage,
    errorMessage,
    signup,
    signin,
    user,
    Logout,
  };
  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
