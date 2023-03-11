import {Box, Grid, List, MenuItem, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useState} from "react";
import {quiz} from "./CreatedQuiz";


const StyledContent = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

const answerOptions = [
    {
        value: 'a',
        label: 'A',
    },
    {
        value: 'b',
        label: 'B',
    },
    {
        value: 'c',
        label: 'C',
    },
    {
        value: 'd',
        label: 'D',
    },
];

export default function CreatingQuizTemplate() {


    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [answers, setAnswers] = useState({
        a: '',
        b: '',
        c: '',
        d: '',
    });

    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0
    })

    const {questions} = quiz;
    const {question, choices} = questions[currentQuestion]

    const handleChange = (event) => {
        const {name, value} = event.target;
        if (name === 'question') {
            setCurrentQuestion(value);
        } else {
            setAnswers({...answers, [name]: value});
        }
    };


    return (
        <>
            <StyledContent>
                <Grid item xs={12}>
                    <TextField placeholder="Question"
                               name="question"
                               required
                               value={currentQuestion}
                               onChange={handleChange}
                               margin="dense"
                               variant="outlined"
                               fullWidth
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextField placeholder="Answer A"
                               name="a"
                               value={answers.a}
                               onChange={handleChange}
                               required
                               fullWidth
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextField placeholder="Answer B"
                               name="b"
                               value={answers.b}
                               onChange={handleChange}
                               required
                               fullWidth
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextField placeholder="Answer C"
                               name="c"
                               value={answers.c}
                               onChange={handleChange}
                               required
                               fullWidth
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextField placeholder="Answer D"
                               name="d"
                               value={answers.d}
                               onChange={handleChange}
                               required
                               fullWidth
                    />
                </Grid>



                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField>{questions[currentQuestion].question}</TextField>

                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Correct answer"
                        defaultValue="a"
                    >{choices.map((item) => (
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))}
                    </TextField>
               {/*     <div>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Correct answer"
                            defaultValue="a"
                        >
                            {answerOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div> */}
                </Box>
            </StyledContent>

        </>
    )
}

