

import * as React from "react";
import {Button, LinearProgress, IconButton, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";


import EditIcon from "@mui/icons-material/Edit";
import QuizForm from "./QuizForm";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useQuiz} from "../api/quizApi";
import ResponsiveAppBar from "../layouts/dashboard/header/ResponsiveAppBar";
import AddQuestion from "../Quizzez/AddQuestion";



const QuizQuestionsList = () => {

    const navigate = useNavigate();

    const { isFetching, quizez = [], refetch } = useQuiz();
    const [openQuestionModal, setOpenQuestionModal] = useState(false);
    const [editQuestion, setEditQuestion] = useState(null);

    const loadingElement = isFetching && (

        <TableRow>
            <TableCell colSpan={10} align="center">
                <LinearProgress />
            </TableCell>
        </TableRow>
    );

    const noQuestionsElement = !quizez.length && (
        <TableRow>
            <TableCell colSpan={10} align="center">
                No questions found
            </TableCell>
        </TableRow>
    );

const quizListElements = quizez.map((questionList, i) => (
    <TableRow key={i}>
        <TableCell>{questionList.createdBy}</TableCell>
        <TableCell>{questionList.quizTitle}</TableCell>
        <TableCell>{questionList.question}</TableCell>
        <TableCell>{questionList.answerA}</TableCell>
        <TableCell>{questionList.answerB}</TableCell>
        <TableCell>{questionList.answerC}</TableCell>
        <TableCell>{questionList.answerD}</TableCell>
        <TableCell>{questionList.correctAnswer}</TableCell>
        <TableCell>{questionList.timePerQuestion}</TableCell>
        <TableCell>
                    <Button variant="contained" onClick={() => navigate(`/quizez/${questionList.id}`)}>
                     Click
                    </Button>

         {/*   <IconButton
                onClick={() =>
                    addProduct({
                        id: questionList.id,
                        question: questionList.question,
                        price: questionList.price,
                    })
                }
            >
                <AddShoppingCartIcon />
            </IconButton> */}

            <IconButton
                onClick={() => {
                    setOpenQuestionModal(true);
                    setEditQuestion(questionList);
                }}
            >
                <EditIcon />
            </IconButton>
        </TableCell>
    </TableRow>

));

return (

            <>

                <ResponsiveAppBar/>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Created By</TableCell>
                            <TableCell>Quiz Title</TableCell>
                            <TableCell>Question</TableCell>
                            <TableCell>Answer A</TableCell>
                            <TableCell>Answer B</TableCell>
                            <TableCell>Answer C</TableCell>
                            <TableCell>Answer D</TableCell>
                            <TableCell>Correct Answer</TableCell>
                            <TableCell>Time for question</TableCell>
                            <TableCell>Edit/Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{loadingElement || noQuestionsElement || quizListElements}</TableBody>
                </Table>
                <AddQuestion />
                <QuizForm fetchQuestions={refetch} open={openQuestionModal} onClose={() => setOpenQuestionModal(false)} quiz={editQuestion} />


                    <Button
                        style={{
                            fontSize: "1rem",
                            textAlign: "center",
                            fontWeight: "bold",
                            margin: "1rem 0",
                            maxWidth: '500px',
                            maxHeight: '50px',
                        }}
                        variant="contained"
                        position="center"
                    >
                        Finish Quiz
                    </Button>


            </>

)
}

export default QuizQuestionsList