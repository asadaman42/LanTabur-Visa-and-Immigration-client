import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';


import './App.css';
import { routes } from './Routes/Routes';

function App() {
  const helmetContext = {};
  return (
    <div>
      <HelmetProvider context={helmetContext}>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      </HelmetProvider>
      
      
    </div>
  );
}

export default App;
