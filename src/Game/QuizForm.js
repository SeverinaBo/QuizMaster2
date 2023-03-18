
import {Field, Formik} from "formik";
import {
    Button,
    Dialog,
    Alert,
    CircularProgress,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    Snackbar,
} from "@mui/material";
import * as React from "react";
import {styled} from "@mui/material/styles";
import {useCreateQuizForm, useQuiz} from "../api/quizApi";
import * as Yup from 'yup'

import {useNavigate} from "react-router-dom";
import {useState} from "react";



export const StyledContent = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));





    const quizFormValidationSchema = Yup.object().shape({
        question: Yup.string()
            .min(5, ({label, min}) => `${label} must be greater than ${min} chars`)
            .max(50)
            .required()
            .label("Question"),
            answerA: Yup.string()
                .required(),
            answerB: Yup.string()
                .required(),
            answerC: Yup.string()
                .required(),
            answerD: Yup.string()
                .required(),
            correctAnswer: Yup.string()
                .required()
    })

    const QuizForm = ({ fetchQuestions,  onClose, quiz}) => {

        const [open, setOpen] = useState(false);

        const handleClose = () => {
            setOpen(false);
        };

        const handleOpen = () => {
            setOpen(true);
        };

        const [alertOpen, setAlertOpen] = React.useState(false);
        const createQuizForm = useCreateQuizForm();

        const [correctAnswer, setCorrectAnswer] = React.useState('');
        const [timePerQuestion, setTimePerQuestion] = React.useState(0);

        const initialQuizValues = quiz ? {
            id: quiz.id,
            question: quiz.question,
                answerA: quiz.answerA,
                answerB: quiz.answerB,
                answerC: quiz.answerC,
                answerD: quiz.answerD,
                correctAnswer: quiz.correctAnswer
        } : {
            id: null,
            question: '',
                    answerA: '',
                    answerB: '',
                    answerC: '',
                    answerD: '',
                    correctAnswer: ''
        }



            const navigate = useNavigate();

            const {quizez} = useQuiz();


            const handleAnswerChange = (event) => {
                setCorrectAnswer(event.target.value);
            };

            const handleTimerChange = (event) => {
                setTimePerQuestion(event.target.value);
            };


        const title = quiz ? "Edit question" : "Add new question"
        return (
            <>

                <StyledContent>
                     <Button onClick={handleOpen}>Add new question</Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>{title}</DialogTitle>

                    <Grid
                        container
                        direction="row"
                    >

                        <Formik initialValues={initialQuizValues}
                                onSubmit={async (quiz, {setSubmitting}) => {
                                    await createQuizForm(quiz)
                                    setSubmitting(false)
                                    onClose()
                                    fetchQuestions()
                                    setAlertOpen(true)
                                }}
                                validationSchema={quizFormValidationSchema}>
                            {(props) => {
                                return (
                                    <>
                                    <DialogContent>

                                            <Typography variant="h7" >Question</Typography>
                                            <Field placeholder="Question"
                                                   name="question"
                                                   required
                                                   fullWidth
                                                   variant="outlined"
                                                   margin="dense"
                                                   as={TextField}
                                            />


                                            <Typography variant="h7" >A</Typography>
                                <Field
                                    placeholder="Answer A"
                                    name="a"
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    as={TextField}
                                />


                                <Typography variant="h7" > B</Typography>
                                <Field
                                    placeholder="Answer B"
                                    name="b"
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    as={TextField}
                                />


                                <Typography variant="h7" >C</Typography>
                                <Field
                                    placeholder="Answer C"
                                    name="c"
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    as={TextField}
                                />


                                <Typography variant="h7" >D</Typography>
                                <Field
                                    placeholder="Answer D"
                                    name="d"
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    as={TextField}
                                />


                            <Grid item xs={6}
                                  required
                                  top-margin={1}
                            >
                                <InputLabel id="select-label">Correct Answer</InputLabel>
                                <Select
                                    value={correctAnswer}
                                    label="Correct Answer"
                                    onChange={handleAnswerChange}
                                    name="correct"
                                    placeholder="Correct Answer"
                                    fullWidth
                                >
                                    <MenuItem value="a">A</MenuItem>
                                    <MenuItem value="b">B</MenuItem>
                                    <MenuItem value="c">C</MenuItem>
                                    <MenuItem value="d">D</MenuItem>
                                </Select>

                            </Grid>
                            <Grid
                                  item xs={6}
                                  required
                                  top-margin={1}
                             >
                                <InputLabel id="select-label">Set Time</InputLabel>
                                <Select
                                    value={timePerQuestion}
                                    label="Set time"
                                    onChange={handleTimerChange}
                                    name="time"
                                    placeholder="Set timer"
                                    fullWidth
                                >
                                    <MenuItem value={10}>10 sec</MenuItem>
                                    <MenuItem value={15}>15 sec</MenuItem>
                                    <MenuItem value={20}>20 sec</MenuItem>
                                    <MenuItem value={25}>25 sec</MenuItem>
                                </Select>
                            </Grid>
                                        {props.isSubmitting && <CircularProgress color="inherit"/>}
                                    </DialogContent>

                                <DialogActions>
                                <Button
                                    onClick={onClose}
                                    style={{
                                        fontSize: "1rem",
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        margin: "1rem 0"
                                    }}

                                    color="info"
                                    fullWidth
                                >
                                    Cancel
                                </Button>
                                            <Button
                                                disabled={props.isSubmitting} onClick={props.submitForm}
                                                variant="contained"
                                                fullWidth
                                                style={{
                                                    fontSize: "1rem",
                                                    textAlign: "center",
                                                    fontWeight: "bold",
                                                    margin: "1rem 0"
                                                }}
                                            >
                                                Add
                                            </Button>

                                </DialogActions>
                                    </>
                                )
                            }
                            }
                        </Formik>
                    </Grid>
                    </Dialog>
                    <Snackbar open={alertOpen}
                              anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                              autoHideDuration={3000}
                              onClose={() => setAlertOpen(false)}>
                        <Alert onClose={() => setAlertOpen(false)} severity="success" sx={{width: '100%'}}>
                           Question created!!!
                        </Alert>
                    </Snackbar>
                </StyledContent>
            </>
        )
}
export default QuizForm