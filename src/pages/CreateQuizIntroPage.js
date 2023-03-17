import {Button, Snackbar, TextField, Alert, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import * as React from "react";

import ResponsiveAppBar from "../layouts/dashboard/header/ResponsiveAppBar";
import * as Yup from 'yup';
import {Field, Formik} from "formik";
import {useCreateQuizDetails} from "../api/quizApi";



export const StyledContent = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

const quizIntroValidationSchema = Yup.object().shape({
    createdBy: Yup.string()
        .min(5, ({label, min}) => `${label} must be greater than ${min} chars`)
        .max(50)
        .required()
        .label("Your Name"),
    quizTitle: Yup.string()
        .min(1)
        .max(30)
        .required()
})

const CreateQuizIntroPage = ({fetchQuizzez, onClose, quiz}) => {

    const [alertOpen, setAlertOpen] = React.useState(false);

    const createQuiz = useCreateQuizDetails()


    const initialQuizIntroValues = quiz ? {
        id : quiz.id,
        createdBy: quiz.createdBy,
        quizTitle: quiz.quizTitle
    }: {
        id : null,
        createdBy: '',
        quizTitle: ''
    }


    return (
        <>
            <ResponsiveAppBar/>

            <StyledContent>

                <Formik initialValues={initialQuizIntroValues}
                        onSubmit={async (quiz, {setSubmitting}) => {
                        await createQuiz(quiz)

                            setSubmitting(false)
                            onClose()
                            fetchQuizzez()
                            setAlertOpen(true)
                        }}
                        validationSchema={quizIntroValidationSchema}>
                    {(props) => {
                        return(
                        <>
                <Typography variant="h3" sx={{mb: 5}}>
                    Create New Quiz
                </Typography>

                <Typography variant="h5" sx={{mb: 1}}>
                    Created by:
                </Typography>
                <Field placeholder="Your name"
                           name="name"

                           required
                           fullWidth
                       error={!!props.errors.createdBy && props.touched.createdBy}
                       helperText={props.touched.createdBy && props.errors["createdBy"]}
                           as={TextField}
                />

                            <Typography variant="h5" sx={{mb: 1}}>
                                Quiz Title:
                            </Typography>
                <Field placeholder="Quiz Title"
                           name="quizTitle"
                           required
                           fullWidth
                       error={!!props.errors.quizTitle && props.touched.quizTitle}
                       helperText={props.touched.quizTitle && props.errors["quizTitle"]}
                       as={TextField}
                />
                <Field placeholder="Quiz Main cover"
                       name="quizCover"
                       required
                       fullWidth

                       as={TextField}
                />

                <Button
                    style={{
                        fontSize: "1.6rem",
                        textAlign: "center",
                        fontWeight: "bold",
                        margin: "1rem 0"
                    }}
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={props.isSubmitting} onClick={props.submitForm}
                >
                   Save & continue
                </Button>
                    </>
                    )}}
                </Formik>
            </StyledContent>
            <Snackbar open={alertOpen}
                      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                      autoHideDuration={6000}
                      onClose={() => setAlertOpen(false)}>
                <Alert onClose={() => setAlertOpen(false)} severity="success" sx={{width: '100%'}}>
                    Quiz intro created!!!
                </Alert>
            </Snackbar>
        </>
    )
}

export default CreateQuizIntroPage;
