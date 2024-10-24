import { useContext } from 'react';
import { AuthContext } from '../contexts/Contexts';

const useAuth = () => {
  const useAuth = useContext(AuthContext);
  return useAuth;
};

export default useAuth;
