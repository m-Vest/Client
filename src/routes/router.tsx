import { ROUTES_CONFIG } from './routesConfig';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/home/Home';
import OnBoarding from '../pages/onboarding/OnBoarding';
import Login from '../pages/login/Login';
import NamePage from '../pages/onboarding/NamePage';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTES_CONFIG.home.path,
        element: <Home />,
      },
      {
        path: ROUTES_CONFIG.login.path,
        element: <Login />,
      },
      {
        path: ROUTES_CONFIG.onboarding.path,
        element: <OnBoarding />,
      },
      {
        path: ROUTES_CONFIG.namePage.path,
        element: <NamePage />,
      },
     
    ],
  },
]);