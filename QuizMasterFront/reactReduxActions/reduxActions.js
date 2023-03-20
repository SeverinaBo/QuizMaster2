
import { createSlice, configureStore } from "@reduxjs/toolkit";
const createState = (quizez) => {
    return { quizez: quizez };
};
const initState = createState([]);

const quizezSlice = createSlice({
    name: "quizez",
    initialState: initState,
    reducers: {
        addQuestion(state, action) {
            const currentQuestions = [...state.quizez];
            const existingQuestions = currentQuestions.find((quz) => quz.id === action.payload.id);

            if (existingQuestions) {
                existingQuestions.quantity++;
            } else {
                existingQuestions.push({...action.payload, quantity: 1});
            }

            state.quizez = currentQuestions;
        },
        },
    });

    const reduxStore = configureStore({
            reducer: quizezSlice.reducer,
        });

        export default reduxStore;
        export const reduxActions = quizezSlice.actions;