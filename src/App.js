import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';

import MainAppPage from './pages/MainAppPage';


import CreateQuizPage from "./pages/CreateQuizPage";
import QuizListPage from "./pages/QuizListPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import JoinGame from "./Game/JoinGame";
import RegisterPage from "./pages/RegisterPage";





// ----------------------------------------------------------------------



function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <MainAppPage/> }/>
                    <Route path='/join' element={ <JoinGame/> }/>
                    <Route path='/create' element={ <CreateQuizPage/> }/>
                    <Route path='/quizzes' element={ <QuizListPage/> }/>
                    <Route path='/login' element={ <LoginPage/> }/>
                    <Route path='/register' element={ <RegisterPage/> }/>
                    <Route path='/404' element={ <Page404/> }/>
                    <Route path='/*' element={ <Page404/> }/>
                </Routes>
                </BrowserRouter>

    );
}

export default App;
