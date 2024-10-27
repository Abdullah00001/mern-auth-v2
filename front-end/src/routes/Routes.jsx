import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Main from '../layouts/Main';
import Root from '../pages/Root';
import ProtectedComponent from '../components/Authentication/ProtectedComponent';
import Posts from '../pages/Posts';

export const Routes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Root />,
      },
      {
        path: '/post',
        element: (
          <ProtectedComponent>
            <Posts />
          </ProtectedComponent>
        ),
      },
    ],
  },
]);
