import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';

import MainAppPage from './pages/MainAppPage';


import CreateQuizPage from "./pages/CreateQuizPage";
import QuizListPage from "./pages/QuizListPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import JoinGame from "./Game/JoinGame";
import RegisterPage from "./pages/RegisterPage";
import {HelmetProvider} from "react-helmet-async";
import ThemeProvider from "./theme";
import ScrollToTop from "./components/scroll-to-top";






// ----------------------------------------------------------------------



function App() {
    return (

            <BrowserRouter>
                <ThemeProvider>
                    <ScrollToTop />
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
                </ThemeProvider>
            </BrowserRouter>

    );
}

export default App;
