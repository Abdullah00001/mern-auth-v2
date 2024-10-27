import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ProtectedComponent = ({ children }) => {
  const { user } = useAuth();
  if (user) return children;
  return <Navigate to={'/login'} replace />;
};

export default ProtectedComponent;
