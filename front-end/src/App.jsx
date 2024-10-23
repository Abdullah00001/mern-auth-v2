import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './routes/Routes';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={Routes} />
      </HelmetProvider>
    </>
  );
}

export default App;
