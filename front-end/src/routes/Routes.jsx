import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Main from '../layouts/Main';
import Root from '../pages/Root';

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
    ],
  },
]);
