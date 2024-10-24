import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './contexts/Providers/AuthProvider';

function App() {
  return (
    <>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={Routes}></RouterProvider>
        </AuthProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
