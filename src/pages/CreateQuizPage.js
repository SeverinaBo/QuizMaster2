import {Button, Grid, MenuItem, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";

import {useState} from "react";
import ResponsiveAppBar from "../layouts/dashboard/header/ResponsiveAppBar";


const StyledContent = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));


export default function QuestionForm(props) {

    const [name, setName] = useState('');

    const [quizTitle, setQuizTitle] = useState('');


    return (
        <>
            <ResponsiveAppBar/>

            <StyledContent>
                <h1>Create New Quiz</h1>

                <h3>Created by:</h3>
                <TextField placeholder="Your name"
                           name="name"
                           required
                           fullWidth
                           onClick={setName}
                />

                <h3>Quiz Title: </h3>
                <TextField placeholder="Quiz Title"
                           name="quizTitle"
                           required
                           fullWidth
                           onClick={setQuizTitle}
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
                </Button>
            </StyledContent>

        </>
    )
}


