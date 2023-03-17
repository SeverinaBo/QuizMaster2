import HTTP from "./apiIndex"
import {useMutation, useQuery} from "react-query";

// http://localhost:8080/quiz/all
const getQuizez = () => HTTP.get("/quiz/all")
    .then(response => response.data)

// http://localhost:8080/quiz/create
const createQuizForm = (quiz) => HTTP.post("/quiz/create", quiz)

const createQuizJson = (quiz) => HTTP.post("/quiz", {...quiz, name: quiz.quizTitle})
    .then(response => new Promise((resolve) => {
        setTimeout(() => resolve(response.data), 2000)
    }))

// this is custom hook(useQuiz) to fetch quizzez from backend
const useQuiz = () => {
    const context = useQuery('getQuizez', getQuizez)
    return {...context, quizez: context.data}
}

const useCreateQuizForm = (config) => {
    const mutation = useMutation(createQuizJson, config)
    return mutation.mutateAsync
}

export { createQuizForm, useQuiz, useCreateQuizForm }