import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom';

import './index.css';
import App from './App';
import SignUp from './components/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path:'/',
    element: <SignUp />
  },
  {
    path:'/yourboards',
    element: <App />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

