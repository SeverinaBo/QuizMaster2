import { Navigate, useRoutes } from 'react-router-dom';
// layouts

import SimpleLayout from './layouts/simple';
//
import DashboardLayout from "./layouts/dashboard/DashboardLayout";


import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import QuizListPage from './pages/QuizListPage';
import MainAppPage from './pages/MainAppPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/main',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/main/app" />, index: true },
        { path: 'app', element: <MainAppPage /> },
        { path: 'quiz_games', element: <QuizListPage /> },
        ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/main/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
