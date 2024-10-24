import React, { useState } from 'react';
import { AuthContext } from '../Contexts';
import SignupUtils from '../../utils/AuthUtils';
import DealyUtils from '../../utils/DealyUtils';

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const resetMessage = () => {
    setSuccessMessage(null);
    setErrorMessage(null);
  };
  const signup = async (username, password) => {
    setLoading(true);
    resetMessage()

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
  const authValues = {
    resetMessage,
    loading,
    successMessage,
    errorMessage,
    signup,
  };
  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
