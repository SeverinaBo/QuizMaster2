import ResponsiveAppBar from "../layouts/dashboard/header/ResponsiveAppBar";
import {Field, Form, Formik, useFormik} from "formik";
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";
import * as React from "react";
import {styled} from "@mui/material/styles";
import {useCreateQuizForm} from "../api/quizApi";
import * as Yup from 'yup'


export const StyledContent = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));


const QuizForm = () => {
    /*
        const [correctAnswer, setCorrectAnswer] = React.useState('');
        const [timePerQuestion, setTimePerQuestion] = React.useState(0);*/


    const quizFormValidationSchema = Yup.object().shape({
        question: Yup.string()
            .min(5, ({label, min}) => `${label} must be greater than ${min} chars`)
            .max(50)
            .required()
            .label("Question")
        /*    answerA: Yup.string()
                .required(),
            answerB: Yup.string()
                .required(),
            answerC: Yup.string()
                .required(),
            answerD: Yup.string()
                .required(),
            correctAnswer: Yup.string()
                .required()*/
    })

    const CreateQuizFormModalWithFormik = ({fetchQuizzez, open, onClose, quiz}) => {

        const [alertOpen, setAlertOpen] = React.useState(false);
        const createQuizForm = useCreateQuizForm()

        const initialQuizValues = quiz ? {
            id: quiz.id,
            question: quiz.question,
            /*    answerA: quiz.answerA,
                answerB: quiz.answerB,
                answerC: quiz.answerC,
                answerD: quiz.answerD,
                correctAnswer: quiz.correctAnswer*/
        } : {
            id: null,
            question: '',
            /*        answerA: '',
                    answerB: '',
                    answerC: '',
                    answerD: '',
                    correctAnswer: ''*/
        }


        /* const [questionCount, setQuestionCount] = React.useState(0);
    */

        /*  useEffect(() => {
              document.title = {questionCount};
          })*/

        /*    const navigate = useNavigate();

            const {quizez} = useQuiz(); */


        /*
            const handleAnswerChange = (event) => {
                setCorrectAnswer(event.target.value);
            };

            const handleTimerChange = (event) => {
                setTimePerQuestion(event.target.value);
            };
        */

        /*    const formik = useFormik({
                initialValues: {
                    correctAnswer: '',
                    timePerQuestion:'' ,
                },
                onSubmit: (values) => {
                    console.log(values);
                },
            });*/

        /*   const quizElement = quizez.map((quizForm, i) => (
               <TableRow key={i}>
                   <TableCell>{quizForm.question}</TableCell>
                   <TableCell>{quizForm.answerA}</TableCell>
                   <TableCell>{quizForm.answerB}</TableCell>
                   <TableCell>{quizForm.answerC}</TableCell>
                   <TableCell>{quizForm.answerD}</TableCell>
                   <TableCell>{quizForm.correctAnswer}</TableCell>

                   <IconButton
                       onClick={() =>
                           addQuizQuestion({
                               id: quizForm.id,
                               question: quizForm.question,
                               answerA: quizForm.answerA,
                               answerB: quizForm.answerB,
                               answerC: quizForm.answerC,
                               answerD: quizForm.answerD,
                               correctAnswer: quizForm.correctAnswer,
                           })
                       }
                   >
                       <AddIcon />
                   </IconButton>
               </TableRow> */

        return (
            <>
                <ResponsiveAppBar/>
                <StyledContent>

                    <Grid
                        container
                        direction="row"
                    >
                        <Typography variant="h3" sx={{mb: 5}}>
                            Question {/* {questionCount} */}
                        </Typography>
                        <Formik initialValues={initialQuizValues}
                                onSubmit={async (quiz, {setSubmitting}) => {
                                    await createQuizForm(quiz)
                                    setSubmitting(false)

                                    setAlertOpen(true)
                                }}
                                validationSchema={quizFormValidationSchema}>
                            {(props) => {
                                return (
                                    <Form>
                                        <Grid item xs={12}>
                                            <Field placeholder="Question"
                                                   name="question"
                                                   required
                                                   fullWidth
                                                   variant="outlined"
                                                   margin="dense"
                                                   as={TextField}
                                            />
                                        </Grid>
                                        {/*<Grid item md={6} xs={12}>
                                <Field
                                    placeholder="Answer A"
                                    name="a"
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    as={TextField}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Field
                                    placeholder="Answer B"
                                    name="b"
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    as={TextField}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Field
                                    placeholder="Answer C"
                                    name="c"
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    as={TextField}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Field
                                    placeholder="Answer D"
                                    name="d"
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    as={TextField}
                                />
                            </Grid>

                            <Grid item xs={6}
                                  required
                                  top-margin={1}
                            >
                                <FormControl fullWidth>
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

                                </FormControl>
                            </Grid>
                            <Grid sx={{minWidth: 120}}
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
                            <Grid sx={{minWidth: 120}}
                                  item xs={6}
                                  required
                                  top-margin={1}
                            >
                                <Button
                                    style={{
                                        fontSize: "1rem",
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        margin: "1rem 0"
                                    }}
                                    variant="contained"
                                    color="info"
                                    fullWidth
                                >
                                    Cancel
                                </Button>
                            </Grid>*/}
                                        <Grid sx={{minWidth: 120}}
                                              item xs={6}
                                              required
                                              top-margin={1}
                                        >
                                            <Button
                                                style={{
                                                    fontSize: "1rem",
                                                    textAlign: "center",
                                                    fontWeight: "bold",
                                                    margin: "1rem 0"
                                                }}
                                                variant="contained"

                                                fullWidth
                                            >
                                                Add another question
                                            </Button>
                                        </Grid>

                                        {/*  <Grid sx={{minWidth: 120}}
                                  item xs={12}
                                  required
                                  top-margin={1}
                            >
                                <Button
                                    style={{
                                        fontSize: "1rem",
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        margin: "1rem 0"
                                    }}
                                    variant="contained"
                                    fullWidth
                                >
                                    Finish
                                </Button>
                            </Grid> */}


                                    </Form>
                                )
                            }
                            }
                        </Formik>
                    </Grid>
                </StyledContent>
            </>
        )

    }
}
export default QuizForm