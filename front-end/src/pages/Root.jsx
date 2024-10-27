import { Helmet } from 'react-helmet-async';
import useAuth from '../hooks/useAuth';
import Home from '../components/Layout/Home';
import Landing from '../components/Layout/Landing';

const Root = () => {
  const { user } = useAuth();
  return (
    <>
      <Helmet title='Mern Authentication.V2' />
      {user ? <Home /> : <Landing />}
    </>
  );
};

export default Root;
