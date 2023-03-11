import {styled} from "@mui/material/styles";
import { useState} from "react";
import {Button, TextField} from "@mui/material";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";


const StyledContent = styled('div')(({theme}) => ({
    maxWidth: 1000,
    margin: 'auto',
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));


export default function CreateGameIntro() {

    const [quizIntroData, setQuizIntroData] = useState({
        name: '',
        quizName: ''
    })



    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        quizName: Yup.string().required("Required"),
    });


    const handleSubmit = (e) =>{
        e.preventDefault();
        localStorage.setItem('quizIntr', JSON.stringify(quizIntroData))
    }


    const handleInputChange = (e) =>{
        const { name, value } = e.target;
        setQuizIntroData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <>
            <StyledContent>
                <h1>Create New Quiz</h1>
                <Formik
                    initialValues={quizIntroData}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {({ errors, touched }) => (
                        <Form>
                <h3>Created by:</h3>
                <Field placeholder="Name"
                           name="name"
                           required
                           fullWidth
                        error={errors.name && touched.name}
                        helperText={errors.name && touched.name && errors.name}
                        as={TextField}
                />


                <h3>Quiz Name:</h3>
                <Field placeholder="Quiz Name"
                           name="quizName"
                           required
                           fullWidth
                        error={errors.quizName && touched.quizName}
                        helperText={
                        errors.quizName && touched.quizName && errors.quizName}
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
                    >
                    Continue
                </Button >
                </Form>
                        )}
                </Formik>
            </StyledContent>

        </>
    )
}