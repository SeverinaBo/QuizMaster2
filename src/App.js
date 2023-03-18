import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';

import MainAppPage from './pages/MainAppPage';



import QuizListPage from "./pages/QuizListPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import JoinGame from "./Game/JoinGame";
import RegisterPage from "./pages/RegisterPage";
import QuizQuestionsList from "./Game/QuizQuestionsList";

import ThemeProvider from "./theme";
import ScrollToTop from "./components/scroll-to-top";
import CreateQuizIntroPage from "./pages/CreateQuizIntroPage";


import { QueryClient, QueryClientProvider } from "react-query";






// ----------------------------------------------------------------------

const queryClient = new QueryClient();

function App() {
    return (

            <BrowserRouter>
                <QueryClientProvider client={queryClient}>

                <ThemeProvider>
                    <ScrollToTop />
                <Routes>
                    <Route path='/' element={ <MainAppPage/> }/>
                    <Route path='/join' element={ <JoinGame/> }/>
                    <Route path='/create' element={ <CreateQuizIntroPage/> }/>
                    <Route path='/quizzes' element={ <QuizListPage/> }/>
                    <Route path='/login' element={ <LoginPage/> }/>
                    <Route path='/quizCreating' element={ <QuizQuestionsList/> }/>
                    <Route path='/register' element={ <RegisterPage/> }/>
                    <Route path='/404' element={ <Page404/> }/>
                    <Route path='/*' element={ <Page404/> }/>
                </Routes>
                </ThemeProvider>
                </QueryClientProvider>
            </BrowserRouter>

    );
}

export default App;
