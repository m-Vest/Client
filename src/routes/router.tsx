import { ROUTES_CONFIG } from './routesConfig';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/home/Home';
import OnBoarding from '../pages/onboarding/OnBoarding';
import Login from '../pages/login/Login';
import NamePage from '../pages/onboarding/NamePage';
import List from '../pages/list/List';
import KakaoRedirect from '../pages/login/auth/KakaoLogin'; 
import Asset from '../pages/assets/Asset';
import Order from '../pages/order/Order';
import ProtectRoute from './ProtectRoute';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // 🔓 로그인 필요 없는 애들
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
      {
        path: ROUTES_CONFIG.kakaoAuth.path,
        element: <KakaoRedirect />,
      },

      // 🔒 로그인 필요한 애들
      {
        element: <ProtectRoute />,
        children: [
          {
            path: ROUTES_CONFIG.home.path,
            element: <Home />,
          },
          {
            path: ROUTES_CONFIG.list.path,
            element: <List />,
          },
          {
            path: ROUTES_CONFIG.order.path,
            element: <Order />,
          },
          {
            path: ROUTES_CONFIG.assets.path,
            element: <Asset />,
          },
        ],
      },
    ],
  },
]);