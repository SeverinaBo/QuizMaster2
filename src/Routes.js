import  {Routes, Route} from 'react-router-dom';

import MainAppPage from './pages/MainAppPage';

import CreateQuizPage from "./pages/CreateQuizPage";
import JoinGame from "./Game/JoinGame";

import QuizListPage from "./pages/QuizListPage";




// ----------------------------------------------------------------------

/* export default function Router() {
  const routes = useRoutes([
    {
      path: '/main',
      element: <MainAppPage />,
      children: [
        { element: <Navigate to="/main" />, index: true },
        { path: 'app', element: <MainAppPage /> },
        { path: 'join', element: <JoinGame /> },
        { path: 'create', element: <CreateQuizPage /> },
        { path: 'quizzes', element: <QuizListPage /> },
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
} */


const Routes = () =>{
    return(
        <>
        <Routes>
            <Route path='/' element={ <MainAppPage/> } />
            <Route path='/join' element={ <JoinGame/> } />
            <Route path='/create' element={ <CreateQuizPage/> } />
            <Route path='/quizzez' element={ <QuizListPage/> } />
        </Routes>

        </>
    )
}


export default Routes